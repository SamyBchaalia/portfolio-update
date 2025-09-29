#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/assets/imgs');
const MAX_WIDTH = 1920;
const QUALITY = 85;

async function optimizeImages() {
  console.log('Starting image optimization...');

  async function processDirectory(dir) {
    const files = await fs.readdir(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);

      if (stat.isDirectory()) {
        await processDirectory(filePath);
      } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
        await optimizeImage(filePath);
      }
    }
  }

  async function optimizeImage(imagePath) {
    try {
      const metadata = await sharp(imagePath).metadata();
      console.log(
        `Processing ${path.basename(imagePath)} (${metadata.width}x${metadata.height})...`,
      );

      // Skip if already optimized (has .webp version)
      const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

      try {
        await fs.access(webpPath);
        console.log(`  ✓ WebP version already exists`);
        return;
      } catch {
        // WebP doesn't exist, create it
      }

      // Create WebP version
      await sharp(imagePath)
        .resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .webp({ quality: QUALITY })
        .toFile(webpPath);

      const originalSize = (await fs.stat(imagePath)).size;
      const webpSize = (await fs.stat(webpPath)).size;
      const savings = (
        ((originalSize - webpSize) / originalSize) *
        100
      ).toFixed(1);

      console.log(`  ✓ Created WebP (saved ${savings}%)`);

      // Also optimize the original if it's too large
      if (metadata.width > MAX_WIDTH || originalSize > 500 * 1024) {
        // 500KB
        const optimizedPath = imagePath.replace(
          /\.(jpg|jpeg|png)$/i,
          '.optimized.$1',
        );

        await sharp(imagePath)
          .resize(MAX_WIDTH, null, {
            withoutEnlargement: true,
            fit: 'inside',
          })
          .jpeg({ quality: QUALITY, progressive: true })
          .toFile(optimizedPath);

        // Replace original with optimized version
        await fs.rename(optimizedPath, imagePath);
        console.log(`  ✓ Optimized original image`);
      }
    } catch (error) {
      console.error(
        `  ✗ Error processing ${path.basename(imagePath)}:`,
        error.message,
      );
    }
  }

  await processDirectory(IMAGES_DIR);
  console.log('Image optimization complete!');
}

// Run if called directly
if (require.main === module) {
  optimizeImages().catch(console.error);
}

module.exports = { optimizeImages };

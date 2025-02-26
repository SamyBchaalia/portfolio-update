/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import hljs from 'highlight.js';
import jsonHighlighter from 'highlight.js/lib/languages/json';
import xmlHighlighter from 'highlight.js/lib/languages/xml';
import prettierPluginBabel from 'prettier/plugins/babel';
import prettierPluginEstree from 'prettier/plugins/estree';
import prettierPluginHtml from 'prettier/plugins/html';
import { format } from 'prettier/standalone';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
hljs.registerLanguage('json', jsonHighlighter);
hljs.registerLanguage('html', xmlHighlighter);

export async function html(value: string): Promise<string> {
  const prettyValue = await format(value, {
    parser: 'html',
    plugins: [prettierPluginHtml],
  });
  return hljs.highlight(prettyValue, { language: 'html' }).value;
}

export async function json(value: string): Promise<string> {
  const prettyValue = await format(value, {
    parser: 'json',
    printWidth: 0,
    trailingComma: 'all',
    plugins: [prettierPluginBabel, prettierPluginEstree],
  });
  return hljs.highlight(prettyValue, { language: 'javascript' }).value;
}

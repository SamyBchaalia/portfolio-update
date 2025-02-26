import React, { useMemo } from 'react';

import { renderToStaticMarkup } from '@usewaypoint/email-builder';

import HighlightedCodePanel from './helper/HighlightedCodePanel';
import { useDocument } from '../documents/editor/EditorContext';

export default function HtmlPanel() {
  const document = useDocument();
  const code = useMemo(
    () => renderToStaticMarkup(document, { rootBlockId: 'root' }),
    [document],
  );
  return <HighlightedCodePanel type="html" value={code} />;
}

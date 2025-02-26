import React, { useMemo } from 'react';

import HighlightedCodePanel from './helper/HighlightedCodePanel';
import { useDocument } from '../documents/editor/EditorContext';

export default function JsonPanel() {
  const document = useDocument();
  const code = useMemo(() => JSON.stringify(document, null, '  '), [document]);
  return <HighlightedCodePanel type="json" value={code} />;
}

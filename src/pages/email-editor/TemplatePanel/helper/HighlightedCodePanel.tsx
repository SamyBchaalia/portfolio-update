import React, { useEffect, useState } from 'react';

import { html, json } from './highlighters';

type TextEditorPanelProps = {
  type: 'json' | 'html' | 'javascript';
  value: string;
};
export default function HighlightedCodePanel({
  type,
  value,
}: TextEditorPanelProps) {
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    switch (type) {
      case 'html':
        void html(value).then(setCode);
        return;
      case 'json':
        void json(value).then(setCode);
        return;
    }
  }, [setCode, value, type]);

  if (code === null) {
    return null;
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <pre
      style={{ margin: 0, padding: 16 }}
      dangerouslySetInnerHTML={{ __html: code }}
      onClick={(ev) => {
        const s = window.getSelection();
        if (s === null) {
          return;
        }
        s.selectAllChildren(ev.currentTarget);
      }}
    />
  );
}

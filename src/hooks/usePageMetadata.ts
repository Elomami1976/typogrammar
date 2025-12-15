import { useEffect } from 'react';

interface PageMetadata {
  title?: string;
  description?: string;
}

const DESCRIPTION_SELECTOR = 'meta[name="description"]';

export default function usePageMetadata({ title, description }: PageMetadata) {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionEl = document.querySelector<HTMLMetaElement>(DESCRIPTION_SELECTOR);
    const previousDescription = descriptionEl?.getAttribute('content') ?? undefined;

    if (title) {
      document.title = title;
    }

    if (description) {
      let meta = descriptionEl;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }

    return () => {
      if (title) {
        document.title = previousTitle;
      }
      if (description) {
        const meta = document.querySelector<HTMLMetaElement>(DESCRIPTION_SELECTOR);
        if (meta) {
          if (previousDescription !== undefined) {
            meta.setAttribute('content', previousDescription);
          } else {
            document.head.removeChild(meta);
          }
        }
      }
    };
  }, [title, description]);
}

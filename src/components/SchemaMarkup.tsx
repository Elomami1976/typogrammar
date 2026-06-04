import { useEffect } from 'react';
import { normalizeUrlsInSchema } from '../seo/normalizeSeoSignals';

interface SchemaMarkupProps {
  type: 'Organization' | 'EducationalOrganization' | 'Course' | 'Article' | 'Quiz' | 'FAQPage';
  data: Record<string, any>;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';

    const rawSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };
    const schema = normalizeUrlsInSchema(rawSchema);

    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);

  return null;
};

export default SchemaMarkup;

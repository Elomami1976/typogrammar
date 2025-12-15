import { useEffect } from 'react';

interface SchemaMarkupProps {
  type: 'Organization' | 'EducationalOrganization' | 'Course' | 'Article' | 'Quiz';
  data: Record<string, any>;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    let schema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);

  return null;
};

export default SchemaMarkup;

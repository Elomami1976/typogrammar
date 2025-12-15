
import React from 'react';
import usePageMetadata from '../hooks/usePageMetadata';

interface Worksheet {
  title: string;
  description: string;
  filename: string;
  category: string;
}

const WorksheetsPage: React.FC = () => {
  usePageMetadata({
    title: 'Worksheets | TypoGrammar',
    description: 'Download free English grammar and vocabulary worksheets to practice your skills.'
  });

  const worksheets: Worksheet[] = [
    {
      title: 'Action Verbs',
      description: 'Practice common action verbs in English',
      filename: 'action-verbs.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Appearance',
      description: 'Vocabulary for describing physical appearance',
      filename: 'appearance.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Classroom Language',
      description: 'Essential classroom vocabulary and phrases',
      filename: 'classroom-language.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Clothes',
      description: 'Clothing and fashion vocabulary',
      filename: 'clothes.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Colors',
      description: 'Learn color names and descriptions',
      filename: 'COLORS.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Countries and Nationalities',
      description: 'Countries, nationalities, and languages',
      filename: 'countries-and-nationalities.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Daily Routines',
      description: 'Common daily activities and routines',
      filename: 'daily-routines.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Days of the Week',
      description: 'Learn the days of the week',
      filename: 'days-of-the-week.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Describing People',
      description: 'Adjectives and phrases for describing people',
      filename: 'describing-people.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Describing Places',
      description: 'Vocabulary for describing locations and places',
      filename: 'describing-places.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Family',
      description: 'Family members and relationships',
      filename: 'family.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Farm Animals',
      description: 'Common farm animals vocabulary',
      filename: 'farm-animals.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Food and Drinks',
      description: 'Food, beverages, and meal vocabulary',
      filename: 'food-and-drinks.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Fruits',
      description: 'Common fruit names',
      filename: 'fruits.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Furniture',
      description: 'Household furniture vocabulary',
      filename: 'furniture.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Hobbies',
      description: 'Common hobbies and leisure activities',
      filename: 'hobbies.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Jobs',
      description: 'Professions and occupations',
      filename: 'jobs.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Landscapes',
      description: 'Natural features and landscape vocabulary',
      filename: 'landscapes.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Months of the Year',
      description: 'Learn the months of the year',
      filename: 'months-of-the-year.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Numbers',
      description: 'Cardinal and ordinal numbers',
      filename: 'numbers.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Opposites',
      description: 'Common opposite word pairs',
      filename: 'opposites.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Pets',
      description: 'Common pet animals vocabulary',
      filename: 'pets.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Places in Town',
      description: 'Common places and locations in a town',
      filename: 'places-in-town.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Plants',
      description: 'Common plants and flowers',
      filename: 'plants.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Rooms in a House',
      description: 'Different rooms and parts of a house',
      filename: 'rooms-in-a-house.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'School Objects',
      description: 'Common school supplies and objects',
      filename: 'school-objects.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'School Subjects',
      description: 'Common school subjects and academic areas',
      filename: 'school-subjects.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Sea Animals',
      description: 'Marine life and ocean creatures',
      filename: 'sea-animals.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Seasons',
      description: 'The four seasons and related vocabulary',
      filename: 'seasons.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Shapes',
      description: 'Common geometric shapes',
      filename: 'shapes.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Sports',
      description: 'Common sports and athletic activities',
      filename: 'sports.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Toys',
      description: 'Common toys and playthings',
      filename: 'toys.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Transport',
      description: 'Vehicles and transportation methods',
      filename: 'transport.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Vegetables',
      description: 'Common vegetable names',
      filename: 'vegetables.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Weather',
      description: 'Weather conditions and related vocabulary',
      filename: 'weather.pdf',
      category: 'Vocabulary'
    },
    {
      title: 'Wild Animals',
      description: 'Common wild animals from around the world',
      filename: 'wild-animals.pdf',
      category: 'Vocabulary'
    }
  ];

  const categories = Array.from(new Set(worksheets.map(w => w.category)));

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 p-8 md:p-12 mb-8 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">
          Worksheets & Practice Materials
        </h1>
        <p className="font-body text-lg text-slate-600 dark:text-slate-400">
          Download free printable worksheets to practice grammar, vocabulary, and writing skills. 
          All worksheets are in PDF format and ready to print or use digitally.
        </p>
      </div>

      {worksheets.length === 0 ? (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg dark:bg-slate-800 dark:border-blue-500">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-slate-100">
                Worksheets Coming Soon
              </h3>
              <p className="font-body text-slate-600 mt-2 dark:text-slate-400">
                Add your PDF files to the <code className="bg-slate-200 px-2 py-1 rounded dark:bg-slate-700">public/worksheets/</code> folder 
                and update this page with worksheet details.
              </p>
            </div>
          </div>
        </div>
      ) : (
        categories.map(category => {
          const categoryWorksheets = worksheets.filter(w => w.category === category);
          
          return (
            <div key={category} className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6 dark:text-slate-100">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryWorksheets.map((worksheet, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200 dark:bg-slate-800/50 dark:border-slate-700 dark:hover:border-blue-500"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <svg
                          className="h-8 w-8 text-red-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-100">
                          {worksheet.title}
                        </h3>
                      </div>
                    </div>
                    <p className="font-body text-slate-600 mb-4 dark:text-slate-400">
                      {worksheet.description}
                    </p>
                    <a
                      href={`/worksheets/${worksheet.filename}`}
                      download
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                      <svg
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default WorksheetsPage;

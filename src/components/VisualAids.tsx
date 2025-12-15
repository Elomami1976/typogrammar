
import React from 'react';

// A component to visualize the transformation from active to passive voice
export const SentenceTransformationDiagram: React.FC<{ active: string; passive: string }> = ({ active, passive }) => {
  const activeParts = active.match(/(.*?)\s(.*?)\s(the .*)\./);
  const passiveParts = passive.match(/(The .*)\s(is .*?)\s(by .*)\./);

  if (!activeParts || !passiveParts) return null;

  const [, activeSubject, activeVerb, activeObject] = activeParts;
  const [, passiveSubject, passiveVerb, passiveAgent] = passiveParts;

  return (
    <div className="my-10 p-6 bg-slate-50 rounded-lg border border-slate-200 text-center font-body dark:bg-slate-800 dark:border-slate-700">
      <h4 className="text-lg font-bold text-slate-700 mb-6 dark:text-slate-300">Active to Passive Transformation</h4>
      
      {/* Active Sentence */}
      <div className="mb-8">
        <p className="font-semibold text-slate-600 mb-2 dark:text-slate-400">Active Voice</p>
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <div className="p-2 px-4 bg-blue-100 text-blue-800 rounded-md dark:bg-blue-900/50 dark:text-blue-300">
            <span className="text-xs uppercase font-semibold text-blue-500 dark:text-blue-400">Subject</span>
            <p>{activeSubject}</p>
          </div>
          <div className="p-2 px-4 bg-green-100 text-green-800 rounded-md dark:bg-green-900/50 dark:text-green-300">
             <span className="text-xs uppercase font-semibold text-green-500 dark:text-green-400">Verb</span>
            <p>{activeVerb}</p>
          </div>
          <div className="p-2 px-4 bg-purple-100 text-purple-800 rounded-md dark:bg-purple-900/50 dark:text-purple-300">
            <span className="text-xs uppercase font-semibold text-purple-500 dark:text-purple-400">Object</span>
            <p>{activeObject}</p>
          </div>
        </div>
      </div>

      {/* Arrow Visual */}
      <div className="flex justify-center items-center my-4">
        <svg width="200" height="40" viewBox="0 0 200 40" className="text-slate-400 dark:text-slate-500">
          <path d="M10,20 C40,0 160,0 190,20" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" />
          <path d="M185,15 L190,20 L185,25" stroke="currentColor" strokeWidth="2" fill="none" />
           <path d="M10,20 C40,40 160,40 190,20" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" />
        </svg>
      </div>

      {/* Passive Sentence */}
      <div>
        <p className="font-semibold text-slate-600 mb-2 dark:text-slate-400">Passive Voice</p>
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <div className="p-2 px-4 bg-purple-100 text-purple-800 rounded-md dark:bg-purple-900/50 dark:text-purple-300">
            <span className="text-xs uppercase font-semibold text-purple-500 dark:text-purple-400">Subject</span>
            <p>{passiveSubject}</p>
          </div>
          <div className="p-2 px-4 bg-green-100 text-green-800 rounded-md dark:bg-green-900/50 dark:text-green-300">
            <span className="text-xs uppercase font-semibold text-green-500 dark:text-green-400">Verb</span>
            <p>{passiveVerb}</p>
          </div>
          <div className="p-2 px-4 bg-blue-100 text-blue-800 rounded-md dark:bg-blue-900/50 dark:text-blue-300">
            <span className="text-xs uppercase font-semibold text-blue-500 dark:text-blue-400">Agent</span>
            <p>{passiveAgent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// A highly configurable component to visualize a timeline, useful for tenses
interface TimelineEvent {
  type: 'point' | 'duration' | 'now' | 'recurring' | 'arrow';
  position: number; // For points, now, recurring, and arrows
  label: string;
  sublabel?: string;
  start?: number; // For duration and arrows
  end?: number;   // For duration and arrows
}

interface TimelineDiagramProps {
  title: string;
  summary: string;
  events: TimelineEvent[];
}

export const TimelineDiagram: React.FC<TimelineDiagramProps> = ({ title, summary, events }) => {
  return (
    <div className="my-10 p-6 bg-slate-50 rounded-lg border border-slate-200 font-body dark:bg-slate-800 dark:border-slate-700">
      <h4 className="text-lg font-bold text-slate-700 mb-2 text-center dark:text-slate-300">{title}</h4>
      <p className="text-center text-slate-600 mb-10 text-sm dark:text-slate-400">{summary}</p>
      
      <div className="relative w-full h-24">
        {/* Main timeline axis */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 -translate-y-1/2 dark:bg-slate-600"></div>
        <div className="absolute top-1/2 right-0 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-slate-300 -translate-y-1/2 dark:border-l-slate-600"></div>
        <div className="absolute top-1/2 left-0 text-sm font-semibold text-slate-500 -translate-y-full -mt-2 dark:text-slate-400">Past</div>
        <div className="absolute top-1/2 right-0 text-sm font-semibold text-slate-500 -translate-y-full -mt-2 dark:text-slate-400">Future</div>

        {/* Render events */}
        {events.map((event, index) => {
          const style = { left: `${event.position}%` };
          switch (event.type) {
            case 'point':
              return (
                <div key={index} className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" style={style}>
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow dark:border-slate-800"></div>
                  <div className="absolute bottom-full mb-2 w-40 text-center -translate-x-1/2 left-1/2">
                    <p className="font-semibold text-blue-700 text-sm dark:text-blue-400">{event.label}</p>
                    {event.sublabel && <p className="text-xs text-slate-500 dark:text-slate-400">{event.sublabel}</p>}
                  </div>
                </div>
              );
            case 'duration':
              return (
                 <div key={index} className="absolute top-1/2 h-4 bg-blue-500/30 rounded-full -translate-y-1/2 dark:bg-blue-500/20" style={{ left: `${event.start}%`, width: `${(event.end ?? 0) - (event.start ?? 0)}%` }}>
                   <div className="absolute top-full mt-2 w-40 text-center -translate-x-1/2" style={{ left: `50%` }}>
                     <p className="font-semibold text-blue-700 text-sm dark:text-blue-400">{event.label}</p>
                     {event.sublabel && <p className="text-xs text-slate-500 dark:text-slate-400">{event.sublabel}</p>}
                   </div>
                 </div>
              );
            case 'recurring':
               return (
                <div key={index} className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" style={style}>
                  <div className="w-3 h-3 bg-blue-500 rounded-full opacity-60"></div>
                </div>
              );
            case 'arrow':
              return (
                <div key={index} className="absolute top-1/2 h-0.5 bg-blue-500 -translate-y-1/2" style={{ left: `${event.start}%`, width: `${(event.end ?? 0) - (event.start ?? 0)}%` }}>
                   <div className="absolute top-0 right-0 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-blue-500 -translate-y-1/2"></div>
                </div>
              );
            case 'now':
              return (
                <div key={index} className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" style={style}>
                  <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow dark:border-slate-800"></div>
                  <div className="absolute bottom-full mb-2 w-24 text-center -translate-x-1/2 left-1/2">
                    <p className="font-semibold text-green-700 dark:text-green-400">{event.label}</p>
                  </div>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

// A component to visualize simple sentence structures
export const SentenceDiagram: React.FC<{
  subject: string;
  verb: string;
  object?: string;
  prepPhrase?: string;
}> = ({ subject, verb, object, prepPhrase }) => {
  return (
    <div className="my-4 p-4 bg-slate-50 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
      <div className="flex justify-center items-stretch gap-2 flex-wrap">
        <div className="p-2 px-4 bg-blue-100 text-blue-800 rounded-md text-center dark:bg-blue-900/50 dark:text-blue-300">
          <span className="text-xs uppercase font-semibold tracking-wider text-blue-500 dark:text-blue-400">Subject</span>
          <p className="text-lg font-semibold">{subject}</p>
        </div>
        <div className="p-2 px-4 bg-green-100 text-green-800 rounded-md text-center dark:bg-green-900/50 dark:text-green-300">
           <span className="text-xs uppercase font-semibold tracking-wider text-green-500 dark:text-green-400">Verb</span>
          <p className="text-lg font-semibold">{verb}</p>
        </div>
        {object && (
          <div className="p-2 px-4 bg-purple-100 text-purple-800 rounded-md text-center dark:bg-purple-900/50 dark:text-purple-300">
            <span className="text-xs uppercase font-semibold tracking-wider text-purple-500 dark:text-purple-400">Object</span>
            <p className="text-lg font-semibold">{object}</p>
          </div>
        )}
        {prepPhrase && (
           <div className="p-2 px-4 bg-orange-100 text-orange-800 rounded-md text-center dark:bg-orange-900/50 dark:text-orange-300">
            <span className="text-xs uppercase font-semibold tracking-wider text-orange-500 dark:text-orange-400">Prep. Phrase</span>
            <p className="text-lg font-semibold">{prepPhrase}</p>
          </div>
        )}
      </div>
    </div>
  );
};
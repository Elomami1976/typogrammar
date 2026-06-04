import React, { useEffect } from 'react';

interface RedditEmbedProps {
  postUrl: string;
  postTitle: string;
  username: string;
  subreddit: string;
  height?: number;
}

const RedditEmbed: React.FC<RedditEmbedProps> = ({
  postUrl,
  postTitle,
  username,
  subreddit,
  height = 316,
}) => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="embed.reddit.com"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://embed.reddit.com/widgets.js';
      script.async = true;
      script.charset = 'UTF-8';
      document.body.appendChild(script);
    } else {
      // Trigger re-processing for already-loaded script
      const win = window as unknown as Record<string, unknown>;
      if (typeof win['redditmedia'] === 'object' && win['redditmedia'] !== null) {
        const rm = win['redditmedia'] as Record<string, unknown>;
        if (typeof rm['init'] === 'function') {
          (rm['init'] as () => void)();
        }
      }
    }
  }, []);

  return (
    <div className="my-6 overflow-x-auto">
      <blockquote
        className="reddit-embed-bq"
        style={{ height: `${height}px` }}
        data-embed-height={height}
      >
        <a href={postUrl}>{postTitle}</a>
        <br />
        by <a href={`https://www.reddit.com/user/${username}/`}>u/{username}</a> in{' '}
        <a href={`https://www.reddit.com/r/${subreddit}/`}>r/{subreddit}</a>
      </blockquote>
    </div>
  );
};

export default RedditEmbed;

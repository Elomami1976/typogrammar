import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ShortcutConfig {
  key: string;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  action: () => void;
  description: string;
}

export const useKeyboardShortcuts = (shortcuts: ShortcutConfig[]) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const shortcut = shortcuts.find(s => 
        s.key.toLowerCase() === event.key.toLowerCase() &&
        (s.ctrlKey === undefined || s.ctrlKey === event.ctrlKey) &&
        (s.shiftKey === undefined || s.shiftKey === event.shiftKey) &&
        (s.altKey === undefined || s.altKey === event.altKey)
      );

      if (shortcut) {
        event.preventDefault();
        shortcut.action();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
};

export const useGlobalKeyboardShortcuts = () => {
  const navigate = useNavigate();

  const shortcuts: ShortcutConfig[] = [
    {
      key: 'h',
      altKey: true,
      action: () => navigate('/'),
      description: 'Go to Home'
    },
    {
      key: 'g',
      altKey: true,
      action: () => navigate('/grammar-guide'),
      description: 'Open Grammar Guide'
    },
    {
      key: 's',
      ctrlKey: true,
      shiftKey: true,
      action: () => navigate('/getting-started'),
      description: 'Getting Started'
    },
    {
      key: 'p',
      altKey: true,
      action: () => navigate('/progress'),
      description: 'View Progress'
    },
    {
      key: '?',
      shiftKey: true,
      action: () => {
        alert(`Keyboard Shortcuts:
Alt + H: Home
Alt + G: Grammar Guide
Alt + P: Progress
Ctrl + Shift + S: Getting Started
Alt + T: Toggle Theme (implement in Layout)
? : Show this help`);
      },
      description: 'Show keyboard shortcuts help'
    }
  ];

  useKeyboardShortcuts(shortcuts);
};

import { useHotkeys } from 'react-hotkeys-hook';
import { useAppStore } from '@/lib/store';
import { useToast } from './use-toast';

interface KeyboardShortcuts {
  [key: string]: {
    keys: string;
    description: string;
    action: () => void;
  };
}

export function useKeyboardShortcuts() {
  const { toast } = useToast();
  const {
    setActiveTab,
    reset,
    screenshots,
    removeScreenshot,
    setSidebarCollapsed,
    sidebarCollapsed,
  } = useAppStore();

  const shortcuts: KeyboardShortcuts = {
    // Navigation shortcuts
    templates: {
      keys: 'ctrl+1',
      description: 'Switch to Templates tab',
      action: () => setActiveTab('templates'),
    },
    upload: {
      keys: 'ctrl+2',
      description: 'Switch to Upload tab',
      action: () => setActiveTab('upload'),
    },
    preview: {
      keys: 'ctrl+3',
      description: 'Switch to Preview tab',
      action: () => setActiveTab('preview'),
    },
    export: {
      keys: 'ctrl+4',
      description: 'Switch to Export tab',
      action: () => setActiveTab('export'),
    },

    // Action shortcuts
    newProject: {
      keys: 'ctrl+n',
      description: 'New project',
      action: () => {
        reset();
        toast({ title: 'New project created', description: 'All data has been reset' });
      },
    },
    save: {
      keys: 'ctrl+s',
      description: 'Save project (placeholder)',
      action: () => {
        toast({ title: 'Save shortcut', description: 'Save functionality coming soon!' });
      },
    },
    undo: {
      keys: 'ctrl+z',
      description: 'Undo last action (placeholder)',
      action: () => {
        toast({ title: 'Undo shortcut', description: 'Undo functionality coming soon!' });
      },
    },
    deleteLastScreenshot: {
      keys: 'delete',
      description: 'Delete last screenshot',
      action: () => {
        if (screenshots.length > 0) {
          const lastScreenshot = screenshots[screenshots.length - 1];
          removeScreenshot(lastScreenshot.id);
          toast({ 
            title: 'Screenshot deleted', 
            description: `Removed ${lastScreenshot.name || 'screenshot'}` 
          });
        }
      },
    },

    // UI shortcuts
    toggleSidebar: {
      keys: 'ctrl+b',
      description: 'Toggle sidebar',
      action: () => setSidebarCollapsed(!sidebarCollapsed),
    },
    showHelp: {
      keys: 'ctrl+/',
      description: 'Show keyboard shortcuts',
      action: () => {
        toast({
          title: 'Keyboard Shortcuts',
          description: 'Check the help panel for all available shortcuts',
        });
      },
    },
  };

  // Register all shortcuts
  Object.entries(shortcuts).forEach(([key, shortcut]) => {
    useHotkeys(shortcut.keys, shortcut.action, {
      preventDefault: true,
      enableOnFormTags: false,
    });
  });

  // Special shortcuts that need different behavior
  useHotkeys('escape', () => {
    // Close any open dialogs or reset selection
    toast({ title: 'Escape pressed', description: 'Clearing selections' });
  });

  useHotkeys('ctrl+shift+d', () => {
    // Developer tools or debug mode
    console.log('Debug info:', {
      screenshots: screenshots.length,
      activeTab: useAppStore.getState().activeTab,
      selectedTemplate: useAppStore.getState().selectedTemplate?.name,
    });
    toast({ title: 'Debug info', description: 'Check console for details' });
  });

  return {
    shortcuts,
    availableShortcuts: Object.entries(shortcuts).map(([key, shortcut]) => ({
      key,
      keys: shortcut.keys,
      description: shortcut.description,
    })),
  };
}

// Hook for showing shortcuts help
export function useShortcutsHelp() {
  const { shortcuts } = useKeyboardShortcuts();

  const shortcutGroups = {
    Navigation: ['templates', 'upload', 'preview', 'export'],
    Actions: ['newProject', 'save', 'undo', 'deleteLastScreenshot'],
    UI: ['toggleSidebar', 'showHelp'],
  };

  const getShortcutsByGroup = () => {
    return Object.entries(shortcutGroups).map(([groupName, shortcutKeys]) => ({
      group: groupName,
      shortcuts: shortcutKeys.map(key => shortcuts[key]).filter(Boolean),
    }));
  };

  return {
    shortcutGroups: getShortcutsByGroup(),
    allShortcuts: shortcuts,
  };
}
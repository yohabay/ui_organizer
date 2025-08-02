import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { ProjectType, Screenshot, Template } from '@/types';

interface AppState {
  // Project state
  projectType: ProjectType;
  screenshots: Screenshot[];
  selectedTemplate: Template | null;
  
  // UI state
  activeTab: string;
  selectedFrame: string;
  isLoading: boolean;
  
  // Theme and preferences
  theme: 'light' | 'dark' | 'system';
  sidebarCollapsed: boolean;
  
  // Recent projects
  recentProjects: Array<{
    id: string;
    name: string;
    type: ProjectType;
    screenshotCount: number;
    lastModified: Date;
  }>;
  
  // Actions
  setProjectType: (type: ProjectType) => void;
  setScreenshots: (screenshots: Screenshot[]) => void;
  addScreenshot: (screenshot: Screenshot) => void;
  removeScreenshot: (id: string) => void;
  setSelectedTemplate: (template: Template | null) => void;
  setActiveTab: (tab: string) => void;
  setSelectedFrame: (frame: string) => void;
  setIsLoading: (loading: boolean) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  addRecentProject: (project: Omit<AppState['recentProjects'][0], 'lastModified'>) => void;
  clearRecentProjects: () => void;
  reset: () => void;
}

const initialState = {
  projectType: 'website' as ProjectType,
  screenshots: [],
  selectedTemplate: null,
  activeTab: 'templates',
  selectedFrame: 'none',
  isLoading: false,
  theme: 'system' as const,
  sidebarCollapsed: false,
  recentProjects: [],
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      ...initialState,
      
      setProjectType: (type) => set({ projectType: type }),
      
      setScreenshots: (screenshots) => set({ screenshots }),
      
      addScreenshot: (screenshot) => 
        set((state) => ({ 
          screenshots: [...state.screenshots, screenshot] 
        })),
      
      removeScreenshot: (id) => 
        set((state) => ({ 
          screenshots: state.screenshots.filter(s => s.id !== id) 
        })),
      
      setSelectedTemplate: (template) => set({ selectedTemplate: template }),
      
      setActiveTab: (tab) => set({ activeTab: tab }),
      
      setSelectedFrame: (frame) => set({ selectedFrame: frame }),
      
      setIsLoading: (loading) => set({ isLoading: loading }),
      
      setTheme: (theme) => set({ theme }),
      
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      
      addRecentProject: (project) => 
        set((state) => ({
          recentProjects: [
            { ...project, lastModified: new Date() },
            ...state.recentProjects.filter(p => p.id !== project.id).slice(0, 9)
          ]
        })),
      
      clearRecentProjects: () => set({ recentProjects: [] }),
      
      reset: () => set(initialState),
    }),
    {
      name: 'portfolio-designer-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        sidebarCollapsed: state.sidebarCollapsed,
        recentProjects: state.recentProjects,
      }),
    }
  )
);

// Selectors for better performance
export const useProjectData = () => useAppStore(state => ({
  projectType: state.projectType,
  screenshots: state.screenshots,
  selectedTemplate: state.selectedTemplate,
}));

export const useUIState = () => useAppStore(state => ({
  activeTab: state.activeTab,
  selectedFrame: state.selectedFrame,
  isLoading: state.isLoading,
  sidebarCollapsed: state.sidebarCollapsed,
}));

export const useTheme = () => useAppStore(state => state.theme);
export const useRecentProjects = () => useAppStore(state => state.recentProjects);
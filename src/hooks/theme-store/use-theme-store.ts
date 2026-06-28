import { create } from 'zustand';

type ThemeStore = {
  theme: 'dark';
  setTheme: (_: { theme: 'dark' }) => void;
};

const useThemeStore = create<ThemeStore>()((set) => ({
  theme: 'dark',
  setTheme: () => set({ theme: 'dark' }),
}));

export default useThemeStore;

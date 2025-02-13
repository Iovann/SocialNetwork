import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  theme: 'light',

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  logout: async () => {
    await AsyncStorage.removeItem('user');
    set({ user: null, isAuthenticated: false });
  },
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),

  // Initialisation du store
  initializeStore: async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        set({ user: JSON.parse(storedUser), isAuthenticated: true });
      }
    } catch (error) {
      console.error('Error initializing store:', error);
    }
  },
}));

export default useStore;

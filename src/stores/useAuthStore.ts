import { createStore } from 'zustand/vanilla';
import { User } from '@/types/Data';

type AuthState = {
  user: User | null;
  // eslint-disable-next-line no-unused-vars
  setUser: (user: User | null) => void;
  logout: () => void;
};

export const authStore = createStore<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

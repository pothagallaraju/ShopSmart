import { create } from 'zustand';
import { AdminState } from '../types';

export const useAdminStore = create<AdminState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
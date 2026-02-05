import { create } from 'zustand';
import { Socket } from 'socket.io-client';
import { Notification } from '@/types/notification';

interface NotiStoreState {
  notiSocket: Socket | null;
  setNotiSocket: (socket: Socket | null) => void;
  notifications: Notification[];
  setNotifications: (notifications: Notification[]) => void;
}

const useNotiStore = create<NotiStoreState>(set => ({
  notiSocket: null,
  setNotiSocket: socket => set({ notiSocket: socket }),
  notifications: [],
  setNotifications: notifications => set({ notifications }),
}));

export default useNotiStore;

import { Users } from '@/types/user';

export interface Notification {
  _id: string;
  target_id: number;
  content: string;
  type?: string;
  channel?: string;
  extra?: {
    boardType: string; // 여기를 상품 id로 해야하나?
    postId: string;
  };
  user: Users;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

//새로운 알림
export interface NewNotification {
  newNoti: Notification;
  list: Notification[];
}

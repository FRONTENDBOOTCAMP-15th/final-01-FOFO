import { ChatMessage } from "@/app/chat/_types/chat";
import { Users } from "@/types/user";

interface MessageBubbleProps {
  message: ChatMessage; // 표시할 메시지 객체
  isMe: boolean;        // 본인이 보낸 메시지인지 여부
  sender?: Users;        // 메시지 발신인 정보 (상대방 메시지인 경우에만 주로 사용)
}

export default function MessageBubble({ message, isMe, sender }: MessageBubbleProps) {
  // 프로필 이미지 경로 (없으면 기본 이미지)
  const displayImage = sender?.image || '/images/favicon.svg';

  // 시간 포맷팅 함수 (MM-DD HH:mm 형식)
  const formatTime = (createdAt: string) => {
    return createdAt ? createdAt.substring(5) : '';
  };

  return (
    <>
      <div className="flex ml-auto items-end gap-1.5">
        <div className="flex flex-col">
          <span className="text-xs text-br-input-active-line ml-auto">
            읽음
          </span>
          <span className="text-xs text-br-input-active-line">오후 3:30</span>
        </div>
        <p className="min-w-25.25 max-w-53.25 w-fit bg-br-primary-500 px-3.5 py-2.5 text-[14px] text-[#ffffff] rounded-[10px]">
          {message.content}
        </p>
      </div>
    </>
  );
}
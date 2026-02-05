import { ChatRoomState } from '@/app/chat/_types/chat';
import useUserStore from '@/store/authStore';
import Image from 'next/image';
import Link from 'next/link';


interface ChatItemProps {
  room: ChatRoomState;             // 채팅방 상태 정보 (방 정보, 마지막 메시지, 읽지 않은 수 등)
  isActive: boolean;               // 현재 활성화(선택)된 방인지 여부
  onSelect: (id: string) => void;  // 방 선택 시 실행될 핸들러
  onLeave: (id: string) => void;   // 방 나가기 버튼 클릭 시 실행될 핸들러
}

//채팅 컴포넌트
//채팅 부분 api 알게 되면 수정예정
export default function ChatItem({ room, isActive, onSelect, onLeave }: ChatItemProps) {

  const { user: currentUser } = useUserStore();

  // 현재 로그인한 사용자를 제외한 상대방 정보 추출
  const partner = room.members.find(m => String(m._id) !== String(currentUser?._id));
  const displayName = partner?.name || '알 수 없는 사용자';
  const displayImage = partner?.image || '/images/favicon.svg';

  // 마지막 메시지 정보
  const lastMessage = room.lastMessage;

  // 채팅방 유형 정의 (본인이 만든 방일 경우 '문의', 상대방이 만든 방일 경우 '답변')
  const chatType = room.ownerId === currentUser?._id ? '문의' : '답변';

  // 읽지 않은 메시지 수
  const unreadCount = room.unreadCount || 0;

  // 마지막 메시지 내용 렌더링 함수
  const renderLastMessage = () => {
    if (!lastMessage) return '새로운 채팅방이 생성되었습니다.';
    return lastMessage.content || '새로운 메시지가 있습니다.';
  };

  // 채팅방 나가기 클릭 핸들러 (부모로 이벤트 전달)
  const handleLeave = (e: React.MouseEvent) => {
    e.stopPropagation(); // 부모의 onClick(onSelect) 방지
    onLeave(String(room._id));
  };

  return (
    <Link href="/chat/1" className="flex border-b border-[#F4F5FA] py-4.5">
      <div className="relative w-fit">
        <Image
          src={displayImage}
          alt={displayName}
          width={46}
          height={46}
        />
        <span className="absolute top-0 -right-2 bg-br-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          14
        </span>
      </div>
      <div className="ml-5">
        <p className="text-[15px]">{partner?.name}</p>
        <p className="text-[12px] text-br-input-active-line">
          {renderLastMessage()}
        </p>
        <span className="text-[9px] text-br-input-active-line">오후 3:30</span>
      </div>
      <Image
        src="https://res.cloudinary.com/ddedslqvv/image/upload/v1768981576/febc15-final01-ecad/qBJjByQxs.png"
        alt="강아지 실 장난감"
        width={56}
        height={56}
        className="rounded-[5px] ml-auto object-cover"
      />
    </Link>
  );
}

'use client';

import MessageBubble from '@/app/chat/[id]/MessageBubble';
import useChat from '@/app/chat/_hooks/useChat';
import useUserStore from '@/store/authStore';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ChatRoom({ id }: { id: string }) {

  const router = useRouter();
  const pathname = usePathname();
  // useChat 훅에서 채팅 관련 상태와 액션들을 가져옴
  const { activeRoomId, setActiveRoomId, rooms, messages, sendMessage, leaveRoom, enterRoom } = useChat();
  const user = useUserStore(state => state.user); // 현재 로그인한 사용자 정보

  // 초기 데이터 로드 및 가상 파트너 정보 가져오기
  useEffect(() => {
    if (!user?._id) return;

    const init = async () => {
      // 전달받은 정보를 기반으로 해당 채팅방 입장
      await enterRoom({ resourceType: 'product', resourceId: Number(id) });
    };

    init();
  }, [user, enterRoom]);

  const [message, setMessage] = useState('');

  if (!user) return null;

  // 현재 활성화된 방 정보 찾기
  const activeRoom = rooms.find(r =>
    activeRoomId !== undefined &&
    String(r._id) === String(activeRoomId)
  );

  // 현재 방의 멤버 중 내가 아닌 상대방 정보 추출
  const partner = activeRoom?.members.find(m => String(m._id) !== String(user._id));

  // 본인이 방의 개설자(ownerId)이면 '문의', 아니면 '답변'으로 표시
  const chatType = activeRoom?.ownerId === user._id ? '문의' : '답변';



  const handleConfirmSale = () => {
    // 판매 확정
    console.log('판매 확정');
  };

  const handleWriteReview = () => {
    // 리뷰 쓰기
    console.log('리뷰 쓰기');
  };

  const handleLeaveChatRoom = () => {
    // 채팅방 나가기 다음 채팅 목록으로 이동
    console.log('채팅방 나가기');
    leaveRoom(Number(id));
    router.push('/chat');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;

    // 메시지 전송 로직
    await sendMessage(message.trim());

    console.log('메시지 전송:', message);
    setMessage('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter로 전송, Shift+Enter로 줄바꿈
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      e.currentTarget.form?.requestSubmit();
    }
  };

  return (
    <div className="font-pretendard pb-15 bg-[#F4F5FA] min-h-screen">
      <header className="flex flex-col px-4 py-3.5 fixed top-0 left-0 right-0 bg-white z-10 gap-3">
        <div className="flex">
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="뒤로 가기"
            className="flex gap-3.5 items-center"
          >
            <Image src="/icons/arrow-left.svg" alt="" width={8} height={16} />
            <span className="leading-none mb-0.5">{partner?.name}</span>
          </button>
          <button
            type="button"
            aria-label="채팅 검색하기"
            onClick={() => { }}
            className="ml-auto mr-6"
          >
            <Image src="/icons/generation.svg" alt="" width={19} height={19} />
          </button>
          <button type="button" aria-label="더보기" onClick={() => { }}>
            <Image src="/icons/more.svg" alt="" width={3} height={18} />
          </button>
        </div>

        {/* 상품 정보 */}
        <div className="flex">
          <Image
            src="https://res.cloudinary.com/ddedslqvv/image/upload/v1768981576/febc15-final01-ecad/qBJjByQxs.png"
            alt="강아지 실 장난감"
            width={80}
            height={56}
            className="rounded-[5px] object-cover mr-2.5"
          />
          <div>
            <p className="text-xs font-light pt-1.75">
              강아지 천 옷 팔아요. 진짜 재질 짱인데 꼭 사세요 진짜!
            </p>
            <p className="text-[14px] font-bold">5,000원</p>
            {/* 버튼 영역 */}
            <div className="flex gap-2 mt-1.5">
              <button
                type="button"
                onClick={handleConfirmSale}
                className="px-3 py-1.5 text-xs bg-br-primary-500 text-white rounded-full"
              >
                판매 확정
              </button>
              <button
                type="button"
                onClick={handleWriteReview}
                className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded-full"
              >
                리뷰쓰기
              </button>
              <button
                type="button"
                onClick={handleLeaveChatRoom}
                className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded-full"
              >
                채팅방 나가기
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-48 px-4 flex flex-col">
        <p className="text-xs text-br-input-active-line text-center">
          2026.01.29 목요일
        </p>

        {
          messages.map((msg, index) => (
            <MessageBubble
              key={msg._id || index}
              message={msg}
              isMe={String(msg.senderId) === String(user._id)}
              sender={partner || undefined}
            />
          ))
        }

      </section>

      <footer className="bg-white fixed bottom-0 left-0 right-0 font-pretendard flex justify-between items-center w-full h-16 shadow-[0_-6px_12px_-8px_rgba(0,0,0,0.12)] px-5.75">
        <form
          onSubmit={handleSubmit}
          className="flex gap-2.5 w-full items-center"
        >
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept="image/*"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Image src="/icons/add.svg" alt="첨부하기" width={28} height={28} />
          </label>

          <textarea
            placeholder="채팅창을 입력하세요."
            rows={1}
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full h-11.5 px-6.25 py-2.5 text-[17px] rounded-4xl resize-none bg-[#F4F5FA] overflow-hidden text-br-input-active-line"
          />
          <button
            type="submit"
            aria-label="채팅 보내기"
            className="w-7 h-7 ml-1.5"
          >
            <Image src="/icons/chat-send.svg" alt="" width={28} height={28} />
          </button>
        </form>
      </footer>
    </div>
  );
}

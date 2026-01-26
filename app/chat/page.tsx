//채팅 목록

'use client';

import UnderBar from '@/components/common/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

//채팅 목록
export default function ChatPage() {
  const goBack = useRouter();
  return (
    <div className="font-pretendard pb-15">
      <header className="flex flex-col px-4 py-3.5 fixed top-0 left-0 right-0 bg-white z-10 gap-5.5">
        <div className="flex">
          <button
            type="button"
            onClick={() => goBack.back()}
            aria-label="뒤로 가기"
            className="flex gap-3.5 items-center"
          >
            <Image src="/icons/arrow-left.svg" alt="" width={8} height={16} />
            <span className="leading-none mb-0.5 text-[18px]">채팅</span>
          </button>
          <button
            type="button"
            aria-label="채팅 검색하기"
            onClick={() => {}}
            className=" ml-auto mr-6"
          >
            <Image src="/icons/generation.svg" alt="" width={19} height={19} />
          </button>
          <button type="button" aria-label="더보기" onClick={() => {}}>
            <Image src="/icons/more.svg" alt="" width={3} height={18} />
          </button>
        </div>
      </header>
      {/* 본문 */}
      <section className="mx-4 mt-10">
        <Link href="/chat/1" className="flex border-b border-[#F4F5FA] py-4.5">
          <div className="relative w-fit">
            <Image
              src="/icons/chat-profile.svg"
              alt="프로필"
              width={46}
              height={46}
            />
            <span className="absolute top-0 -right-2 bg-br-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              14
            </span>
          </div>
          <div className="ml-5">
            <p className="text-[15px]">소사동불주먹</p>
            <p className="text-[12px] text-br-input-active-line">
              지금 근처에 있어요! 혹시 아직 도착 안 하...
            </p>
            <span className="text-[9px] text-br-input-active-line">
              오후 3:30
            </span>
          </div>
          <Image
            src="https://res.cloudinary.com/ddedslqvv/image/upload/v1768981576/febc15-final01-ecad/qBJjByQxs.png"
            alt="강아지 실 장난감"
            width={56}
            height={56}
            className="rounded-[5px] ml-auto object-cover"
          />
        </Link>
        {/* 2번째 채팅 */}
        <Link href="/chat/1" className="flex border-b border-[#F4F5FA] py-4.5">
          <div className="relative w-fit">
            <Image
              src="/icons/chat-profile.svg"
              alt="프로필"
              width={46}
              height={46}
            />
            <span className="absolute top-0 -right-2 bg-br-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              14
            </span>
          </div>
          <div className="ml-5">
            <p className="text-[15px]">인천주디</p>
            <p className="text-[12px] text-br-input-active-line">
              물건 다 팔렸나요ㅠㅠ?
            </p>
            <span className="text-[9px] text-br-input-active-line">
              오후 3:30
            </span>
          </div>
          <Image
            src="https://res.cloudinary.com/ddedslqvv/image/upload/v1768981576/febc15-final01-ecad/qBJjByQxs.png"
            alt="강아지 실 장난감"
            width={56}
            height={56}
            className="rounded-[5px] ml-auto object-cover"
          />
        </Link>
        {/* 3번째 채팅 */}
        <Link href="/chat/1" className="flex border-b border-[#F4F5FA] py-4.5">
          <div className="relative w-fit">
            <Image
              src="/icons/chat-profile.svg"
              alt="프로필"
              width={46}
              height={46}
            />
            <span className="absolute top-0 -right-2 bg-br-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              14
            </span>
          </div>
          <div className="ml-5">
            <p className="text-[15px]">서울역왕발</p>
            <p className="text-[12px] text-br-input-active-line">안녕하세요~</p>
            <span className="text-[9px] text-br-input-active-line">
              오후 3:30
            </span>
          </div>
          <Image
            src="https://res.cloudinary.com/ddedslqvv/image/upload/v1768981576/febc15-final01-ecad/qBJjByQxs.png"
            alt="강아지 실 장난감"
            width={56}
            height={56}
            className="rounded-[5px] ml-auto object-cover"
          />
        </Link>
      </section>

      <UnderBar />
    </div>
  );
}

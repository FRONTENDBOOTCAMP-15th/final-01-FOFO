'use client';

import styles from './searchpage.module.css';
import { useEffect, useState } from 'react';

import UnderBar from '@/components/common/Footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const hints = [
  '"시니어 강아지가 먹을 간식 뭐야?"',
  '"활동량 적은 고양이 장난감 추천해 줘!"',
  '"관절 사료 추천해 줘!"',
];

export default function SearchPage() {
  const router = useRouter();

  const [hintIndex, setHintIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHintIndex(i => (i + 1) % hints.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* 화면 전체 래퍼 */}
      <div className="font-pretendard min-h-screen pb-15">
        {/* 헤더 */}
        <header className="px-4 pt-4.5">
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="뒤로 가기"
            className="flex items-center gap-3.5"
          >
            <Image src="/icons/arrow-left.svg" alt="" width={8} height={16} />
            <span className="leading-none">AI 검색</span>
          </button>
        </header>

        {/* 본문 */}
        <main className="px-4">
          <div className="mx-auto w-full max-w-130 flex flex-col items-center text-center">
            <div className="pt-24 sm:pt-28" />

            <Image
              src="/icons/aisearch-sparkle.svg"
              alt="별빛"
              width={40}
              height={40}
            />

            <p className="text-2xl mt-4">
              AI 검색으로 나의 포포에게
              <br /> 맞는 상품을 추천해드려요.
            </p>

            {/* 검색창 */}
            <div className="relative w-full mt-12">
              <Image
                src="/icons/aisearch-generation.svg"
                alt="검색"
                width={26}
                height={25}
                className="absolute left-4 top-1/2 -translate-y-1/2"
              />

              <input
                type="search"
                placeholder='"말랑한 간식 추천해 줘"'
                className="
                  w-full h-13
                  rounded-full
                  border border-br-input-disabled-line
                  focus:border-br-primary-500 focus:border-2 focus:outline-none
                  shadow-[0_6px_14px_-10px_rgba(0,0,0,0.25)]
                  pl-12 pr-4
                  text-center text-[15px] text-br-input-disabled-text
                "
              />
            </div>

            <div className="mt-5 h-4.5 overflow-hidden text-br-input-disabled-line text-[13px]">
              <span key={hintIndex} className={styles.hint}>
                {hints[hintIndex]}
              </span>
            </div>
          </div>
        </main>

        <UnderBar />
      </div>
    </>
  );
}

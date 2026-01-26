'use client';

import { useState } from 'react'; // ← 이것만 추가!
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProductDetailPage() {
  const goBack = useRouter();
  // 탭 상태 관리
  const [activeTab, setActiveTab] = useState('product');
  // 찜 상태 관리
  const [isWished, setIsWished] = useState(false);
  // 게시물 있을 때 버전 (***테스트용)
  const sellerData = {
    intro:
      '반갑습니다 ~ 😺 \n상점 내 합배송 환영입니당 \n언제든지 편하게 연락 부탁드려요!',
    activityScore: 4.5,
    tradeCount: 13,
    footprints: [
      {
        id: 1,
        avatar:
          'https://res.cloudinary.com/ddedslqvv/image/upload/v1769060488/febc15-final01-ecad/0OtsJhqxDW.png',
        text: '진짜 친절하시고, 상품 정말도~ 그대로예요! 제가 있는 곳까지 운전해 주셔서 감사합니다~',
        date: '대강아이지구 · 3분 전',
        rating: 5.0,
      },
      {
        id: 2,
        avatar:
          'https://res.cloudinary.com/ddedslqvv/image/upload/v1769060488/febc15-final01-ecad/UpcxMNkBGb.png',
        text: '간식까지 같이 챙겨주셔서 감사합니다**',
        date: '오리우영구 · 1일 전',
        rating: 4.5,
      },
      {
        id: 3,
        avatar:
          'https://res.cloudinary.com/ddedslqvv/image/upload/v1769060488/febc15-final01-ecad/UpcxMNkBGb.png',
        text: '상품에 적긴 흡집같던 딴데, 그래도 새상품 버치 시식 좋아요.',
        date: '를리시대어구 · 4일 전',
        rating: 4.0,
      },
      {
        id: 4,
        avatar:
          'https://res.cloudinary.com/ddedslqvv/image/upload/v1769060488/febc15-final01-ecad/UpcxMNkBGb.png',
        text: '마음에 들어요 마음에 들어요 마음에 들어요! 마음에 들어요 마음에 들어요 마음에 들어요',
        date: '을리시대어구 · 8일 전',
        rating: 5.0,
      },
    ],
    otherProducts: [
      {
        id: 1,
        image:
          'https://res.cloudinary.com/ddedslqvv/image/upload/v1769060488/febc15-final01-ecad/2-Y2nqJ3Y.jpg',
        price: '10,000원',
        name: '푸드리본 텀 소재...',
      },
      {
        id: 2,
        image:
          'https://res.cloudinary.com/ddedslqvv/image/upload/v1769060488/febc15-final01-ecad/2-Y2nqJ3Y.jpg',
        price: '10,000원',
        name: '푸드리본 텀 소재...',
      },
      {
        id: 3,
        image:
          'https://res.cloudinary.com/ddedslqvv/image/upload/v1769060488/febc15-final01-ecad/2-Y2nqJ3Y.jpg',
        price: '10,000원',
        name: '푸드리본 텀 소재...',
      },
      {
        id: 4,
        image:
          'https://res.cloudinary.com/ddedslqvv/image/upload/v1769060488/febc15-final01-ecad/2-Y2nqJ3Y.jpg',
        price: '10,000원',
        name: '푸드리본 텀 소재...',
      },
      {
        id: 5,
        image:
          'https://res.cloudinary.com/ddedslqvv/image/upload/v1769060488/febc15-final01-ecad/2-Y2nqJ3Y.jpg',
        price: '10,000원',
        name: '푸드리본 텀 소재...',
      },
    ],
  };
  // 게시물 없을 때 버전 (***테스트용)
  // const sellerData = {
  //   intro: '', // 빈 문자열
  //   activityScore: 0, // 0
  //   tradeCount: 0, // 0
  //   footprints: [], // 빈 배열
  //   otherProducts: [], // 빈 배열
  // };

  return (
    <>
      <div className="font-pretendard pb-20">
        {/* 1. 헤더 */}
        <header className="font-pretendard flex flex-row gap-3.5 mt-4.5 ml-5.5 mb-4.5 items-center justify-between">
          <button
            type="button"
            onClick={() => goBack.back()}
            aria-label="뒤로 가기"
            className="flex items-center gap-2"
          >
            <Image
              src="/icons/arrow-left.svg"
              alt=""
              width={8}
              height={16}
              className="w-4 h-4"
            />
            <span className="leading-none items-center text-center text-lg font-medium">
              상품 상세
            </span>
          </button>

          <button type="button" aria-label="더보기">
            <Image
              src="/icons/more.svg"
              alt=""
              width={3}
              height={18}
              className="flex items-center gap-3.5 mr-5.5 w-1 h-4"
            />
          </button>
        </header>
        {/* 2. 상품 이미지  */}
        <section className="w-full">
          <img
            src="https://res.cloudinary.com/ddedslqvv/image/upload/v1769060488/febc15-final01-ecad/2-Y2nqJ3Y.jpg"
            alt="상품 이미지"
            className="w-full h-auto"
          />
        </section>
        {/* 3. 본문 */}
        <div className="px-4 py-4">
          {/* 3-1. 판매자 상단 바 */}
          <section className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/ddedslqvv/image/upload/v1769060488/febc15-final01-ecad/UpcxMNkBGb.png"
              alt="판매자"
              className="w-11 h-11 rounded-full object-cover"
            />

            <span className="text-lg font-regular text-br-text-body">
              프루프루룰루
            </span>

            <div className="flex items-center gap-1 ml-auto">
              <Image
                src="/icons/footer-mypage-fill.svg"
                alt=""
                width={16}
                height={16}
                className="w-8 h-8"
              />
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-light text-br-text-body leading-tight">
                  젤리 지수
                </span>
                <span className="text-xl font-light text-br-text-body leading-none">
                  4.0
                </span>
              </div>
            </div>
          </section>
          {/* 3-2. 상품 정보 / 판매자 정보 탭 */}
          <div className="flex border-b border-[#F4F5FA]">
            <button
              onClick={() => setActiveTab('product')}
              className={`flex-1 py-3 text-center text-base ${
                activeTab === 'product'
                  ? 'border-b-2 border-br-primary-500 text-br-neutral-900'
                  : 'text-br-input-disabled-text'
              }`}
            >
              상품 정보
            </button>

            <button
              onClick={() => setActiveTab('seller')}
              className={`flex-1 py-3 text-center text-base ${
                activeTab === 'seller'
                  ? 'border-b-2 border-br-primary-500 text-br-neutral-900'
                  : 'text-br-input-disabled-text'
              }`}
            >
              판매자 정보
            </button>
          </div>
          <div>
            {/* 3-2-1. 상품 정보 탭 */}
            {/* activeTab이 'product'일 때만 보임 */}
            {activeTab === 'product' && (
              <div>
                <nav className="py-2 mt-2 mb-2 text-sm text-br-input-disabled-text">
                  고양이 &gt; 용품 &gt; 장난감
                </nav>
                <span className="mb-2 inline-block px-2 py-1 rounded-xl bg-br-primary-200 text-br-primary-500 border border-br-primary-500 text-xs">
                  판매 중
                </span>
                <h2 className="mb-2 text-lg font-semibold break-all">
                  고양이 쥐 장난감 팔아요 🐭
                </h2>
                <p className="mb-2 text-2xl font-bold text-br-primary-500">
                  5,000원
                </p>

                <article className="font-light break-all mb-2">
                  <p>고양이들 좋아 죽는 쥐 인형 팝니다 !</p>
                  <p>장난감으로 딱이에요</p>
                  <p>여러 개 샀는데 우리 고양이는 안 가지고 노네요 .....</p>
                </article>

                {/* 조회수/찜 수*/}
                <div className="flex items-center gap-3 text-sm text-br-input-disabled-text mb-6 justify-end">
                  {/* 조회수 */}
                  <div className="flex items-center gap-1">
                    <img
                      src="/icons/visile.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="brightness-30"
                    />
                    <span>103</span>
                  </div>

                  {/* 찜 수 */}
                  <div className="flex items-center gap-1">
                    <img
                      src="/icons/heart-line.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="grayscale opacity-80"
                    />
                    <span>2</span>
                  </div>
                </div>

                {/* 구분선 */}
                <hr className="border-t border-[#F4F5FA] mb-6" />

                {/* 상세 정보 */}
                <section className="mb-1">
                  <h3 className="text-lg font-semibold break-all mb-4">
                    상세 정보
                  </h3>

                  <dl className="space-y-3">
                    <div className="flex justify-between items-center">
                      <dt className="text-sm font-light text-br-input-disabled-text">
                        상품 상태
                      </dt>
                      <dd className="text-sm font-light text-br-text-body">
                        새상품
                      </dd>
                    </div>

                    <div className="flex justify-between items-center">
                      <dt className="text-sm text-br-input-disabled-text font-light">
                        희망 거래 방식
                      </dt>
                      <dd className="text-sm font-light text-br-text-body">
                        직거래
                      </dd>
                    </div>

                    <div className="flex justify-between items-center">
                      <dt className="text-sm text-br-input-disabled-text font-light">
                        희망 거래 장소
                      </dt>
                      <dd className="text-sm text-br-text-body font-light">
                        종각역 1번 출구
                      </dd>
                    </div>
                  </dl>
                </section>
              </div>
            )}

            {/* 3-2-2. 판매자 정보 탭 */}
            {/* activeTab이 'seller'일 때만 보임 */}
            {activeTab === 'seller' && (
              <div className="mt-5">
                {/* 소개글 */}
                <section>
                  <h3 className="text-lg font-semibold mb-4">소개글</h3>

                  {/* 조건부 렌더링 */}
                  {sellerData.intro ? (
                    <p className="font-light text-br-text-body leading-relaxed whitespace-pre-line mb-5">
                      {sellerData.intro}
                    </p>
                  ) : (
                    <p className="text-center text-br-input-disabled-text p-5 mb-4">
                      아직 등록된 소개글이 없어요.
                    </p>
                  )}
                </section>
                {/* 활동 지수 */}
                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-br-text-body">
                    활동 지수
                  </h3>
                  {/* 젤리 지수, 거래 횟수 박스 */}
                  <div className="flex">
                    <div className="flex-1 text-center py-4">
                      <div className="flex items-center justify-center gap-1 mb-0">
                        <span className="text-lg text-br-text-body">
                          {sellerData.activityScore.toFixed(1)}
                        </span>
                        <img
                          src="/icons/footer-mypage-fill.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="w-4 h-4"
                        />
                      </div>
                      <div className="text-sm text-br-input-disabled-text">
                        젤리 지수
                      </div>
                    </div>

                    {/* 중앙 구분선 */}
                    <div className="w-px bg-br-input-disabled-line"></div>

                    {/* 거래 횟수 */}
                    <div className="flex-1 text-center py-4">
                      <div className="text-lg text-br-text-body">
                        {sellerData.tradeCount}건
                      </div>
                      <div className="text-sm text-br-input-disabled-text">
                        거래 횟수
                      </div>
                    </div>
                  </div>
                </section>
                {/* 발자국 */}
                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-br-text-body">
                    발자국({sellerData.footprints.length})
                  </h3>

                  {sellerData.footprints.length > 0 ? (
                    <>
                      <div className="relative">
                        {/* 후기 리스트 */}
                        <ul className="space-y-3 max-h-90 overflow-hidden">
                          {sellerData.footprints.map(footprint => (
                            <li
                              key={footprint.id}
                              className="flex gap-3 pt-4 pb-4 border-b border-br-input-disabled-line"
                            >
                              <img
                                src={footprint.avatar}
                                alt="사용자"
                                className="w-10 h-10 rounded-full"
                              />

                              <div className="flex-1 min-w-0">
                                <p className="text-sm text-br-text-body mb-1 wrap-break-words font-light">
                                  {footprint.text}
                                </p>
                                <span className="text-xs text-br-input-disabled-text">
                                  {footprint.date}
                                </span>
                              </div>

                              <div className="flex flex-col items-center gap-1">
                                <img
                                  src="/icons/footer-mypage-fill.svg"
                                  alt=""
                                  className="w-4 h-4"
                                />
                                <span className="text-xs font-light text-br-text-body">
                                  {footprint.rating}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                        {/* 후기 더보기 그라디언트 */}
                        <div
                          className="
                          pointer-events-none
                          absolute bottom-0 left-0
                          w-full h-20
                          bg-linear-to-b
                          from-white/40
                          via-white/90
                          to-white
                        "
                        />
                      </div>
                      {/* 후기 더보기 버튼 */}
                      <button className="mt-2 w-full py-3 font-light bg-br-input2-disabled-bg text-br-input2-disabled-text rounded-xl">
                        후기 더보기
                      </button>
                    </>
                  ) : (
                    <p className="text-center text-br-input-disabled-text p-5 mb-4 mt-4">
                      아직 남겨진 발자국이 없어요.
                    </p>
                  )}
                </section>
                {/* 판매자의 다른 상품 */}
                <section>
                  <h3 className="text-lg font-semibold text-br-text-body mb-4">
                    판매자의 다른 상품
                  </h3>

                  {sellerData.otherProducts.length > 0 ? (
                    <div className="flex gap-2 overflow-x-auto">
                      {sellerData.otherProducts.map(product => (
                        <Link
                          key={product.id}
                          href={`/products/${product.id}`}
                          className="
                          min-w-30
                          shrink-0
                          rounded-lg
                          overflow-hidden
                        "
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={120}
                            height={120}
                            className="w-full h-30 rounded-lg"
                          />
                          <div className="mt-2 mb-1">
                            <p className="font-semibold text-br-text-body">
                              {product.price}
                            </p>
                            <p className="text-sm text-br-input-disabled-text truncate">
                              {product.name}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-br-input-disabled-text p-5 mb-4 mt-4">
                      아직 등록된 다른 상품이 없어요.
                    </p>
                  )}
                </section>
              </div>
            )}
          </div>
          {/* 찜하기 & 채팅하기 */}
          <div className="fixed bottom-0 left-0 right-0 flex gap-2 px-4 py-3 bg-white border-t border-br-input-disabled-line">
            <button
              className="flex flex-col items-center justify-center w-16 py-2"
              onClick={() => setIsWished(!isWished)}
            >
              <Image
                src={
                  isWished ? '/icons/heart-fill.svg' : '/icons/heart-line.svg'
                }
                alt="찜하기"
                width={24}
                height={24}
              />
              <span className="text-[9px] text-br-text-body mt-1">찜하기</span>
            </button>

            <Link
              href={'/chat/id'}
              className="flex-1 py-4 font-light bg-br-button-active-bg text-br-button-active-text rounded-xl text-center"
            >
              채팅 하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

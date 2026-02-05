'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import SellerProfileBar from '@/components/product/SellerProfileBar';
import ProductInfoTab from '@/components/product/ProductInfoTab';
import SellerInfoTab from '@/components/product/SellerInfoTab';
import { ProductDetail, SellerProductList, UserReview } from '@/types/product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductDetailFooter from '@/components/product/ProductDetailFooter';
import { addRecentProduct } from '@/lib/utils/storage';
import { getBookmarks } from '@/lib/api/bookmarks';

// 상품 상세 페이지 - 클라이언트 컴포넌트
export default function ProductDetailClient({
  detail,
  sellerProducts,
  review,
}: {
  detail: ProductDetail;
  sellerProducts: SellerProductList[];
  review: UserReview[];
}) {
  const [activeTab, setActiveTab] = useState('productInfo');
  const [isWished, setIsWished] = useState(false);
  const [bookmarkId, setBookmarkId] = useState<number | null>(null);

  // 최근 본 상품 저장
  useEffect(() => {
    if (detail) {
      addRecentProduct({
        _id: detail._id,
        name: detail.name,
        price: detail.price,
        mainImages: detail.mainImages,
        seller: detail.seller,
        bookmarks: detail.bookmarks,
      });
    }
  }, [detail._id]);

  // 찜 상태 확인
  useEffect(() => {
    const checkWishStatus = async () => {
      const bookmarkData = await getBookmarks();
      if (bookmarkData.ok === 1) {
        let myBookmark = null;
        for (let i = 0; i < bookmarkData.item.length; i++) {
          const eachBookmark = bookmarkData.item[i];
          if (eachBookmark.product._id === detail._id) {
            myBookmark = eachBookmark;
            break;
          }
        }
        if (myBookmark) {
          setIsWished(true);
          setBookmarkId(myBookmark._id);
        }
      }
    };

    checkWishStatus();
  }, [detail._id]);

  return (
    <div className="font-pretendard pb-20">
      {/* 헤더 */}
      <Header title="상품 상세" />

      {/* 이미지 */}
      <section className="w-full mt-4">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="aspect-square"
          style={
            {
              '--swiper-pagination-color': 'var(--primary-500)',
              '--swiper-pagination-bullet-inactive-color': 'var(--neutral-300)',
            } as React.CSSProperties
          }
        >
          {detail.mainImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.path}
                alt={`상품 이미지 ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="px-4 py-4">
        {/* 판매자 프로필 바 */}
        <SellerProfileBar seller={detail.seller} sellerReviews={review} />
        {/* 상품 정보 / 판매자 정보 탭 UI */}
        <nav className="flex border-b border-[#F4F5FA]" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'productInfo'}
            onClick={() => setActiveTab('productInfo')}
            className={`flex-1 py-3 text-center text-base ${
              activeTab === 'productInfo'
                ? 'border-b-2 border-br-primary-500 text-br-neutral-900'
                : 'text-br-input-disabled-text'
            }`}
          >
            상품 정보
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'sellerInfo'}
            onClick={() => setActiveTab('sellerInfo')}
            className={`flex-1 py-3 text-center text-base ${
              activeTab === 'sellerInfo'
                ? 'border-b-2 border-br-primary-500 text-br-neutral-900'
                : 'text-br-input-disabled-text'
            }`}
          >
            판매자 정보
          </button>
        </nav>
        {/* 탭 & 본문 */}
        {activeTab === 'productInfo' && <ProductInfoTab detail={detail} />}
        {activeTab === 'sellerInfo' && (
          <SellerInfoTab
            detail={detail}
            sellerProducts={sellerProducts}
            review={review}
            sellerReviews={review}
          />
        )}
        {/* 푸터 */}
        <ProductDetailFooter
          productId={detail._id}
          initialIsWished={isWished}
          initialBookmarkId={bookmarkId}
        />
      </div>
    </div>
  );
}

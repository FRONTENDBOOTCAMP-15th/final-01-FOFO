'use client';

import UnderBar from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { getBookmarks } from '@/lib/api/bookmarks';
import { useEffect, useState } from 'react';
import { ProductTargetBookmark } from '@/types/product';
import SavedProductCard from '@/components/mypage/SavedProductCard';

// 찜 목록
export default function WishlistPage() {
  const [bookmarks, setBookmarks] = useState<ProductTargetBookmark[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const data = await getBookmarks();

      if (data.ok === 1) {
        setBookmarks(data.item);
      }
      setIsLoading(false);
    };

    fetchBookmarks();
  }, []);

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  return (
    <>
      <div className="font-pretendard">
        {/* 헤더 */}
        <Header title="찜 목록" />

        {/* 상품 목록 */}
        <div>
          {bookmarks.length > 0 ? (
            bookmarks.map(bookmark => (
              <SavedProductCard
                key={bookmark.product._id}
                product={bookmark.product}
                isWished={true}
              />
            ))
          ) : (
            <p className="text-center mt-20 text-gray-500">
              찜한 상품이 없습니다
            </p>
          )}
        </div>
        <UnderBar />
      </div>
    </>
  );
}

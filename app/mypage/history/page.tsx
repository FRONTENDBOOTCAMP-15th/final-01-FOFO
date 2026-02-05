'use client';

import UnderBar from '@/components/common/Footer';
import Header from '@/components/common/Header';
import SavedProductCard from '@/components/mypage/SavedProductCard';
import { getBookmarks } from '@/lib/api/bookmarks';
import { getRecentProducts, RecentProductItem } from '@/lib/utils/storage';
import { useEffect, useState } from 'react';

export default function HistoryPage() {
  const [products, setProducts] = useState<RecentProductItem[]>([]);
  const [wishedProductIds, setWishedProductIds] = useState<number[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // 최근 본 상품 가져오기
      const recentProducts = getRecentProducts();
      setProducts(recentProducts);

      // 찜 목록 가져오기
      const bookmarkData = await getBookmarks();
      if (bookmarkData.ok === 1) {
        const wishedIds = bookmarkData.item.map(
          bookmark => bookmark.product._id
        );
        setWishedProductIds(wishedIds);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>로딩중...</p>
      </div>
    );
  }
  return (
    <>
      <Header title="최근 본 상품" />

      {/* 최근 본 상품 목록 */}
      <div className="font-pretendard">
        {products.length > 0 ? (
          products.map(product => (
            <SavedProductCard
              key={product._id}
              product={product}
              isWished={wishedProductIds.includes(product._id)}
            />
          ))
        ) : (
          <p className="text-center mt-20 text-gray-500">
            최근 본 상품이 없습니다
          </p>
        )}
      </div>

      <UnderBar />
    </>
  );
}

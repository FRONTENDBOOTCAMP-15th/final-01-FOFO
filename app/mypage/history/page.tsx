'use client';

import UnderBar from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Spinner from '@/components/common/Spinner';
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
      // localStorage 가져오기
      const recentProducts = getRecentProducts();

      // API 가져오기
      const bookmarkData = await getBookmarks();

      let wishedIds: number[] = [];
      if (bookmarkData.ok === 1) {
        wishedIds = bookmarkData.item.map(bookmark => bookmark.product._id);
      }

      // 둘 다 준비되면 한 번에 set
      setProducts(recentProducts);
      setWishedProductIds(wishedIds);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header title="최근 본 상품" />

      {/* 최근 본 상품 목록 */}
      <div className="pb-20 font-pretendard">
        {products.length === 0 ? (
          <div className="text-center mt-20 text-gray-500">
            최근 본 상품이 없습니다.
          </div>
        ) : (
          products.map(product => (
            <SavedProductCard
              key={product._id}
              product={product}
              isWished={wishedProductIds.includes(product._id)}
            />
          ))
        )}
      </div>

      <UnderBar />
    </>
  );
}

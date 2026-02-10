/* 검색 결과 페이지 */
'use client';

import UnderBar from '@/components/common/Footer';
import Spinner from '@/components/common/Spinner';
import SearchResultHeader from '@/components/search/SearchResultHeader';
import SearchResultProductList from '@/components/search/SearchResultProductList';
import { getProductDetail } from '@/lib/api/products';
import { useSearchStore } from '@/store/searchStore';
import { ProductList } from '@/types/product';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchResultPage() {
  const [products, setProducts] = useState<ProductList[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();

  // 전역 상태에서 가져오기
  const queryText = useSearchStore(s => s.query);
  const recommendationReason = useSearchStore(s => s.recommendationReason);

  // 상품 정보 가져오기
  useEffect(() => {
    const idsString = searchParams.get('ids');
    const idArray = idsString?.split(',').filter(id => id.trim()) || [];

    const loadProducts = async () => {
      try {
        const result = idArray.map(async id => {
          const detailRes = await getProductDetail(id);

          if (!detailRes.ok) {
            throw new Error(`상품 조회 실패: ${detailRes.message}`);
          }
          return detailRes.item;
        });

        const productList = await Promise.all(result);
        setProducts(productList);
      } catch (error) {
        console.error('상품 조회 실패', error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (idArray.length > 0) {
      loadProducts();
    } else {
      setIsLoading(false);
    }
  }, [searchParams]);

  if (isLoading) {
    return <Spinner />;
  }

  if (products.length === 0) {
    return (
      <div className="font-pretendard">
        <SearchResultHeader queryText={queryText} productsCount={0} />
        <div className="flex flex-col justify-center items-center min-h-[60vh] text-center px-4">
          <p className="text-gray-500 text-lg mb-2">검색 결과가 없습니다</p>
          <p className="text-gray-400 text-sm">
            다른 검색어로 다시 시도해보세요
          </p>
        </div>
        <UnderBar />
      </div>
    );
  }

  return (
    <>
      <div className="font-pretendard pb-15">
        <SearchResultHeader
          queryText={queryText}
          productsCount={products.length}
        />

        {/* AI 추천 이유 박스*/}
        {recommendationReason && (
          <div className="font-pretendard mx-4 my-6 py-5 px-6 bg-br-primary-200 rounded-4xl rounded-bl-none ">
            <div className="flex flex-row gap-3 items-center">
              <Image
                src="/icons/aisearch-sparkle.svg"
                alt="AI 검색"
                width={25}
                height={25}
                aria-hidden="false"
              />
              <h3 className="font-medium text-gray-800 text-base">
                왜 이 상품들을 추천했나요?
              </h3>
            </div>
            <div className="mt-2">
              <p className="text-gray-700 text-sm leading-relaxed">
                {recommendationReason}
              </p>
            </div>
          </div>
        )}

        <SearchResultProductList products={products} />

        <UnderBar />
      </div>
    </>
  );
}

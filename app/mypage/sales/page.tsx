'use client';

import UnderBar from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ProductList from '@/components/search/ProductList';
import { getSellerProductList } from '@/lib/api/products';
import { getUserInfo } from '@/lib/api/users';
import { SellerProductList } from '@/types/product';
import { useEffect, useState } from 'react';

//판매내역
export default function SalesPage() {
  const [activeTab, setActiveTab] = useState('selling');
  const [products, setProducts] = useState<SellerProductList[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSellerProducts = async () => {
      setIsLoading(true);

      // 현재 로그인한 유저 정보 가져오기
      const { ok: userOk, item: user } = await getUserInfo();

      if (userOk === 1 && user) {
        // 판매자 상품 목록 가져오기
        const response = await getSellerProductList(user._id);

        // ok === 1일 때만 item이 존재
        if (response.ok === 1) {
          setProducts(response.item);
        }
      }

      setIsLoading(false);
    };

    fetchSellerProducts();
  }, []);
  // 판매 중 / 판매 완료 필터링 --- 작업중 ----
  // extra?.isSoldOut 또는 quantity로 구분하기????  타입수정필요할듯?
  // const sellingProducts = products.filter(
  //   p => !p._id.isSoldOut && p.quantity > 1
  // );
  // const soldProducts = products.filter(
  //   p => p.extra?.isSoldOut || p.quantity === 1
  // );

  return (
    <>
      <Header title="판매 내역" />

      {/* 판매 중 탭 / 판매 완료 탭 */}
      <div className="font-pretendard flex border-b border-[#F4F5FA]">
        {/* 판매 중 */}
        <button
          onClick={() => setActiveTab('selling')}
          className={`flex-1 py-3 text-center text-base ${
            activeTab === 'selling'
              ? 'border-b-2 border-br-primary-500 text-br-neutral-900'
              : 'text-br-input-disabled-text'
          }`}
        >
          판매 중
        </button>

        {/* 판매 완료 */}
        <button
          onClick={() => setActiveTab('sold')}
          className={`flex-1 py-3 text-center text-base ${
            activeTab === 'sold'
              ? 'border-b-2 border-br-primary-500 text-br-neutral-900'
              : 'text-br-input-disabled-text'
          }`}
        >
          판매 완료
        </button>
      </div>
      <div>
        {/* 상품 목록 */}
        <main className="flex-1 px-4">
          {/* 판매 중 탭 */}
          {activeTab === 'selling' && (
            <>
              <ProductList />
            </>
          )}

          {/* 판매 완료 탭 */}
          {activeTab === 'sold' && (
            <>
              <ProductList />
            </>
          )}
        </main>
        <UnderBar />
      </div>
    </>
  );
}

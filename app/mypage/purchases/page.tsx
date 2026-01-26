'use client';

import UnderBar from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ProductList from '@/components/searchresult/ProductList';

//구매내역
export default function purchasesPage() {
  return (
    <>
      <div className="font-pretendard mx-4 mb-4">
        <Header title="판매 내역" />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <UnderBar />
      </div>
    </>
  );
}

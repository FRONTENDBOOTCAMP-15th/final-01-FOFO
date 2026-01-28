'use client';

import { useState } from 'react';
import Header from '@/components/common/Header';
import ProductDetailFooter from '@/app/products/[id]/components/ProductDetailFooter';
import ProductDetailImage from '@/app/products/[id]/components/ProductImage';
import SellerProfileBar from '@/app/products/[id]/components/SellerProfileBar';
import InfoTabs from '@/app/products/[id]/components/InfoTabs';
import ProductInfoTab from '@/app/products/[id]/components/ProductInfoTab';
import SellerInfoTab from '@/app/products/[id]/components/SellerInfoTab';

export default function ProductDetailPage() {
  const [activeTab, setActiveTab] = useState('product');

  return (
    <>
      <div className="font-pretendard pb-20">
        <Header title="상품 상세" />
        <ProductDetailImage />

        <div className="px-4 py-4">
          <SellerProfileBar />
          <InfoTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === 'product' && <ProductInfoTab />}
          {activeTab === 'seller' && <SellerInfoTab />}

          <ProductDetailFooter />
        </div>
      </div>
    </>
  );
}

import SearchResultProduct from '@/components/search/SearchResultProduct';
import { ProductSearchList } from '@/types/product';
import { useRouter } from 'next/navigation';

export default function SearchResultProductList({
  products,
}: {
  products: ProductSearchList[];
}) {
  const router = useRouter();

  const handleGoGenerateSearch = () => {
    router.push('/products');
  };

  return (
    <main className="px-4 mt-7.25">
      <p className="text-[18px]">AI 추천 상품</p>
      {products.map(product => {
        return <SearchResultProduct key={product._id} product={product} />;
      })}
      {/* 안내 문구 + 버튼 */}
      <div className="mt-10 mb-13 flex flex-col items-center">
        <p className="text-br-button-disabled-text text-[14px] text-center mb-3">
          찾으시는 상품이 없으신가요?
          <br />
          &quot;일반 검색&quot;으로 더 많은 상품을 확인해보세요
        </p>
        <button
          type="button"
          onClick={handleGoGenerateSearch}
          className="w-full h-12 rounded-xl bg-br-primary-500 text-br-button-active-text"
        >
          홈으로 가기
        </button>
      </div>
    </main>
  );
}

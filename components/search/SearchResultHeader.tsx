import Header from '@/components/common/Header';
import Image from 'next/image';

export default function SearchResultHeader({
  queryText,
  productsCount,
}: {
  queryText: string;
  productsCount: number;
}) {
  return (
    <>
      <Header title="AI 검색 결과" />
      <section>
        <div className="flex flex-row items-center gap-1.5 mt-8 ml-4.75">
          <Image
            src="/icons/aisearch-sparkle.svg"
            alt=""
            width={25}
            height={25}
          />
          <p className="text-br-button-disabled-text leading-6 text-[13px]">
            <span className="text-br-primary-500">&quot;{queryText}&quot;</span>{' '}
            분석 결과 <br /> 총 {productsCount}개의 맞춤 상품을 찾았습니다.
          </p>
        </div>
      </section>
    </>
  );
}

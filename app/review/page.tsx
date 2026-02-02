import Header from '@/components/common/Header';
import Image from 'next/image';

export default function ReviewPage() {
  return (
    <>
      <Header title="발자국 등록" />

      <div className="px-4 pt-8.25 pb-22.5 font-pretendard">
        {/* 프로필 */}
        <section className="flex items-center gap-3 py-6 lg:flex-col lg:items-center">
          <Image
            src="/icons/chat-profile.svg"
            alt="프로필"
            width={70}
            height={70}
            className="w-14 h-14 rounded-full"
          />
          <div className="lg:flex lg:flex-col lg:items-center">
            <p className="text-br-input-active-text font-medium">
              프루프루뭉루님과
            </p>
            <p className="font-medium text-br-input-active-text">
              거래하셨나요?
            </p>
          </div>
        </section>

        {/*젤리 지수*/}
        <section className="py-7.5 ">
          <p className="text-sm font-medium mb-4">젤리 지수를 선택하세요</p>

          <div className="flex flex-col gap-3 lg:flex-row lg:justify-between">
            <label className="flex items-center gap-3 cursor-pointer ">
              <input
                type="radio"
                name="rating"
                value={5}
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-[5px] border-gray-300 bg-white peer-checked:border-br-primary-500"></span>
              <Image
                src="/icons/paw-5.svg"
                alt="발바닥 5개"
                width={120}
                height={24}
              />
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={4}
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-[5px] border-gray-300 bg-white peer-checked:border-br-primary-500"></span>
              <Image
                src="/icons/paw-4.svg"
                alt="발바닥 4개"
                width={120}
                height={24}
              />
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={3}
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-[5px] border-gray-300 bg-white peer-checked:border-br-primary-500"></span>
              <Image
                src="/icons/paw-3.svg"
                alt="발바닥 3개"
                width={120}
                height={24}
              />
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={2}
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-[5px] border-gray-300 bg-white peer-checked:border-br-primary-500"></span>
              <Image
                src="/icons/paw-2.svg"
                alt="발바닥 2개"
                width={120}
                height={24}
              />
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={1}
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border-[5px] border-gray-300 bg-white peer-checked:border-br-primary-500"></span>
              <Image
                src="/icons/paw-1.svg"
                alt="발바닥 1개"
                width={120}
                height={24}
              />
            </label>
          </div>
        </section>

        {/*후기*/}
        <section className="lg:mt-5 w-full">
          <p className="text-sm font-medium mb-3">
            포포에게 경험한 따뜻한 후기를 알려주세요.
          </p>
          <textarea
            placeholder="거래 중 경험한 따뜻한 순간들을 남겨보세요."
            className="w-full h-45 p-4 border border-br-input-disabled-line rounded-lg resize-none text-br-input-disabled-text focus:outline-none focus:border-br-primary-500"
          />
        </section>
      </div>

      {/* 발자국 등록*/}
      <div className="bottom-0 left-0 right-0 px-4 pb-5 bg-white">
        <button className="w-full py-4 bg-br-primary-500 text-white rounded-lg font-medium">
          발자국 등록
        </button>
      </div>
    </>
  );
}

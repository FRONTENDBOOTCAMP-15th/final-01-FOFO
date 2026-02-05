import { addBookmark, deleteBookmark } from '@/lib/api/bookmarks';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// 상품 상세 페이지 푸터
export default function ProductDetailFooter({
  productId,
  initialIsWished = false,
  initialBookmarkId = null,
}: {
  productId: number;
  initialIsWished?: boolean;
  initialBookmarkId?: number | null;
}) {
  const [isWished, setIsWished] = useState(initialIsWished);
  const [bookmarkId, setBookmarkId] = useState<number | null>(
    initialBookmarkId
  );
  useEffect(() => {
    setIsWished(initialIsWished);
    setBookmarkId(initialBookmarkId);
  }, [initialIsWished, initialBookmarkId]);

  const wishClick = async () => {
    try {
      if (isWished && bookmarkId) {
        const result = await deleteBookmark(bookmarkId);
        if (result.ok === 1) {
          setIsWished(false);
          setBookmarkId(null);
        }
      } else {
        const result = await addBookmark(productId);
        if (result.ok === 1) {
          setIsWished(true);
          setBookmarkId(result.item._id);
        }
      }
    } catch (error) {
      console.error('찜하기 처리 중 오류:', error);
    }
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 flex gap-2 px-2 py-3 mr-4 bg-white border-t border-br-input-disabled-line">
        {/* 찜하기 */}
        <button
          className="flex flex-col items-center justify-center w-16 py-2"
          onClick={wishClick}
        >
          <Image
            src={isWished ? '/icons/heart-fill.svg' : '/icons/heart-line.svg'}
            alt="찜하기"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-[9px] text-br-text-body mt-0.5 ">찜하기</span>
        </button>
        {/* 채팅하기 */}
        <Link
          href={`/chat/id`}
          className="flex-1 py-4 font-light bg-br-button-active-bg text-br-button-active-text rounded-xl text-center"
        >
          채팅 하기
        </Link>
      </div>
    </>
  );
}

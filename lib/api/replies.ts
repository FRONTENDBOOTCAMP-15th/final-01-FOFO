import { ApiListResponse } from '@/types/common';
import { UserReview } from '@/types/product';
import { ApiResponse } from '@/types/common';
import { RegistReview } from '@/types/product';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

// 판매자 후기 API 응답용
interface ProductDetailReplies {
  _id: number;
  replies: UserReview[];
}

// 판매자 후기 목록 조회
export async function getUserReviews(
  seller_id: number
): Promise<ApiListResponse<UserReview>> {
  try {
    const res = await fetch(`${API_URL}/replies/seller/${seller_id}`, {
      headers: {
        'Client-Id': CLIENT_ID,
      },
    });

    const data = await res.json();

    if (data.ok === 1 && Array.isArray(data.item)) {
      const allReviews = data.item.flatMap(
        (product: ProductDetailReplies) => product.replies || []
      );
      return {
        ok: 1,
        item: allReviews,
      };
    }

    return data;
  } catch (error) {
    console.error(error);
    return {
      ok: 0,
      message:
        '요청하신 작업 처리에 실패했습니다. 잠시 후 다시 이용해 주시기 바랍니다.',
    };
  }
}

// 리뷰 등록 요청
interface PostReviewRequest {
  order_id: number;
  product_id: number;
  rating: number;
  content: string;
}

// 리뷰 등록
export async function postReview(
  reviewData: PostReviewRequest
): Promise<ApiResponse<RegistReview>> {
  try {
    const res = await fetch(`${API_URL}/replies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        //로그인 기능 추가되면 토큰 저장 코드 추가 예정
      },
      body: JSON.stringify(reviewData),
    });

    return await res.json();
  } catch (error) {
    console.error(error);
    return {
      ok: 0,
      message: '후기 등록에 실패했습니다. 잠시 후 다시 시도해주세요.',
    };
  }
}

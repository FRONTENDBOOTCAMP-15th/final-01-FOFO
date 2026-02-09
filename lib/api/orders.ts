import useUserStore from '@/store/authStore';
import { ApiListResponse } from '@/types/common';
import { PurchaseList } from '@/types/product';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

// 구매 내역 조회
export async function mypageOrderProductList(): Promise<
  ApiListResponse<PurchaseList>
> {
  try {
    const { accessToken, user } = useUserStore.getState();

    const res = await fetch(`${API_URL}/orders`, {
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.json();
  } catch (error) {
    console.error(error);
    return {
      ok: 0,
      message: '구매 내역을 불러오는데 실패했습니다.',
    };
  }
}

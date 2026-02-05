import { ApiResponse } from '@/types/common';
import { Product, SellerProduct } from '@/types/product';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export async function registProduct(
  formData: SellerProduct,
  accessToken: string
): Promise<ApiResponse<Product>> {
  try {
    const res = await fetch(`${API_URL}/seller/products/`, {
      method: 'POST',
      headers: {
        'Client-Id': CLIENT_ID,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(formData),
    });

    return await res.json();
  } catch (error) {
    console.error(error);
    return {
      ok: 0,
      message: '상품 등록에 실패했습니다. 다시 시도해 주세요.',
    };
  }
}

'use server';

/* import { ApiResponse } from '@/types/common';
import { LoginResponse } from '@/types/user';
 */
// 시연을 위해 실제 API 호출 부분은 주석 처리 -- 추후 해제
import { ApiResponse } from '@/types/common';
import { LoginRequest, LoginResponse } from '@/types/user';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

type LoginActionState = ApiResponse<LoginResponse> | null;

// 실제 API 호출하는 원래 함수 -- 추후 해제
export async function login(
  state: LoginActionState,
  formData: FormData
): Promise<LoginActionState> {
  // FormData에서 값 추출
  const email = formData.get('email');
  const password = formData.get('password');

  // 타입가드, 값 검증(문자열 확인)
  if (typeof email !== 'string' || typeof password !== 'string') {
    return {
      ok: 0,
      message: '이메일 또는 비밀번호가 올바르지 않습니다.',
    };
  }

  // LoginRequest 타입에 맞는 객체 생성
  const body: LoginRequest = {
    email,
    password,
  };

  try {
    // 로그인 API 호출
    const res = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      body: JSON.stringify(body),
    });

    const data: ApiResponse<LoginResponse> = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      ok: 0,
      message: '일시적인 네트워크 문제가 발생했습니다.',
    };
  }
}

// 가짜 데이터 반환하는 더미 함수
/* export async function login(
  _state: LoginActionState,
  formData: FormData
): Promise<LoginActionState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const dummyItem = {
    email: email || 'fofo@gmail.com',
    password: password || '11111111',
  };

  const dummyData: ApiResponse<LoginResponse> = {
    ok: 1,
    item: dummyItem as unknown as LoginResponse,
  };

  return dummyData;
}
 */

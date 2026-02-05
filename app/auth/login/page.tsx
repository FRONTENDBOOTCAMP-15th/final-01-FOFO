//로그인 페이지 -------------------------현재 작업 중인 page.tsx 파일입니다.

'use client';

/* 컴포넌트 및 훅 관리 */
import Header from '@/components/common/Header';
import Image from 'next/image';
import DeleteIcon from '@/public/icons/delete-text.svg';
/* TODO 아이콘 이름 변경 visile > visible */
import hiddenIcon from '@/public/icons/hidden.svg';
import visibleIcon from '@/public/icons/visile.svg';
/* TODO 아이콘 이름 변경 Frame > check */
import CheckIcon from '@/public/icons/Frame.svg';
import { useActionState, useEffect, useState } from 'react';
import { login } from '@/lib/api/login';
import useUserStore from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { Users } from '@/types/user';

export default function LoginPage() {
  /* ========== 상태 ========== */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [state, formAction, isPending] = useActionState(login, null);
  const { setUser, setToken } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (!state) return;

    if (state.ok === 1) {
      setToken(state.item.token.accessToken);
      setUser(state.item as Users);
      router.push('/products');
    }

    if (state.ok === 0) {
      alert(state.message);
    }
  }, [state, setToken, router]);

  /* ========== 핸들러 ========== */
  const handleClearEmail = () => {
    setEmail('');
  };
  const handleClearPassword = () => {
    setPassword('');
  };
  const togglePassword = () => setShowPassword(!showPassword);
  const isValid = email.includes('@') && password.length >= 1;

  /* ========== 랜더 ========== */
  return (
    <>
      <Header title="로그인" />
      <div className="min-h-screen flex justify-center ">
        <div className="relative w-full px-11.5 bg-white">
          {/* 로고 섹션 */}
          <div className="mt-42.5">
            <h1>
              <Image
                src="/icons/logo-blue.svg"
                alt="FOFO 로고"
                width={94}
                height={24}
              />
            </h1>
            <p className="mt-5 text-2xl leading-none font-medium">
              간편하게 로그인하고
            </p>
            <p className="mt-3.25 text-2xl leading-none font-medium">
              시작하세요!
            </p>
          </div>

          {/* 로그인 폼 섹션 */}
          <form action={formAction} className="flex flex-col gap-2 mt-25">
            {/* 로그인 - 이메일 입력(인풋) */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="이메일을 입력하세요"
                className="w-full h-12 px-4 border border-[#E5E5EA] rounded-lg text-[15px] text-[#0F1218] placeholder-[#8A8F99] focus:outline-none focus:border-[#60CFFF]"
              />
              {email.length > 0 && (
                <div
                  onClick={handleClearEmail}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer "
                >
                  <Image src={DeleteIcon} alt="삭제 아이콘" />
                </div>
              )}
            </div>

            {/* 로그인 - 비밀번호 입력(인풋) */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                className="w-full h-12 px-4 border border-[#E5E5EA] rounded-lg text-[15px] text-[#0F1218] placeholder-[#8A8F99] focus:outline-none focus:border-[#60CFFF]"
              />
              {/* TODO 입력했을 경우, 눈 깜빡일 떄 보더 포커스 컬러로 유지 */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center gap-2 cursor-pointer">
                {password.length > 0 && (
                  <div onClick={handleClearPassword}>
                    <Image src={DeleteIcon} alt="삭제 아이콘" />
                  </div>
                )}
                <div onClick={togglePassword}>
                  <Image
                    src={showPassword ? visibleIcon : hiddenIcon}
                    alt={
                      showPassword
                        ? '비밀번호 보기 아이콘'
                        : '비밀번호 숨기기 아이콘'
                    }
                  />
                </div>
              </div>
            </div>

            {/* 로그인 - 자동 로그인(체크박스) */}
            <div className="flex items-center justify-end gap-1 mt-3">
              <div className="relative w-4 h-4">
                <input
                  type="checkbox"
                  id="autoLogin"
                  className="peer absolute w-full h-full opacity-0 z-10 cursor-pointer"
                />
                <div className="w-full h-full bg-[#E5E5EA]"></div>
                <div className="absolute hidden peer-checked:flex items-center justify-center inset-0">
                  <Image src={CheckIcon} alt="체크 아이콘" />
                </div>
              </div>
              <label
                htmlFor="autoLogin"
                className="text-[13px] text-[#B6BCC8] cursor-pointer"
              >
                자동 로그인
              </label>
            </div>

            {/* 로그인 - 로그인(버튼) */}
            {/* TODO: 로그인 href 제대로 넘어가는지 확인 */}
            <button
              type="submit"
              disabled={!isValid || isPending} // 버튼 비활성화 조건
              className={`mt-7.5 w-full h-14 rounded-lg transition-colors 
                  ${isValid // 로그인 중(isPending)이라도 입력만 올바르다면 파란색 유지!
                  ? 'text-white bg-[#60CFFF] cursor-pointer'
                  : 'text-[#8A8F99] bg-[#E5E5EA] cursor-not-allowed'
                } 
                  ${isPending ? 'opacity-70' : ''}`}
            >
              {/* TODO 로그인 <- 나중에 삭제*/}
              {/*  {isPending ? 'FOFO 홈으로 이동 중' : '로그인'} */}
              로그인
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

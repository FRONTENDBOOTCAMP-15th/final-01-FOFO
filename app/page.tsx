import UnderBar from '@/components/common/Footer';
import AuthPage from './auth/page'; /* 확인용 - 삭제 */
/* 
임시 확인용 URL - 추후 삭제 예정
http://localhost:3000/login
*/

export default function Home() {
  return (
    <>
      <AuthPage /> {/* 확인용 - 삭제 */}
      <h1 className="text-red-500 text-4xl">final-project-sample v05</h1>
      <h1 className="text-br-error">final-project-sample v05</h1>
      <h2>client-id: {process.env.NEXT_PUBLIC_CLIENT_ID}</h2>
      <div className="bg-br-primary-500 text-br-button-disabled-text font-pretendard">
        커스텀 스타일
      </div>
      <UnderBar />
    </>
  );
}

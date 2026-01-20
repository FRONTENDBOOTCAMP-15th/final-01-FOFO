export default function Home() {
  return (
    <>
      <h1>final-project-sample v05</h1>;
      <h2>client-id: {process.env.NEXT_PUBLIC_CLIENT_ID}</h2>
      <div className="bg-primary text-secondary font-pretendard">
        커스텀 스타일
      </div>
    </>
  );
}

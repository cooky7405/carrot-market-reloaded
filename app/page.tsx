import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="my-auto flex flex-col items-center gap-4 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">당근</h1>
        <h2 className="text-2xl">당근 마켓에 어서 오세요.</h2>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Link href="/create-account/" className="primary-btn py-1.5 h-10">
          시작하기
        </Link>
        <div className="flex items-center gap-2">
          <span>이미 계정이 있나요?</span>
          <Link
            href="login"
            className="w-full bg-blue-400 hover:underline underline-offset-2"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

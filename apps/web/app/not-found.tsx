import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page page--center">
      <section className="panel panel--home">
        <h1 className="panel__title">404</h1>
        <p className="panel__desc">페이지를 찾을 수 없습니다.</p>
        <Link href="/" className="panel__button">
          홈으로 이동
        </Link>
      </section>
    </main>
  );
}

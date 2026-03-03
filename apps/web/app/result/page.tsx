"use client";

import { Button } from "@repo/ui";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ResultInfoCard } from "@/src/components/ResultInfoCard";
import { usePhotoStore } from "@/src/store/photo-store";

export default function ResultPage() {
  const router = useRouter();
  const hasHistory = usePhotoStore((state) => state.hasHistory);
  const photo = usePhotoStore((state) => state.lastPhoto);

  useEffect(() => {
    if (!hasHistory) {
      const timer = setTimeout(() => {
        router.replace("/");
      }, 1000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [hasHistory, router]);

  if (!hasHistory || !photo) {
    return (
      <main className="page page--center">
        <section className="panel panel--result">
          <div className="skeleton skeleton--title" />
          <div className="skeleton skeleton--line" />
          <div className="skeleton skeleton--line" />
          <p>조회 이력이 없어 1초 후 홈으로 이동합니다.</p>
        </section>
      </main>
    );
  }

  return (
    <main
      className="result-page"
      style={{ backgroundImage: 'url(/background.png)' }}
    >
      <div className="result-layout">
        <section className="result-media">
          <img src={photo.download_url} alt={photo.author} className="result-media__img" />
        </section>

        <section className="result-side">
          <ResultInfoCard photo={photo} />
          <Button size="m" onClick={() => router.push("/")}>
            이전
          </Button>
        </section>
      </div>
    </main>
  );
}

"use client";

import { useMutation } from "@tanstack/react-query";
import { Button } from "@repo/ui";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { fetchPhotoInfo } from "@/src/lib/api";
import { useDebouncedFn } from "@/src/hooks/useDebouncedFn";
import { usePhotoStore } from "@/src/store/photo-store";
import { name } from "@/src/lib/data";

export default function HomePage() {
  const router = useRouter();
  const hasHistory = usePhotoStore((state) => state.hasHistory);
  const setPhoto = usePhotoStore((state) => state.setPhoto);

  useEffect(() => {
    if (hasHistory) {
      router.replace("/result");
    }
  }, [hasHistory, router]);

  const lookupMutation = useMutation({
    mutationFn: fetchPhotoInfo,
    onSuccess: (photo) => {
      setPhoto(photo);
      router.push("/result");
    }
  });

  const onLookup = useDebouncedFn(() => {
    lookupMutation.mutate();
  }, 500);

  return (
    <main className="home-page">
      <div />
      <section className="home-intro">
        <h1 className="home-intro__line">안녕하세요</h1>
        <h1 className="home-intro__line">{name}입니다.</h1>
      </section>
      <section className="home-actions">
        {lookupMutation.isError ? <p className="error">조회 중 오류가 발생했습니다.</p> : null}
        <Button loading={lookupMutation.isPending} onClick={onLookup} size="l">
          다음
        </Button>
      </section>
    </main>
  );
}

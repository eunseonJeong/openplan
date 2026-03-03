export type PhotoInfo = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export async function fetchPhotoInfo(): Promise<PhotoInfo> {
  const response = await fetch("https://picsum.photos/id/0/info", {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch photo info");
  }

  return response.json();
}

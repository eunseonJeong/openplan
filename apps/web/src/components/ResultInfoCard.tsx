import type { PhotoInfo } from "@/src/lib/api";

type ResultInfoCardProps = {
  photo: PhotoInfo;
};

export function ResultInfoCard({ photo }: ResultInfoCardProps) {
  return (
    <section className="result-info" aria-label="photo info">
      <div className="result-info__row result-info__row--two">
        <div>
          <p className="result-info__label">id</p>
          <p className="result-info__value">{photo.id}</p>
        </div>
        <div>
          <p className="result-info__label">author</p>
          <p className="result-info__value">{photo.author}</p>
        </div>
      </div>

      <div className="result-info__row result-info__row--two">
        <div>
          <p className="result-info__label">width</p>
          <p className="result-info__value">{photo.width.toLocaleString()}</p>
        </div>
        <div>
          <p className="result-info__label">height</p>
          <p className="result-info__value">{photo.height.toLocaleString()}</p>
        </div>
      </div>

      <div className="result-info__row result-info__row--stack">
        <div>
          <p className="result-info__label">url</p>
          <a className="result-info__link" href={photo.url} target="_blank" rel="noreferrer">
            {photo.url}
          </a>
        </div>
        <div>
          <p className="result-info__label">download_url</p>
          <a className="result-info__link" href={photo.download_url} target="_blank" rel="noreferrer">
            {photo.download_url}
          </a>
        </div>
      </div>
    </section>
  );
}

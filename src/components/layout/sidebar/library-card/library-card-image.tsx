import { CSSProperties, useMemo } from 'react';

export default function LibraryCardImage({ image }: { image?: string | undefined }) {
  const style = useMemo<CSSProperties>(() => {
    return { backgroundImage: `url(${image})` };
  }, [image]);

  return image === undefined ? (
    <div className="size-12 shrink-0 rounded bg-s-gray" />
  ) : (
    <div className="size-12 shrink-0 rounded bg-s-gray" style={style} />
  );
}

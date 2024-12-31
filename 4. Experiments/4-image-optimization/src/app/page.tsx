import Image from "next/image";

import styles from "./page.module.css";
import "./global.css";

export type Post = {
  username: string;
  title: string;
  likes: number;
};

export default function Page() {
  return (
    <>
      <div className={styles["viewport-section"]}>
        <p>Load corresponding sizes base on viewport</p>
        <div
          style={{
            position: "relative",
            width: "100vw",
            height: "calc((3510 / 6240) * 100vw)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            fill
            sizes="(max-width: 640px) 640px, (max-width: 1080px) 1080px, 1200px"
            alt="Landscape"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className={styles["viewport-section"]}>
        <p>Resize original image to smaller size (width: 500px)</p>
        <Image
          src="https://images.unsplash.com/photo-1699485495897-8e156e49475e"
          width={500}
          height={(3510 / 6240) * 500}
          alt="Landscape"
        />
      </div>
      <div className={styles["viewport-section"]}>
        <p>Loading image with lazy</p>
        <Image
          src="https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd"
          width={500}
          height={(3510 / 6240) * 500}
          loading="lazy"
          alt="Landscape"
        />
      </div>
    </>
  );
}

import Image from "next/image";

export type Post = {
  username: string;
  title: string;
  likes: number;
};

export default function Page() {
  return (
    <div>
      <Image
        src="https://images.unsplash.com/photo-1731432247825-a6630d4ea538?q=80&w=1974"
        width={500}
        height={(2961 / 1974) * 500}
        alt="Landscape"
      />
    </div>
  );
}

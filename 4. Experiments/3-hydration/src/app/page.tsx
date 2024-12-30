"use client";
import { useState } from "react";

export type Post = {
  username: string;
  title: string;
  likes: number;
};

export default function Page() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Count</button>
    </div>
  );
}

// const compStr = renderToString(<Page />);
// console.log("Pre-render page", compStr);

/**
 * Pre-render <Page />, there is no onClick action, only HTML
 * <div><p>Count: <!-- -->0</p><button>Count</button></div>
 */

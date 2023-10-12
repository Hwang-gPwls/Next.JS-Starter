"use client";

import { useRouter } from "next/navigation";

export default function DetailLink() {
  //router.back() | router.forward() | router.refresh()
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/list");
      }}
    >
      버튼임
    </button>
  );
}

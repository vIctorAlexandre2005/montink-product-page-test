import { useState } from "react";

export function useSelectThumb() {
  const [thumb, setThumb] = useState<string>("");
  function selectThumb(thumb: string) {
    setThumb(thumb);
  }
  return { thumb, selectThumb };
}

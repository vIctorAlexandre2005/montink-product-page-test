import { useContextVariantProduct } from "@/contexts/VariantsContext";
import { getWithTTL, setWithTTL } from "@/utils/storage";
import { useEffect } from "react";

export function useSelectThumb() {
  const { thumb, setThumb, variants } = useContextVariantProduct();

  useEffect(() => {
    const storedThumb = getWithTTL("thumb");
    if (storedThumb && storedThumb.includes(variants?.color)) {
      setThumb(storedThumb);
    }
  }, [variants]);

  function selectThumb(thumb: string) {
    setThumb(thumb);
    setWithTTL("thumb", thumb, 15);
  }

  return { thumb, selectThumb };
}

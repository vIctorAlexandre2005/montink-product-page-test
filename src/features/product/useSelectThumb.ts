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

  function getThumbnailImages(variantColor: string) {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      src: `/product/${variantColor}/product_${variantColor}_${i + 1}.jpg`,
      alt: "Produto",
    }));
  }

  function selectThumb(thumb: string) {
    setThumb(thumb);
    setWithTTL("thumb", thumb, 15);
  }

  function handleSelect(src: string) {
    selectThumb(src);
  }

  return { thumb, selectThumb, getThumbnailImages, handleSelect };
}

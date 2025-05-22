import { useContextVariantProduct } from "@/contexts/VariantsContext";
import { getWithTTL, setWithTTL } from "@/utils/storage";
import { useEffect } from "react";

export function useSelectThumb() {
  const { thumb, setThumb, variants } = useContextVariantProduct();

  useEffect(() => {
    const storedThumb = getWithTTL("thumb");

    // Garante que só aplica se a cor atual estiver carregada
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

import { useContextVariantProduct } from "@/contexts/VariantsContext";
import { VariantProps } from "@/interface/variant";
import { getWithTTL, setWithTTL } from "@/utils/storage";
import { useEffect } from "react";

export function useVariants() {
  const { variants, setVariants, setThumb } = useContextVariantProduct();
  function selectVariant(key: string, value: string) {
    const updatedVariants = { ...variants, [key]: value } as VariantProps;
    setVariants(updatedVariants);
    setWithTTL("variants", updatedVariants, 15); // salva a variant com TTL
    if (key === "color") {
      setThumb(""); // reseta o thumb ao trocar de cor
    }
  }

  useEffect(() => {
    const storedVariants = getWithTTL("variants");
    if (storedVariants) {
      setVariants(storedVariants);
    }
  }, []);

  return { variants, setVariants, selectVariant };
}

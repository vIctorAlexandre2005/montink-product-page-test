import { useContextVariantProduct } from "@/contexts/VariantsContext";
import { VariantProps } from "@/types/variant";
import { getWithTTL, setWithTTL } from "@/utils/storage";
import { useEffect } from "react";

export function useVariants() {
  const { variants, setVariants, setThumb } = useContextVariantProduct();
  function selectVariant<K extends keyof VariantProps>(key: K, value: VariantProps[K]) {
    const updated = { ...variants, [key]: value };
    setVariants(updated as VariantProps);
    setWithTTL("variants", updated, 15);

    if (key === "color") setThumb("");
  }

  useEffect(() => {
    const storedVariants = getWithTTL("variants");
    if (storedVariants) setVariants(storedVariants);
  }, []);

  return { variants, setVariants, selectVariant };
}

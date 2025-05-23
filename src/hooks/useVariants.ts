import { useContextVariantProduct } from "@/contexts/VariantsContext";
import { VariantProps } from "@/interface/variant";
import { getWithTTL, setWithTTL } from "@/utils/storage";
import { useEffect } from "react";

export function useVariants() {
  const { variants, setVariants, setThumb } = useContextVariantProduct();
  function selectVariant(key: keyof VariantProps, value: string): void {
    const updatedVariants = { ...variants, [key]: value } as VariantProps;

    try {
      setVariants(updatedVariants);
      setWithTTL("variants", updatedVariants, 15);

      if (key === "color") {
        setThumb("");
      }
    } catch (error) {
      console.error("Failed to select variant:", error);
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

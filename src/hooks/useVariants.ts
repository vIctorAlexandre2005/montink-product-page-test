import { useContextVariantProduct } from "@/contexts/VariantsContext";
import { VariantProps } from "@/interface/variant";

export function useVariants() {
  const { variants, setVariants, setThumb } = useContextVariantProduct();
  function selectVariant(key: string, value: string) {
    setVariants({ ...variants, [key]: value } as VariantProps);
    setThumb("");
  }
  return { variants, setVariants, selectVariant };
}

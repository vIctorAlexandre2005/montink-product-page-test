import { useContextVariantProduct } from "@/contexts/VariantsContext";

export function useSelectThumb() {
  const { thumb, setThumb } = useContextVariantProduct();
  
  function selectThumb(thumb: string) {
    setThumb(thumb);
  };
  
  return { thumb, selectThumb };
}

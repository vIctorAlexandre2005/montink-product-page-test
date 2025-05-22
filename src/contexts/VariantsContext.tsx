import {
  defaultValueVariantProductProps,
  VariantProductProps,
  VariantProps,
} from "@/interface/variant";
import { createContext, useContext, ReactNode, useState } from "react";

const VariantProductProvider = createContext<VariantProductProps>(
  defaultValueVariantProductProps
);

const VariantProductContext = ({ children }: { children: ReactNode }) => {
  const [variants, setVariants] = useState<VariantProps | undefined>(undefined);
  const [thumb, setThumb] = useState<string>("");

  return (
    <VariantProductProvider.Provider
      value={{
        variants,
        setVariants,
        thumb,
        setThumb,
      }}
    >
      {children}
    </VariantProductProvider.Provider>
  );
};

export const useContextVariantProduct = () =>
  useContext(VariantProductProvider);
export default VariantProductContext;

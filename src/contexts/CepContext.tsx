import { CepProductProps, CepProps, defaultValueCepProduct } from "@/interface/cep";
import {VariantProps} from "@/interface/variant";
import { createContext, useContext, ReactNode, useState } from "react";

const CepProvider = createContext<CepProductProps>(
  defaultValueCepProduct
);

const CepContext = ({ children }: { children: ReactNode }) => {
  const [cep, setCep] = useState<string>("");
  const [cepData, setCepData] = useState<CepProps | undefined>(undefined);

  return (
    <CepProvider.Provider
      value={{
        cep,
        setCep,
        cepData,
        setCepData,
      }}
    >
      {children}
    </CepProvider.Provider>
  );
};

export const useContextCep = () =>
  useContext(CepProvider);
export default CepContext;

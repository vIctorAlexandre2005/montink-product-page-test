import {
  CepProductProps,
  CepProps,
  defaultValueCepProduct,
} from "@/interface/cep";
import { VariantProps } from "@/interface/variant";
import { getWithTTL } from "@/utils/storage";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

const CepProvider = createContext<CepProductProps>(defaultValueCepProduct);

const CepContext = ({ children }: { children: ReactNode }) => {
  const [cep, setCep] = useState<string>("");
  const [cepData, setCepData] = useState<CepProps | undefined>(undefined);

  useEffect(() => {
    const storedCepData = getWithTTL("cepData");
    if (storedCepData) {
      setCep(storedCepData.cep);
      setCepData(storedCepData);
    }
  }, []);

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

export const useContextCep = () => useContext(CepProvider);
export default CepContext;

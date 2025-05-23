import { useContextCep } from "@/contexts/CepContext";
import { getCep } from "@/services/cep";
import { setWithTTL } from "@/utils/storage";
import { useEffect } from "react";

export function useDelivery() {
  const { cep, setCep, cepData, setCepData } = useContextCep();

  async function queryCep() {
    if (cep.length < 8) return;
    try {
      const response = await getCep(cep);
      setCepData(response);
      setWithTTL("cepData", response, 15);
    } catch (error) {
      throw new Error("Error fetching CEP data");
    }
  }

  useEffect(() => {
    queryCep();
  }, [cep]);

  return {
    cep,
    setCep,
    cepData,
  };
}

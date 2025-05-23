import { useContextCep } from "@/contexts/CepContext";
import { fetchCepData } from "@/services/fetchCepData";
import { setWithTTL } from "@/utils/storage";
import { useEffect } from "react";

export function useDelivery() {
  const { cep, setCep, cepData, setCepData } = useContextCep();

  async function queryCep() {
    try {
      const response = await fetchCepData(cep);
      setCepData(response);
      setWithTTL("cepData", response, 15);
    } catch (error) {
      console.error("Error fetching CEP data");
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

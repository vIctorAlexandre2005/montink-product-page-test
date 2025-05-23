import { useContextCep } from "@/contexts/CepContext";
import { getCep } from "@/services/cep";
import { useEffect } from "react";

export function useDelivery() {
  const { cep, setCep, cepData, setCepData } = useContextCep();

  async function queryCep() {
    if (cep.length < 8) return;
    try {
      const response = await getCep(cep);
      console.log("response", response);
      setCepData(response);
    } catch (error) {
      throw new Error("Error fetching CEP data");
    }
  };

  return {
    cep,
    setCep,
    cepData,
  };
}

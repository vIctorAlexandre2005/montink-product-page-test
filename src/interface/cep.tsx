import { Dispatch, SetStateAction } from "react";

export interface CepProps {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface CepProductProps {
  cep: string;
  setCep: Dispatch<SetStateAction<string>>;
  cepData: CepProps | undefined;
  setCepData: Dispatch<SetStateAction<CepProps | undefined>>;
}

export const defaultValueCepProduct: CepProductProps = {
  cep: "",
  setCep: () => {},
  cepData: undefined,
  setCepData: () => {},
};

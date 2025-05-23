import { CepProps } from "@/types/cep";
import { IoIosHome } from "react-icons/io";
import { LuMapPinCheck, LuMapPinX } from "react-icons/lu";

interface FeedbackProps {
  cepData: CepProps | undefined;
}

export function Feedback({ cepData }: FeedbackProps) {
  if (cepData?.cep) {
    return (
      <p className="text-sm flex gap-1 items-center font-medium text-green-500">
        <LuMapPinCheck size={24} />
        Frete grátis
      </p>
    );
  }

  if (cepData?.erro) {
    return (
      <p className="text-sm flex gap-1 items-center font-medium text-red-500">
        <LuMapPinX size={24} />
        Não foi possível encontrar a localização
      </p>
    );
  };
}

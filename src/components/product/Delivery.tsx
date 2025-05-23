import { useDelivery } from "@/features/delivery/useDelivery";
import { Input } from "../shared/Input";
import { Feedback } from "./Feedback";
import { IoIosHome } from "react-icons/io";

export function Delivery() {
  const { cep, setCep, cepData } = useDelivery();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex md:flex-row max-md:flex-col md:items-center max-md:md:items-start w-full gap-2">
        <Input
          label="Digite seu CEP para calcular o frete"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          type="text"
          placeholder="Ex: 00000-000"
          maxLength={8}
          data_test_cy="cep-input"
          className="w-full"
        />
        <div className="flex items-center">
          <Feedback cepData={cepData} />
        </div>
      </div>
      {cepData?.cep && (
        <p className="text-sm flex gap-1 items-center font-medium text-slate-700">
          <IoIosHome size={24} /> {cepData?.bairro}, {cepData?.localidade} -{" "}
          {cepData?.uf}
        </p>
      )}
      <div className="border border-slate-200 w-full"></div>
    </div>
  );
}

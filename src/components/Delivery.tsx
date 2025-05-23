import { useDelivery } from "@/hooks/useDelivery";
import { IoIosHome } from "react-icons/io";
import { LuMapPinCheck, LuMapPinX } from "react-icons/lu";

export function Delivery() {
  const { cep, setCep, cepData } = useDelivery();
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-slate-700">
        Digite seu CEP para calcular o frete
      </p>
      <div className="flex items-center gap-1">
        <input
          data-testid="cep-input"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          type="text"
          placeholder="Ex: 00000-000"
          maxLength={8}
          className="w-1/2 p-2 border transition duration-300 border-slate-200 rounded-md focus:outline-none focus:border-slate-500"
        />
        {cepData?.cep && (
          <p className="text-sm flex gap-1 items-center font-medium text-green-500">
            <LuMapPinCheck size={24} />
            Frete grátis
          </p>
        )}
        {cepData?.erro && (
          <p className="text-sm flex gap-1 items-center font-medium text-red-500">
            <LuMapPinX size={24} />
            Não foi possível encontrar a localização
          </p>
        )}
      </div>
      <div className="flex">
        {cepData?.cep && (
          <p className="text-sm flex gap-1 items-center font-medium text-slate-700">
            <IoIosHome size={24} /> {cepData.bairro}, {cepData.localidade} -{" "}
            {cepData.uf}
          </p>
        )}
      </div>
      <div className="border border-slate-200 w-full"></div>
    </div>
  );
}

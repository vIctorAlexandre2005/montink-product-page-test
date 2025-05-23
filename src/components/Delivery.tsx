import { useDelivery } from "@/hooks/useDelivery";

export function Delivery() {
  const { cep, setCep } = useDelivery();
  return (
    <div className="flex flex-col gap-2">
      <input
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        type="text"
        placeholder="Digite seu CEP"
        className="w-full p-2 border border-slate-200 rounded-md focus:outline-none focus:border-slate-500"
      />
      <div className="border border-slate-200 w-full"></div>
    </div>
  );
}

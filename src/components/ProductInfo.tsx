import { formatBRL } from "@/utils/formatBRL";
import { FaStar } from "react-icons/fa";
import { Variants } from "./Variants";

export function ProductInfo() {
  return (
    <div className="gap-2 flex flex-col w-full h-full p-2">
      <h2 className="text-2xl font-bold text-slate-700">
        Fone de Ouvido Sem Fio TWS
      </h2>
      <div className="flex items-center gap-2">
        <FaStar color="orange" size={24} />
        <FaStar color="orange" size={24} />
        <FaStar color="orange" size={24} />
        <FaStar color="orange" size={24} />
        <FaStar color="orange" size={24} />
        <p className="text-gray-700 text-xl">(5/5)</p>
      </div>
      <div className="flex gap-4">
        <p className="text-base font-semibold text-slate-700">
          {formatBRL(199.99)}
        </p>
        <p className="text-xl text-slate-400 font-semibold line-through">
          {formatBRL(299.99)}
        </p>
      </div>
      <p className="w-full text-sm font-medium text-slate-700">
        Fones de ouvido com conexão Bluetooth estável e áudio de alta qualidade,
        ideais para músicas, podcasts e chamadas nítidas. Oferecem até 24 horas
        de autonomia com estojo power bank e carregamento rápido via USB-C.
        Possuem resistência IPX4 contra suor e respingos, além de design
        compacto, perfeito para atividades ao ar livre. Com drivers de 10mm,
        entregam graves profundos e som equilibrado com a assinatura Philips.
      </p>
      <div className="border border-slate-200 w-full"></div>
      <Variants />
      {/* <div className="border border-slate-200 w-full"></div> */}
    </div>
  );
}

import { formatBRL } from "@/utils/formatBRL";
import { FaStar } from "react-icons/fa";

export function ProductInfo() {
  return (
    <div className="gap-2 flex flex-col w-full h-full p-2">
      <h2 className="text-2xl font-bold">Fone de Ouvido Sem Fio TWS</h2>
      <div className="flex items-center gap-2">
        <FaStar color="orange" size={24} />
        <FaStar color="orange" size={24} />
        <FaStar color="orange" size={24} />
        <FaStar color="orange" size={24} />
        <FaStar color="orange" size={24} />
        <p className="text-gray-600 text-xl">(5/5)</p>
      </div>
      <div className="flex gap-4">
        <p className="text-xl font-semibold">{formatBRL(199.99)}</p>
        <p className="text-xl text-gray-400 font-semibold line-through">
          {formatBRL(299.99)}
        </p>
      </div>
      <p className="w-xl text-sm font-medium text-slate-700">
        Fones de ouvido com conexão Bluetooth estável e áudio de alta qualidade,
        ideais para músicas, podcasts e chamadas nítidas. Oferecem até 24 horas
        de autonomia com estojo power bank e carregamento rápido via USB-C.
        Possuem resistência IPX4 contra suor e respingos, além de design
        compacto, perfeito para atividades ao ar livre. Com drivers de 10mm,
        entregam graves profundos e som equilibrado com a assinatura Philips.
      </p>
      <div className="border border-slate-200 w-xl"></div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold text-slate-700">Selecionar cores</p>
        <div className="flex gap-2">
          <button className="w-8 h-8 bg-red-500 rounded-full cursor-pointer"></button>
          <button className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer"></button>
          <button className="w-8 h-8 bg-green-500 rounded-full cursor-pointer"></button>
        </div>
      </div>
      <div className="border border-slate-200 w-xl"></div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold text-slate-700">
          Selecionar tamanho
        </p>
        <div className="flex gap-2">
          <button className="w-auto h-auto p-3 text-lg hover:bg-slate-900 hover:text-white transition duration-300 font-normal bg-slate-200 rounded-full cursor-pointer">
            Pequeno
          </button>
          <button className="w-auto h-auto p-3 text-lg hover:bg-slate-900 hover:text-white transition duration-300 font-normal bg-slate-200 rounded-full cursor-pointer">
            Médio
          </button>
          <button className="w-auto h-auto p-3 text-lg hover:bg-slate-900 hover:text-white transition duration-300 font-normal bg-slate-200 rounded-full cursor-pointer">
            Grande
          </button>
        </div>
      </div>
    </div>
  );
}

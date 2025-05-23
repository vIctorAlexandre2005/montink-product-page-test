import { useVariants } from "@/hooks/useVariants";
import { colorsVariant, sizesVariant } from "@/utils/variants";

export function Variants() {
  const { variants, selectVariant } = useVariants();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold text-slate-700">
          Cor selecionada: {variants?.color ? variants?.color : "Nenhuma"}
        </p>
        <div className="flex gap-2">
          {colorsVariant.map((color) => (
            <button
              onClick={() => selectVariant("color", color.title)}
              className={`w-10 h-10 ${color.value} ${
                color.title === "white" ? "border border-slate-400" : ""
              } hover:scale-125 transition duration-300 
              rounded-full cursor-pointer`}
              key={color.id}
            />
          ))}
        </div>
      </div>
      <div className="border border-slate-200 w-full"></div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold text-slate-700">
          Selecionar tamanho
        </p>
        <div className="flex gap-2">
          {sizesVariant.map((size) => (
            <button
              onClick={() => selectVariant("size", size.title)}
              className={`
                w-12 h-12 text-center p-3 text-sm font-normal rounded-full cursor-pointer
                hover:bg-slate-900 hover:text-white transition duration-300 
                ${
                  variants?.size === size.title
                    ? "bg-slate-950 text-white"
                    : "bg-slate-200"
                }
            `}
              key={size.id}
            >
              {size.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useSelectThumb } from "@/hooks/useSelectThumb";
import { thumbnailImages } from "@/utils/thumbnailProducts";

export function ProductGallery() {
    const { thumb, selectThumb } = useSelectThumb();
  return (
    <div className="flex w-full items-center">
      <div className="flex max-sm:flex-col-reverse min-sm:justify-around lg:justify-center max-sm:gap-4 sm:gap-12 items-center">
        <div className="flex max-sm:flex-row max-sm:w-full max-sm:justify-around sm:flex-col gap-4">
          {thumbnailImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              onClick={() => selectThumb(image.src)}
              onMouseOver={() => selectThumb(image.src)}
              className="
                max-sm:w-12 max-sm:h-12
                sm:w-16 sm:h-16
                lg:w-20 lg:h-20
                object-cover cursor-pointer 
                hover:shadow-2xl hover:shadow-slate-500 transition duration-300 hover:border-slate-700 hover:scale-110 
                border-2 border-slate-400 rounded-xl
              "
              alt={image.alt}
            />
          ))}
        </div>
        <img
          src={thumb ? thumb : thumbnailImages[0].src}
          className="
            object-cover
            max-sm:w-[40%] max-sm:h-[40%]
            max-md:w-[50%] max-md:h-[50%]
            sm:w-[50%] sm:h-[50%]
            md:w-[50%] md:h-[50%]
            lg:w-[35%] lg:h-[35%] 
            "
          alt="img_product"
        />
      </div>
    </div>
  );
}

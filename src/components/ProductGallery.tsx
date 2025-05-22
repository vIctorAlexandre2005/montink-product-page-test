export function ProductGallery() {
  const thumbnailImages = [
    {
      id: 1,
      src: "./product/product1.jpg",
      alt: "img_product",
    },
    {
      id: 2,
      src: "./product/product2.jpg",
      alt: "img_product",
    },
    {
      id: 3,
      src: "./product/product3.jpg",
      alt: "img_product",
    },
    {
      id: 4,
      src: "./product/product4.jpg",
      alt: "img_product",
    },
    {
      id: 5,
      src: "./product/product5.jpg",
      alt: "img_product",
    },
  ];
  return (
    <div className="flex w-full items-center">
      <div className="flex max-sm:flex-col-reverse min-sm:justify-around lg:justify-center max-sm:gap-4 sm:gap-12 items-center">
        <div className="flex max-sm:flex-row max-sm:w-full max-sm:justify-around sm:flex-col gap-4">
          {thumbnailImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
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
          src={"./product/product2.jpg"}
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

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
    <div className="flex items-center">
      <div className="flex justify-center gap-12 items-center">
        <div className="flex flex-col gap-4">
          {thumbnailImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              className="object-cover cursor-pointer hover:shadow-2xl hover:shadow-slate-500 transition duration-300 hover:border-slate-700 hover:scale-110 w-20 h-20 border-2 border-slate-400 rounded-xl"
              alt={image.alt}
            />
          ))}
        </div>
        <img
          src={"./product/product2.jpg"}
          className="object-cover"
          height={"35%"}
          width={"35%"}
          alt="img_product"
        />
      </div>
    </div>
  );
}

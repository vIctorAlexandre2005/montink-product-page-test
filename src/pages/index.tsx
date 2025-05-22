import { ProductGallery } from "@/components/ProductGallery";
import { ProductInfo } from "@/components/ProductInfo";

export default function Home() {
  return (
    <div className="w-full h-full p-2">
      <div className="flex max-md:flex-col lg:flex-row w-auto max-sm:gap-12 sm:gap-2 items-center">
        <div className="w-full flex items-center">
          <ProductGallery />
        </div>

        <main className="w-full">
          <ProductInfo />
        </main>
      </div>
    </div>
  );
}

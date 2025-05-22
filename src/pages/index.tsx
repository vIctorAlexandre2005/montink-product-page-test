import { ProductGallery } from "@/components/ProductGallery";
import { ProductInfo } from "@/components/ProductInfo";

export default function Home() {
  return (
    <div className="w-full h-full p-2">
      <div className="flex w-auto gap-2 justify-center items-center">
        <div className="w-full flex items-center justify-center">
          <ProductGallery />
        </div>

        <main className="w-full">
          <h1 className="text-3xl font-bold">
            <ProductInfo />
          </h1>
        </main>
      </div>
    </div>
  );
}

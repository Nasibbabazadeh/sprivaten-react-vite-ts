import ProductCard from "../../features/common/Cards/ProductCard";
import Title from "../../features/common/Title";

export default function ProductSection() {
  return (
    <div className="max-w-[73%] mx-auto  flex flex-col py-20 gap-20 sm:max-w-[89%]">
      <Title header="WHY CHOOSE US" />
      <ProductCard />
    </div>
  );
}

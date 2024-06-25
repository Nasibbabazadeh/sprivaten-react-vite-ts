import ProductCard from "../../features/common/Cards/ProductCard";
import Title from "../../features/common/Title";

export default function ProductLayout() {
  return (
    <div className="max-w-[73%] mx-auto  flex flex-col py-20 gap-20">
      <Title header="WHY CHOOSE US" />
      <ProductCard />
    </div>
  );
}

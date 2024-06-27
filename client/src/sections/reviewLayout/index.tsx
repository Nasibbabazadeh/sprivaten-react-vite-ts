import ReviewCard from "../../features/common/Cards/ReviewCard";
import Title from "../../features/common/Title";

export default function ReviewLayout() {
  return (
    <div className="bg-bg-primary">
      <div className="max-w-[73%] mx-auto  flex flex-col py-20 gap-20 sm:max-w-[89%]">
        <Title header="What Clients Say" />
        <ReviewCard />
      </div>
    </div>
  );
}

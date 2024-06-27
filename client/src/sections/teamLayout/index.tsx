import TeamCard from "../../features/common/Cards/TeamCard";
import Title from "../../features/common/Title";

export default function TeamLayout() {
  return (
    <div className="max-w-[73%] mx-auto  flex flex-col py-20 gap-20 sm:max-w-[89%]">
      <Title header="Meet Our Team" />
      <TeamCard />
    </div>
  );
}

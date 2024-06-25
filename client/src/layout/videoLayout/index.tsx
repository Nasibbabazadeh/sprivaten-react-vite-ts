import Title from "../../features/common/Title";
import { VideoCover } from "../../assets";
export default function VideoLayout() {
  return (
    <div className="bg-linear-cover">
      <div className="max-w-[73%] mx-auto  flex flex-col py-20 gap-[50px] ">
        <Title header="We take care customers our all expert here." />
        <img src={VideoCover} alt="video-cover" />
      </div>
    </div>
  );
}

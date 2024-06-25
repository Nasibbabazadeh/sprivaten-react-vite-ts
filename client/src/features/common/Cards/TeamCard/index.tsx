import { TwitterIcon, InstagramIcon, FBIcon } from "../../../../assets";
import { TeamData } from "../../../Mockdata/data";
export default function TeamCard() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 gap-[30px]">
      {TeamData.map((member) => {
        return (
          <div key={member.id} className="flex flex-col items-center justify-center border-[1px] border-border3">
            <img src={member.img} alt="team member" className="h-[231px] w-full object-cover" />
            <div className="flex flex-col p-[30px] items-center gap-[5px] w-[75%] mx-auto">
              <h5 className="text-base text-text-color font-bold tracking-[0.1px]">{member.name}</h5>
              <h6 className="text-xs text-second-text-color  tracking-[0.2px]">{member.profession}</h6>
              <div className="flex gap-[15px]">
                <img src={FBIcon} alt="facebook" />
                <img src={InstagramIcon} alt="instagram" />
                <img src={TwitterIcon} alt="twitter" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

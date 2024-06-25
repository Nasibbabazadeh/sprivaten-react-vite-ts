import { Fragment } from "react/jsx-runtime";
import { StarIcon, ProfilePhoto, EmptyStar } from "../../../../assets";

export default function ReviewCard() {
  const array = [1, 2, 3];
  const StarArr = [4, 5, 6, 7];
  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 gap-[30px]">
      {array.map((card) => {
        return (
          <div
            key={card}
            className="flex flex-col gap-5 py-[30px] px-[35px] rounded-[5px] border-[1px] border-bg-primary bg-light-text-color"
          >
            <div className="flex">
              {StarArr.map((star: number) => {
                return (
                  <Fragment key={star}>
                    <img src={StarIcon} alt="star-icon" />
                  </Fragment>
                );
              })}
              <img src={EmptyStar} alt="star-icon" />
            </div>
            <span className="text-second-text-color text-xs mr-[15%] tracking-[0.2px] font-semibold">
              Slate helps you see how many more days you need to work to reach your financial goal.
            </span>
            <div className="flex gap-[15px] items-center">
              <img src={ProfilePhoto} alt="profile-photo" />
              <div className="text-xs tracking-[0.2px] font-semibold">
                <p className=" text-primary">Regina Miles</p>
                <h6> Designer</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

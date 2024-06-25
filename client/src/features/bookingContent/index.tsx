import CustomButton from "../common/CustomButton";

export default function BookingContent() {
  return (
    <div className="max-w-[49.5%] tracking-[0.2px] flex flex-col gap-[35px] items-start justify-center sm:max-w-full sm:items-center">
      <h1 className="text-header text-text-color  font-extrabold  sm:text-header2 sm:text-center ">
        Drive More Customers Through Digital
      </h1>
      <h4 className="text-md text-second-text-color font-medium  sm:text-center ">
        We know how large objects will act, but things on a small scale.
      </h4>
      <div className="flex gap-[10px] sm:flex-col sm:gap-5">
        <CustomButton className="text-sm text-light-text-color bg-secondary-color-1 font-bold py-[10px] px-9 rounded-xxl border-[1px] border-secondary-color-1 text-nowrap">
          Get Quote Now
        </CustomButton>
        <CustomButton className="text-sm text-secondary-color-1 font-bold py-[10px] px-9 rounded-xxl border-[1px] border-secondary-color-1 text-nowrap">
          Learn More
        </CustomButton>
      </div>
    </div>
  );
}

import CustomButton from "../../features/common/CustomButton";
import CustomInput from "../../features/common/CustomInput";
import CustomSelect from "../../features/common/CustomSelect";
import Frame from "../../assets/uploads/frame-2.jpg";
export default function ContactSection() {
  return (
    <>
      <div
        className=" w-full h-[821px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Frame})`, objectFit: "cover" }}
      >
        <div className="max-w-[73%] mx-auto py-[50px]  sm:max-w-[89%]  ">
          <div className="w-[50%] flex flex-col py-10 gap-10 sm:w-full ">
            <div>
              <h5 className="text-base text-text-color tracking-[0.1px] font-bold  text-nowrap">Contact Us</h5>
              <h3 className="text-xxl text-text-color tracking-[0.1px] font-bold  text-nowrap">Make an Appointment</h3>
            </div>
            <form>
              <div className=" gap-[21px] grid grid-cols-2  sm:grid-cols-1 ">
                <CustomInput id="name" type="text" placeholder="Full Name " />
                <CustomInput id="email" type="text" placeholder="example@gmail.com" />
                <CustomSelect disabledOption="Please select" />
                <CustomSelect disabledOption="4:00 Available" />
                {/* <input
                  type="text"
                  placeholder="Message"
                  className="w-full h-[128px] py- col-span-2 rounded-[5px] border-muted-color border-[1px] bg-input-bg placeholder:text-sm placeholder:tracking-[0.2px] placeholder:text-second-text-color focus:outline-none "
                /> */}
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  className="col-span-2 rounded-[5px] border-muted-color border-[1px] bg-input-bg placeholder:text-sm placeholder:tracking-[0.2px] placeholder:text-second-text-color focus:outline-none py-[11px] px-[21px]"
                  rows={8}
                />
              </div>
              <CustomButton
                type="submit"
                className="py-[15px] px-10 bg-primary rounded-[5px] mt-10 sm:relative   sm:w-full "
              >
                <span className="text-sm font-bold text-light-text-color text-nowrap text-center">
                  Booking Appointment
                </span>
              </CustomButton>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-[73%] mx-auto py-[40px] flex justify-between sm:flex-col sm:gap-[50px] sm:px-10">
        <div className="flex flex-col gap-[10px]">
          <h5 className="text-xxl text-text-color tracking-[0.1px] font-bold  text-nowrap sm:text-balance sm:text-center">
            Consulting Agency For Your Business
          </h5>
          <span className="text-parag text-second-text-color font-medium tracking-[0.2px] sm:text-balance sm:text-center">
            the quick fox jumps over the lazy dog
          </span>
        </div>
        <CustomButton className="py-[15px] px-10 bg-primary text-light-text-color rounded-[5px]">
          <span className="text-sm font-bold text-light-text-color text-nowrap text-center">Contact Us</span>
        </CustomButton>
      </div>
    </>
  );
}

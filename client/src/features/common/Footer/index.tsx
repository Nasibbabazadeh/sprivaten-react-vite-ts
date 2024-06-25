import { FB2, INSTA2, TwitterIcon, Youtube } from "../../../assets";
import CustomButton from "../CustomButton";
export default function Footer() {
  return (
    <>
      <footer className="w-full bg-bg-footer ">
        <div className="max-w-[73%] mx-auto flex flex-col sm:max-w-[83%] ">
          <div className="w-full py-10 flex justify-between items-center sm:flex-col sm:items-start sm:gap-[50px] ">
            <h3 className="text-xxl text-light-text-color font-bold tracking-[0.1px]">Sprivaten</h3>
            <ul className="gap-5 flex items-center">
              <li>
                <img src={FB2} alt="facebook" />
              </li>
              <li>
                <img src={INSTA2} alt="instagram" />
              </li>
              <li>
                <img src={TwitterIcon} alt="twitter" />
              </li>
              <li>
                <img src={Youtube} alt="youtube" />
              </li>
            </ul>
          </div>
          <hr className="h-[1px] text-hr-bg max-w-[73%] mx-auto" />
          <nav className="py-[70px] flex w-full justify-between item sm:flex-col sm:gap-8 ">
            <div className=" flex-col gap-10">
              <h6 className="text-base text-light-text-color font-bold tracking-[0.1px]  pb-5">Company Info</h6>
              <ul className="flex flex-col gap-[10px] text-xs text-muted-color font-semibold tracking-[0.2px]">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="flex-col gap-5">
              <h6 className="text-base text-light-text-color font-bold tracking-[0.1px] pb-5">Legal</h6>
              <ul className="flex flex-col gap-[10px] text-xs text-muted-color font-semibold tracking-[0.2px]">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="flex-col gap-5">
              <h6 className="text-base text-light-text-color font-bold tracking-[0.1px] pb-5">Features</h6>
              <ul className="flex flex-col gap-[10px] text-xs text-muted-color font-semibold tracking-[0.2px]">
                <li>IOS & Android</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="flex-col gap-5">
              <h6 className="text-base text-light-text-color font-bold tracking-[0.1px] pb-5">Resources</h6>
              <ul className="flex flex-col gap-[10px] text-xs text-muted-color font-semibold tracking-[0.2px]">
                <li>Business Marketing</li>
                <li>Watch a Demo</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>
            <div>
              <h5 className="text-base text-light-text-color font-bold tracking-[0.1px] pb-5">Get In Touch</h5>
              <form action="" className="flex">
                <input
                  placeholder="Your Email"
                  className="py-[15px] px-[20px] rounded-l-[5px] focus:outline-none placeholder:text-sm  placeholder:text-muted-color placeholder:text-tracking-[0.2px]"
                />
                <CustomButton className="py-[15px] px-[22.5px] border-[1px] bg-primary border-none text-light-text-color rounded-r-[5px] text-sm">
                  Subscribe
                </CustomButton>
              </form>
              <span className=" text-muted-color font-normal  tracking-[0.2px] text-xxs ">Lorem impsum dolor amit</span>
            </div>
          </nav>
        </div>
      </footer>
      <div className="w-full bg-secondary-color-2">
        <p className="py-[25px] max-w-[73%]  mx-auto text-base text-light-text-color font-semibold tracking-[0.2px] sm:text-center sm:text-balance sm:max-w-[55%] ">
          Made With Love By Figmaland All Right Reserved{" "}
        </p>
      </div>
    </>
  );
}

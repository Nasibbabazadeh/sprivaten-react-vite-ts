import { SearchIcon, ShoppingIcon, ToggleIcon } from "../../../assets";

export default function Header() {
  return (
    <header className="max-w-[92%] mx-auto h-[104px] flex justify-between items-center sm:w-full sm:h-[532px] sm:items-start sm:pt-6 sm:relative sm:bg-light-text-color sm:min-w-full ">
      <nav className="flex w-full justify-around items-center ">
        <h3 className="text-xxl  text-text-color font-bold tracking-[0.1px]">
          Sprivaten
        </h3>
        <div className="flex justify-evenly w-[38%]">
          <ul className="flex justify-between text-sm text-second-text-color font-semibold tracking-[0.2px]  w-[60%] sm:absolute sm:flex-col sm:max-w-[30%]  sm:h-[270px] sm:left-[50%] sm:translate-x-[-50%] sm:text-2xxl sm:top-[164px] sm:text-center sm:font-normal ">
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <div className="flex gap-4 h-[18px] sm:w-[50%] sm:justify-between ">
            <img src={SearchIcon} alt="search-icon" />
            <img src={ShoppingIcon} alt="shopping-icon" />
          </div>
        </div>
      </nav>
      <img src={ToggleIcon} alt="toggle-icon" className="sm:mt-2 sm:mr-7" />
    </header>
  );
}

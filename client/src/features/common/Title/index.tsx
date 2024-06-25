interface TitleProps {
  header: string;
}
export default function Title({ header }: TitleProps) {
  return (
    <div className="max-w-[88.5%] mx-auto flex flex-col gap-[10px] items-center  tracking-[0.2px] ">
      <h5 className="text-header2  font-bold text-text-color sm:text-center">
        {header}
      </h5>
      <p className="text-parag text-second-text-color font-medium w-[75%] text-center text-balance ">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
    </div>
  );
}

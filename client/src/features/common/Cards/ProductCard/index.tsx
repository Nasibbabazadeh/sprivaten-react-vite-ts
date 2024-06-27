import { CardDetails } from "../../../../Mockdata/data";

export default function ProductCard() {
  return (
    <article className="grid grid-cols-3 gap-[30px] md:grid-cols-2 sm:grid-cols-1">
      {CardDetails.map((card) => {
        return (
          <div key={card.id}>
            <div className="flex justify-center py-[30px] px-[20px] bg-card-bg-primary rounded-t-[11px] items-center gap-[15px] ">
              <div className="flex justify-center items-center py-[22px] px-[8%]  rounded-[200px] bg-light-text-color">
                <img src={card.image} alt={card.alternate} className="w-6 h-8" />
              </div>
              <h5 className="text-base text-text-color font-bold tracking-[0.1px] text-nowrap">{card.title}</h5>
            </div>
            <article className="py-[30px] px-[50px] rounded-b-[11px] border-border1 border-[1px] flex flex-col gap-[5px] text-xs text-second-text-color font-semibold tracking-[0.2px] ">
              <h6>- The best products start with Figma </h6>
              <h6> - Design with real data </h6>
              <h6> - Lightning fast prototyping </h6>
              <h6>- Fastest way to organize</h6>
              <h6> - Work at the speed of thought.</h6>
              <span className="text-primary">Learn More</span>
            </article>
          </div>
        );
      })}
    </article>
  );
}

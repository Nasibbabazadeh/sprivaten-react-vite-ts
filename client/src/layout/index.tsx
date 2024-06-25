import Footer from "../features/common/Footer";
import Header from "../features/common/Header";
import BookingLayout from "./bookingLayout";
import ProductLayout from "./productsLayout";
import ReviewLayout from "./reviewLayout";
import TeamLayout from "./teamLayout";
import VideoLayout from "./videoLayout";

export default function MainLayout() {
  return (
    <>
      <div className="bg-[url('./assets/uploads/cover-1.png')] bg-no-repeat bg-cover ">
        <Header />
        <section>
          <BookingLayout />
        </section>
      </div>
      <section>
        <ProductLayout />
      </section>
      <section>
        <VideoLayout />
      </section>
      <section>
        <ReviewLayout />
      </section>
      <section>
        <TeamLayout />
      </section>
      <Footer />
    </>
  );
}

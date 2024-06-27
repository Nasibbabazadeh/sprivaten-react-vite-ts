import Footer from "../features/common/Footer";
import Header from "../features/common/Header";
import BookingSection from "../sections/bookingSection";
import ContactSection from "../sections/contactSection";
import ProductSection from "../sections/productsSection";
import ReviewSection from "../sections/reviewSection";
import TeamSection from "../sections/teamSection";
import VideoSection from "../sections/videoSection";

export default function MainLayout() {
  return (
    <>
      <div className="bg-[url('./assets/uploads/cover-1.png')] bg-no-repeat bg-cover ">
        <Header />
        <section>
          <BookingSection />
        </section>
      </div>
      <section>
        <ProductSection />
      </section>
      <section>
        <VideoSection />
      </section>
      <section>
        <ReviewSection />
      </section>
      <section>
        <TeamSection />
      </section>
      <section>
        <ContactSection />
      </section>
      <Footer />
    </>
  );
}

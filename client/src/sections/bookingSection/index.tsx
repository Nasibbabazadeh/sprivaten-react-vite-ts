import BookingForm from "../../features/BookingForm/BookingForm";
import BookingContent from "../../features/bookingContent";

export default function BookingSection() {
  return (
    <div className="max-w-[73%] mx-auto  flex justify-between py-[50px] sm:flex-col sm:max-w-[89%] sm:items-center sm:gap-20">
      <BookingContent />
      <BookingForm />
    </div>
  );
}

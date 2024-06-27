import * as Yup from "yup";

interface BookingFormValues {
  name: string;
  email: string;
  department: string;
}

const BookingSchema = Yup.object<BookingFormValues>({
  name: Yup.string().min(3, "Please write your fullname!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  department: Yup.string().required("Required"),
  time: Yup.string().required("Required"),
});
export default BookingSchema;

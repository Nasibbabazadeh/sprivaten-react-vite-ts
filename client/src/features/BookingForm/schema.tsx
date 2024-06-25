import * as Yup from "yup";

const BookingSchema = Yup.object({
  name: Yup.string()
    .min(3, "Please write your fullname!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  department: Yup.string().required("Required"),
});
export default BookingSchema;

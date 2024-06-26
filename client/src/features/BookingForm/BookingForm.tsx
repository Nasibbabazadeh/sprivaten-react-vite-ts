import { useFormik } from "formik";
import CustomInput from "../common/CustomInput";
import CustomSelect from "../common/CustomSelect/index";
import { departments, times } from "../../Mockdata/data";
import CustomButton from "../common/CustomButton";
import BookingSchema from "./schema";

export default function BookingForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      department: "",
      email: "",
      time: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: BookingSchema,
    validateOnChange: true,
  });
  const { handleSubmit, errors, touched, dirty, isValid } = formik;
  return (
    <div className="max-w-[43%] p-10 flex flex-col gap-10 rounded-md bg-light-text-color sm:min-w-full ">
      <div className="text-xxl text-text-color tracking-[0.1px] font-bold text-center text-nowrap">
        Book Appointment
      </div>
      <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between gap-[12px]">
        <CustomInput
          id="name"
          type="text"
          label="Name*"
          placeholder="Full Name"
          error={touched.name && errors.name}
          {...formik.getFieldProps("name")}
        />

        <CustomInput
          id="email"
          type="email"
          label="Email*"
          placeholder="example@gmail.com"
          error={touched.email && errors.email}
          {...formik.getFieldProps("email")}
        />
        <CustomSelect
          disabledOption="select department"
          label="Department*"
          options={departments}
          error={errors.department}
          touched={touched.department}
          {...formik.getFieldProps("department")}
        />
        <CustomSelect
          disabledOption="select available time"
          label="Time*"
          options={times}
          error={errors.time}
          touched={touched.time}
          {...formik.getFieldProps("time")}
        />
        <CustomButton
          type="submit"
          disabled={!isValid || !dirty}
          className="py-[15px] px-10 bg-primary rounded-[5px] mt-10  disabled:bg-opacity-[40%] disabled:cursor-not-allowed"
        >
          <span className="text-sm font-bold text-light-text-color text-nowrap text-center">Booking Appointment</span>
        </CustomButton>
      </form>
    </div>
  );
}

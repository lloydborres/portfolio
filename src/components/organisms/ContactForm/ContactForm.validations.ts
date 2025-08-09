import * as yup from "yup";

const contactFormSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email must be valid").optional(),
  message: yup.string().required("Message is required"),
});

export { contactFormSchema };

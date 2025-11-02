import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object({
  user_name: yup.string().min(3, "Min length is 3 characters").required("Name is required"),
  user_email: yup.string().email("Invalid email Foramt").required("Email is required"),
  
  message: yup.string().required("Message is required").min(10, "Min length is 10 characters")
});

export default schema;
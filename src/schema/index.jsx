import * as Yup from "yup"

export const Schema = Yup.object().shape({
  Name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  Email: Yup.string().email("Please enter valid email").required("Required"),

  Phone: Yup.string().max(10
    )
    .matches(/^[6-9]\d{9}$/, { message: "Please enter valid number." })
    .required("Required"),

  Age: Yup.string()
    .matches(/^(1[89]|[2-9]\d)$/gm, {
      message: "age should be more than 18 years.",
    })
    .required("Required"),

  Gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Invalid gender")
    .required("please select gender"),

  Hobbies: Yup.string()
    .oneOf(["Sport", "Singing", "Reading", "Dancing"], "Invalid Hobbies")
    .required("please select hobbies"),

  terms: Yup.array().min(1, "please accept terms & conditions"),
})

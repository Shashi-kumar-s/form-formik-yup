import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Schema } from "../../schema"
import "../form/form.css"
import "../../style/mediascreen/style.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { InputData } from "../../utilities/inputdata"
import { GenderData, HobbiesData } from "../../utilities/selectFieldData"

const RegistrationForm = () => (
  <div>
    <Formik
      initialValues={{
        Name: "",
        Email: "",
        Phone: "",
        Age: "",
        Gender: "",
        Hobbies: "",
        Comment: "",
        terms: [],
      }}
      validationSchema={Schema}
      onSubmit={(data, action) => {
        localStorage.setItem("user", JSON.stringify(data))
        toast.success("Application submitted", {
          position: "top-center",
          theme: "colored",
          autoClose: 1000,
        })
        action.resetForm()
      }}
    >
      <div className="main">
        <div className="form__container">
          <ToastContainer />
          <h1 className="heading">Registration-Form</h1>
          <Form className="form__details">
            {InputData.map((ele) => {
              return (
                <>
                  <label htmlFor={ele.name} key={ele.id}>
                    {ele.name}
                  </label>
                  <Field
                    name={ele.name}
                    type={ele.type}
                    placeholder={ele.placeholder}
                    className={"input__field"}
                  />
                  <p className="error">
                    <ErrorMessage name={ele.name} />
                  </p>
                </>
              )
            })}
            <div className="select__box">
              <div>
                <label htmlFor="Gender">Gender</label>
                <Field as="select" name="Gender" className="input__field">
                  <option>--Gender--</option>
                  {GenderData.map((ele) => {
                    return <option value={ele.value}>{ele.value}</option>
                  })}
                </Field>
                <p className="error">
                  <ErrorMessage name="Gender" />
                </p>
              </div>
              <div>
                <label htmlFor="Hobbies">Hobbies</label>
                <Field as="select" name="Hobbies" className="input__field">
                  <option >--Hobbies--</option>
                  {HobbiesData.map((ele) => {
                    return (
                      <option key={ele.id} value={ele.value}>
                        {ele.value}
                      </option>
                    )
                  })}
                </Field>
                <p className="error">
                  <ErrorMessage name="Hobbies" />
                </p>
              </div>
            </div>
            <label htmlFor="Comment">Comment</label>
            <Field
              as="textarea"
              name="Comment"
              placeholder="Enter Your Comment Here..."
              className="input__field textarea"
            />
            <p className="error">
              <ErrorMessage name="Comment" />
            </p>
            <div className="terms__cond">
              <Field name="terms" type="checkbox" value="Accept" />
              <label>Terms & conditions.</label>
            </div>
            <p className="error">
              <ErrorMessage name="terms" />
            </p>
            <button type="submit" className="form__button">
              Submit
            </button>
          </Form>
        </div>
      </div>
    </Formik>
  </div>
)

export default RegistrationForm


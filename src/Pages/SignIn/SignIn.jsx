import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./SignIn.scss";

export default function SignIn() {
  const [users, setUsers] = useState([]);
  const initialValues = {
    fname: "",
    lname: "",
    mail: "",
    password: "",
  };

  const handleSubmit = (values, resetForm) => {
    const user = {
      id: Date.now(),
      ...values,
    };
    setUsers([...users, user]);
    resetForm();
  };
  console.log(users);
  return (
    <div className="SignIn">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik) => {
          return (
            <Form>
              <div className="SignIn-form">
                <div className="form">
                  <label htmlFor="fname">First Name</label>
                  <Field type="text" name="fname" id="fname" />
                  <ErrorMessage name="fname" component="p" />

                  <label htmlFor="fname">Last Name</label>
                  <Field type="text" name="lname" id="lname" />
                  <ErrorMessage name="lname" component="p" />

                  <label htmlFor="fname">Mail</label>
                  <Field type="text" name="mail" id="mail" />
                  <ErrorMessage name="mail" component="p" />

                  <label htmlFor="fname">Password</label>
                  <Field type="text" name="password" id="password" />
                  <ErrorMessage name="password" component="p" />

                  <input className="btn" type="submit" value="Confirm" />
                </div>
                <div className="mask">
                  <img className="mask-img" src="../../../public/E/L-mask.jpg" alt="" />
                  <img className="mask-img-bg" src="../../../public/E/L-mask-bg.png" alt="" />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

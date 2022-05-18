import "./login.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
/* import { useContext } from "react";
import AuthContext from "../../auth/auth-context"; */
import Swal from 'sweetalert2'
import axios from "axios";

export const Login = () => {
  /*   const authCtx = useContext(AuthContext); */

  const navigate = useNavigate()

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          let errores = {};
          //Validación email
          if (!values.email) {
            errores.email = "Please enter your email.";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            errores.email =
              "May contain only letters, numbers, underscores, hyphens or periods.";
          }
          //Validación password
          if (!values.password) {
            errores.password = "Please enter your password.";
          }
          return errores;
        }}
        onSubmit={(values) => {
          navigate("/home");
          /*           axios
                      .post("http://challenge-react.alkemy.org", values)
                      .then((res) => {
                        console.log(res.data.token);
                        authCtx.login(res.data.token);
                        localStorage.setItem("token", res.data.token);
                        navigate("/home");
                      })
                      .catch((err) => {
                        Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: 'Incorrect Data!'
                        })
                      }); */
        }}
      >
        {({ errors }) => (
          <Form className="formulario container">
            <div >
              <label htmlFor="email">Email</label>
              <Field id="email" type="email" name="email" placeholder="challenge@alkemy.org" />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="error" >{errors.email}</div>
                )}
              />
            </div>
            <div >
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                type="password"
                name="password"
                placeholder="react"
              />
              <ErrorMessage
                name="password"
                component={() => (
                  <div className="error">{errors.password}</div>
                )}
              />
            </div>

            <button type="submit">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

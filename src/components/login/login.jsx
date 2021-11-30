import "./login.scss";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

export const Login = () => {
  const [formularioEnviado, SetFormularioEnviado] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          correo: "",
          contraseña: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validación correo
          if (!valores.correo) {
            errores.correo = "Please enter your email";
          }

          // Validación password
          if (!valores.contraseña) {
            errores.contraseña = "Please enter your password";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          SetFormularioEnviado(true);
          setTimeout(() => SetFormularioEnviado(false), 3000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario container">
            <div>
              <label htmlFor="correo">Email</label>
              <Field
                type="email"
                id="correo"
                name="correo"
                placeholder="email@email.com"
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>

            <div>
              <label htmlFor="contraseña">Password</label>
              <Field
                type="password"
                id="contraseña"
                name="contraseña"
                placeholder="password"
              />
              <ErrorMessage
                name="contraseña"
                component={() => (
                  <div className="error">{errors.contraseña}</div>
                )}
              />
            </div>

            <button type="submit">Login</button>

            {formularioEnviado && <p className="exito">Registered user!</p>}
          </Form>
        )}
      </Formik>
    </>
  );
};

import React from "react";
import Header from "../../components/Header/Header";
import { Formik } from "formik";
import * as Yup from "yup";
import { Forma, FormRow, Labela, Polje, Poruka } from "./LoginStyle";
import { LoginUser, getAllUsers } from "../../api/users";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
  return (
    <>
      <Header />
      <div>Ovo je Login stranica</div>
      <Formik
        initialValues={{
            email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Required"),
          password: Yup.string()
            .required("Required"),
        })}
        onSubmit={async (values, actions, ) => {
            try {
                const res = await LoginUser(values);
                const userData = await getAllUsers(
                    res.access_token,
                );

                localStorage.setItem('accessToken', res.access_token);
                
                actions.setSubmitting(false);
                actions.resetForm({
                    email: "",
                    password: "",
                });
                navigate("/");
            } catch (err) {
                console.log(err);
            }
        }}
      >
        <Forma>
          <FormRow>
            <Labela htmlFor="email">E-mail</Labela>
            <Polje name="email" type="email" />
            <Poruka name="email" />
          </FormRow>
          <FormRow>
            <Labela htmlFor="password">Password</Labela>
            <Polje name="password" type="password" />
            <Poruka name="password" />
          </FormRow>
          
          <button type="submit">Submit</button>
        </Forma>
      </Formik>
    </>
  );
};

export default Login;

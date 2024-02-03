"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Typography } from "@/components/Typography";
import { ROUTE } from "@/constants/routes";
import { Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import * as Yup from "yup";

export default function SignUp() {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("This field is required"),
          middleName: Yup.string().required("This field is required"),
          lastName: Yup.string().required("This field is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("This field is required"),
          password: Yup.string()
            .min(8, "Must be 8 characters or more")
            .required("This field is required"),
        })}
        onSubmit={(_values) => {
          signIn(undefined, { callbackUrl: "/" });
        }}
      >
        <Form>
          <div className="mb-4">
            <Input
              type="text"
              label="First Name"
              placeholder="First Name"
              name="firstName"
            />
          </div>

          <div className="mb-4">
            <Input
              type="text"
              label="Middle Name"
              placeholder="Middle Name"
              name="middleName"
            />
          </div>

          <div className="mb-4">
            <Input
              type="text"
              label="Last Name"
              placeholder="Last Name"
              name="lastName"
            />
          </div>

          <div className="mb-4">
            <Input
              type="email"
              label="Email"
              placeholder="Email"
              name="email"
            />
          </div>

          <div className="mb-4">
            <Input
              type="password"
              label="Password"
              placeholder="Password"
              name="password"
            />
          </div>

          <Button type="submit">Sign Up</Button>
        </Form>
      </Formik>
      <Typography
        variant="body1"
        component="p"
        className="text-slate-500 mt-6 text-center"
      >
        Already have an account?{" "}
        <Link href={ROUTE.SIGNIN} className="text-blue-500">
          Sign in
        </Link>
      </Typography>
    </>
  );
}

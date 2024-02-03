"use client";

import { Input } from "@/components/Input";
import { Typography } from "@/components/Typography";
import { ICON } from "@/constants/icons";
import { ROUTE } from "@/constants/routes";
import Icon from "@ant-design/icons";
import { Button } from "antd";
import { Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";

export default function SignIn() {
  return (
    <>
      <div className="text-center mb-11">
        <Typography
          variant="h1"
          component="h3"
          className="text-gray-900 mb-2"
          weight="bold"
        >
          Sign In
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className="text-gray-400"
          weight="medium"
        >
          Your Social Campaigns
        </Typography>
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <Button
          icon={
            <Icon
              component={() => (
                <Image src={ICON.GOOGLE} alt="Google icon" width={15} />
              )}
            />
          }
          block
        >
          Sign in with Google
        </Button>
        <Button
          icon={
            <Icon
              component={() => (
                <Image src={ICON.APPLE} alt="Apple icon" width={15} />
              )}
            />
          }
          block
        >
          Sign in with Apple
        </Button>
      </div>
      <Typography
        variant="body3"
        component="p"
        className="text-slate-400 my-8 text-center after:content-['—'] after:ml-2 before:content-['—'] before:mr-2"
      >
        Or with email
      </Typography>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("This field is required"),
          password: Yup.string()
            .min(8, "Must be 8 characters or more")
            .required("This field is required"),
        })}
        onSubmit={(values) => {
          signIn("credentials", {
            email: values.email,
            password: values.password,
          });
        }}
      >
        <Form>
          <div className="mb-8">
            <Input type="email" placeholder="Email" name="email" size="large" />
          </div>

          <div className="mb-3">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              size="large"
            />
          </div>

          <Link
            href={ROUTE.FORGOT_PASSWORD}
            className="block text-blue-500 text-sm font-medium text-right mb-8"
          >
            Forgot password?
          </Link>

          <Button type="primary" block>
            Sign In
          </Button>
        </Form>
      </Formik>
      <Typography
        variant="body2"
        component="p"
        className="text-slate-500 mt-6 text-center"
      >
        Not a member yet?{" "}
        <Link href={ROUTE.SIGNUP} className="text-blue-500">
          Sign up
        </Link>
      </Typography>
    </>
  );
}

"use client";

import { Input } from "@/components/Input";
import { ROUTE } from "@/constants/routes";
import { Button, Checkbox } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

export default function ResetPassword() {
  return (
    <>
      <div className="text-center mb-8">
        <Title level={3}>Setup New Password</Title>
        <Text type="secondary">
          Have you already reset your password?{" "}
          <Link href={ROUTE.SIGNIN} className="text-blue-500 font-medium">
            Sign in
          </Link>
        </Text>
      </div>
      <Formik
        initialValues={{ password: "", confirmPassword: "", agreed: false }}
        validationSchema={Yup.object({
          password: Yup.string()
            .required("This field is required")
            .matches(
              /^(?=.*[A-Z])/,
              "Password must contain at least one uppercase character",
            )
            .matches(
              /^(?=.*[a-z])/,
              "Password must contain at least one lowercase character",
            )
            .matches(
              /^(?=.*[0-9])/,
              "Password must contain at least one number",
            )
            .matches(
              /^(?=.*[!@#\$%\^&\*])/,
              "Password must contain at least one special character",
            )
            .min(8, "Password must be 8 characters or more"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("This field is required"),
        })}
        onSubmit={(values) => alert(JSON.stringify(values, undefined, 4))}
      >
        {(props) => (
          <Form>
            {/* TODO: add password strength bar */}
            <div className="mb-4">
              <Input
                type="password"
                placeholder="Password"
                name="password"
                size="large"
              />
            </div>

            <div className="mb-4">
              <Input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                size="large"
              />
            </div>

            <div className="mb-4">
              <Field
                type="checkbox"
                name="agreed"
                component={() => (
                  <Checkbox
                    checked={props.values.agreed}
                    onChange={() =>
                      props.setFieldValue("agreed", !props.values.agreed)
                    }
                  >
                    I agree to the{" "}
                    <Button type="link" className="!p-0">
                      Terms and Conditions
                    </Button>
                  </Checkbox>
                )}
              />
            </div>

            <Button
              type="primary"
              size="large"
              htmlType="submit"
              block
              disabled={!props.values.agreed}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

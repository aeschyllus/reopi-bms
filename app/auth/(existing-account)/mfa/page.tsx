"use client";

import { Input } from "@/components/Input";
import { ICON } from "@/constants/icons";
import { Button } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import { Form, Formik } from "formik";
import Image from "next/image";
import * as Yup from "yup";

export default function MFA() {
  return (
    <>
      <div className="text-center mb-8">
        <Image
          src={ICON.SMARTPHONE}
          alt="smart phone"
          className="mx-auto mb-8"
        />
        <Title level={3}>Two-Factor Verification</Title>
        <Text type="secondary">Enter the verification code we sent to</Text>
        <Title level={5}>*******2473</Title>
      </div>
      <Formik
        initialValues={{ otp: "" }}
        validationSchema={Yup.object({
          otp: Yup.number()
            .required("This field is required")
            .typeError("This field should be a number")
            .min(6, "OTP must be 6 digits")
            .max(6, "OTP must be 6 digits"),
        })}
        onSubmit={(values) => alert(JSON.stringify(values, undefined, 4))}
      >
        <Form>
          <div className="mb-2">
            <Text strong>Type your 6 digit security code</Text>
          </div>
          <div className="mb-4">
            <Input type="text" placeholder="" name="otp" size="large" />
          </div>
          <div className="flex justify-center">
            <Button type="primary" size="large" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
      <div className="text-center mt-8">
        <Text type="secondary">
          Didn't get the code?{" "}
          <Button type="link" className="!p-0">
            Resend
          </Button>{" "}
          or{" "}
          <Button type="link" className="!p-0">
            Call Us
          </Button>
        </Text>
      </div>
    </>
  );
}

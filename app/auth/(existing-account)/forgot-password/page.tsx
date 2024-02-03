"use client";

import { Input } from "@/components/Input";
import { ROUTE } from "@/constants/routes";
import { Button, Modal } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <>
      <div className="text-center mb-8">
        <Title level={3}>Forgot Your Password?</Title>
        <Text type="secondary">Enter your email to reset your password.</Text>
      </div>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("This field is required"),
        })}
        onSubmit={(_values, { setSubmitting }) => {
          setTimeout(() => {
            Modal.success({
              title: "Success!",
              content: "We have sent a password reset link to your email.",
              onOk: () => router.push(ROUTE.RESET_PASSWORD),
              centered: true,
            });
            setSubmitting(false);
          }, 400);
        }}
      >
        {(props) => (
          <Form>
            <div className="mb-4">
              <Input
                type="email"
                placeholder="Email"
                name="email"
                size="large"
              />
            </div>

            <div className="flex items-center justify-center gap-2">
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                loading={props.isSubmitting}
              >
                {!props.isSubmitting ? "Submit" : "Please wait..."}
              </Button>
              <Button size="large" onClick={() => router.push(ROUTE.SIGNIN)}>
                Cancel
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

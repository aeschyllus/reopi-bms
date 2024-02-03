import { Button, Modal, Space } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export default function TermsOfUseModal({ open, handleClose }: IProps) {
  return (
    <Modal
      open={open}
      cancelButtonProps={{ ghost: true }}
      onCancel={handleClose}
      footer={[
        <Button type="primary" onClick={handleClose}>
          OK
        </Button>,
      ]}
      centered
    >
      <Title level={2} className="!m-0 text-center">
        Real Excellence Online
      </Title>
      <Title level={4} className="!mt-0 !mb-8 text-center">
        Terms of Use
      </Title>

      <Space direction="vertical">
        <Text className="block mb-4">
          Please be reminded of REO's Terms of Use
        </Text>

        <Space direction="vertical" className="mb-4">
          <Text strong>User Eligibility and Responsibilities:</Text>
          <Text>
            REO’s video lectures are intended for reviewees currently enrolled
            in our review service. These videos must not be used for illegal or
            unauthorized purposes, and users must not upload, post, or otherwise
            transmit any content that infringes on any third-party rights. These
            videos are for personal use only and must not be used for group
            viewing by those not enrolled.
          </Text>
        </Space>

        <Space direction="vertical" className="mb-4">
          <Text strong>Intellectual Property:</Text>
          <Text>
            The lecture videos here are protected by copyright and other
            intellectual property laws. Users must not copy, reproduce, or
            distribute any part of these videos.
          </Text>
        </Space>

        <Space direction="vertical" className="mb-4">
          <Text strong>Penalties:</Text>
          <Text>
            Any reviewees who copy, reproduce, or distribute any part of these
            videos will be penalized according to the piracy laws.{" "}
            <Text className="!text-red-500" strong underline>
              Financial damages will be collected, and criminal charges will be
              filed.
            </Text>
          </Text>
          <Text className="!text-red-500" strong underline>
            Beware that your eligibility to take the board exams will also be
            affected.
          </Text>
        </Space>

        <Text italic>
          Sharing of access is not allowed. Once detected, it will result in the
          automatic lock-up of accounts. Violators of this use restriction rule
          will no longer be allowed by REO to use any of its apps.
        </Text>
      </Space>
    </Modal>
  );
}

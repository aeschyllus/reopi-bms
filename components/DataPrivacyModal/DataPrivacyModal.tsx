import { PERSONAL_INFORMATION } from "@/constants/data-privacy";
import { Button, Flex, Modal, Space } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export default function DataPrivacyModal({ open, handleClose }: IProps) {
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
      width={1000}
      centered
    >
      <Title level={2} className="!m-0 text-center">
        Real Excellence Online
      </Title>
      <Title level={4} className="!mt-0 !mb-8 text-center">
        Data Privacy Consent Form
      </Title>

      <Space direction="vertical" size="middle">
        <Text>
          Real Excellence Online Philippines (REO) upholds the value and
          security of personal information entrusted by its reviewees in its
          various review programs and training services in any professional and
          non-professional review courses.
        </Text>

        <Text>
          We are strongly committed to protect our reviewees’ personal
          information’s from any breaches, unauthorized use and disclosure in
          compliance with the Data Privacy Act of 2012 and its Implementing
          Rules and Regulations and other applicable laws. We regard your
          privacy with utmost importance and ensures that all personal
          information’s are held under strict confidentiality and are protected
          and processed in accordance with the principles of transparency,
          legitimate purpose and proportionality.
        </Text>

        <Text>
          The term “Personal Information” refers to any information whether
          recorded in a material form or not, from which the identity of an
          individual is apparent or can be reasonably and directly ascertained
          by the entity holding the information, or when put together with other
          information would directly and certainly identify an individual. It
          includes Sensitive Personal Information which refers to personal
          information:
        </Text>

        <ol className="list-outside list-decimal pl-[revert]">
          <Space direction="vertical">
            {PERSONAL_INFORMATION.map((info) => (
              <li key={info.id}>{info.description}</li>
            ))}
          </Space>
        </ol>

        <Text strong>Processing of Personal Data</Text>

        <ol className="list-outside list-[upper-alpha] pl-[revert]">
          <Space direction="vertical">
            <li>
              <Text>Collection of Information</Text>
              <Space direction="vertical" className="my-4">
                <Text>
                  We collect your personal data that include those you provide
                  us during your application for enrollment, information we
                  acquire or generate upon enrolment and during the course of
                  your review with us.
                </Text>

                <ol className="list-outside list-decimal pl-[revert]">
                  <li>
                    <Text>
                      Information you provide us during your application for
                      admission
                    </Text>
                    <Space className="my-4">
                      <Text>
                        Upon application for enrollment, we collect information
                        about your personal circumstances and contact
                        information such as but not limited to your name, date
                        of birth, civil status, email address, telephone or
                        mobile number, residence/office address, school and year
                        graduated, academic performance, medical records and the
                        like.
                      </Text>
                    </Space>
                  </li>
                  <li>
                    <Text>
                      Information we require or generate upon enrollment and
                      during the course of your review with us
                    </Text>
                    <Space className="my-4">
                      <Text>
                        Upon enrollment and during the course of your review
                        with us, we collect information on the review subjects
                        you enrolled, your performance rating for every preboard
                        examination and your performance ranking, your
                        attendance record including the time logged in the REO
                        app and such other information’s that may be generated
                        during the course of your review with REO.
                      </Text>
                    </Space>
                  </li>
                </ol>
              </Space>
            </li>

            <li>
              <Text>Access to Information</Text>
              <Space direction="vertical" size="middle" className="my-4">
                <Text>
                  Your personal information is accessed and used by authorized
                  REO employees including but not limited to the personnels of
                  the Information Technology (IT) Team, registrar, cashier and
                  other personnels who have legitimate interest to carry out
                  effectively their mandated duties and responsibilities and for
                  legitimate purposes.
                </Text>
                <Text>
                  We use and share your information as permitted or required by
                  law to achieve our legitimate goals and objectives as a review
                  provider in various fields of professional and
                  non-professional review courses.
                </Text>
              </Space>
            </li>

            <li>
              <Text>Sharing of Information</Text>
              <Space direction="vertical" className="my-4" size="middle">
                <Text>
                  REO shall keep all personal data in strict confidentiality. As
                  a rule, REO do not and will not share personal data with third
                  parties except as necessary for a legitimate purpose or as
                  determined by REO to promote your best interests, or the use
                  or disclosure is reasonably necessary, required or authorized
                  by or under the law. Sharing and disclosure shall include but
                  not limited to:
                </Text>

                <ol className="list-outside list-decimal pl-[revert]">
                  <Space direction="vertical" size="middle">
                    <li>
                      Posting of class lists and class schedules in REO bulletin
                      boards or in a conspicuous place within the premises of
                      REO including the REO website and REO app;
                    </li>
                    <li>
                      Publishing and distribution in brochures, tarpaulins,
                      newspapers and other publications, including posting
                      online in the REO website and other social media platforms
                      of achievements, success, passing and topping of preboard
                      examinations and the actual board or bar examination to
                      promote, advertise and market REO;
                    </li>
                    <li>
                      Sharing of information to persons, including parents,
                      guardians or next of kin, as required by law or on a
                      need-to-know basis as determined by REO to promote your
                      best interests, or to protect your health, safety and
                      security, or that of others;
                    </li>
                    <li>
                      <Text>
                        Sharing of personal data and information’s regarding
                        accomplishments, achievements, performance rating and
                        ranking with:
                      </Text>

                      <ol className="list-outside list-[lower-alpha] pl-[revert] mt-4">
                        <Space direction="vertical">
                          <li>
                            The school you graduated from or were enrolled in;
                          </li>
                          <li>
                            Potential donors, funders or benefactors for
                            purposes of scholarship grants and other forms of
                            assistance; and
                          </li>
                          <li>
                            Potential employers for purposes of job employment
                            opportunities.
                          </li>
                        </Space>
                      </ol>
                    </li>
                    <li>
                      Sharing of information in the conduct of internal
                      research, surveys, presentation, publication, and
                      utilization of research output for purposes of
                      institutional development;
                    </li>
                    <li>
                      Publishing communications with journalistic content in REO
                      website, REO app, social media sites, social media
                      organizations and the like;
                    </li>
                    <li>
                      Sharing of personal data in compliance with court orders,
                      subpoena and other legal processes; and
                    </li>
                    <li>
                      Sharing of personal data and other records for other
                      legitimate and lawful purposes.
                    </li>
                  </Space>
                </ol>

                <Text>
                  If REO intends to use your personal data and other records for
                  purposes other than those above-described, Reo shall obtain
                  your written consent for that purpose, unless you yourself
                  makes a specific request to process the personal data and
                  records for such purpose, or if such processing without
                  consent is allowed under the Data Privacy Act of 2012 and its
                  implementing rules and regulations, and other appicable laws
                </Text>
              </Space>
            </li>
          </Space>
        </ol>

        <Text strong>Data Protection and Retention</Text>

        <Text>
          REO shall implement reasonable and appropriate organizational,
          physical, and technical security measures for the protection of
          personal data which we collected.
        </Text>

        <Text>
          The security measures shall aim to maintain the availability,
          integrity, and confidentiality of personal data and are intended for
          the protection of personal data against any accidental or unlawful
          destruction, alteration, and disclosure, as well as against any other
          unlawful processing.
        </Text>

        <Text>
          We only permit your data to be accessed or processed by our authorized
          personnel who hold such information under strict confidentiality. We
          restrict access to information to just anyone who like to know or
          obtain such information without justifiable ground.
        </Text>

        <Text>
          We only permit your data to be accessed or processed by our authorized
          personnel who hold such information under strict confidentiality. We
          restrict access to information to just anyone who like to know/obtain
          such information without justifiable ground.
        </Text>

        <Text>
          After successfully completing your review at REO, your personal
          information remains private and confidential.
        </Text>

        <Text strong>Right to Privacy</Text>

        <Text>
          As provided by the Data Privacy Act of 2012 and its implementing rules
          and regulations, you may object to the processing of your personal
          data, request to access your personal information, and/or have it
          corrected, erased, or blocked on reasonable grounds. For the details
          of your rights as a data subject, you can get in touch with our Data
          Privacy Officer at the contact informations provided below. REO will
          consider your request and reserves the right to deal with the matter
          in accordance with the law.
        </Text>

        <Text>
          If you have further questions or concerns regarding your privacy
          rights, this Consent Form or any matter regarding the Data Privacy Act
          of 2012, you may contact our Data Protection Officer through the
          following details:
        </Text>

        <Flex vertical className="pl-8">
          <Text strong>The Data Protection Officer</Text>
          <Text strong>Contact No.: 09614174504</Text>
          <Text strong>
            Email Address: edzbanggawan@realexcellenceonline.ph
          </Text>
        </Flex>

        <Text strong>Declaration</Text>

        <Text>
          I have read and understood the contents of this Consent Form. As an
          applicant for enrollment, I hereby give my consent that REO may
          collect and process my personal data as set out above and for other
          legitimate purposes. I also understand that my consent does not
          preclude the existence of other criteria for lawful processing of
          personal data, and does not waive any of my rights under the Data
          Privacy Act of 2012 and other applicable laws.
        </Text>
      </Space>
    </Modal>
  );
}

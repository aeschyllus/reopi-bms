"use client";

import { DataPrivacyModal } from "@/components/DataPrivacyModal";
import { TermsOfUseModal } from "@/components/TermsOfUseModal";
import { Typography } from "@/components/Typography";
import { ICON } from "@/constants/icons";
import { IMG } from "@/constants/images";
import { Button } from "antd";
import Image from "next/image";
import { useState } from "react";

export default function ExistingAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openTermsModal, setOpenTermsModal] = useState(false);
  const [openPrivacyModal, setOpenPrivacyModal] = useState(false);

  return (
    <div className="grid lg:grid-cols-2 h-screen">
      <div className="flex flex-col items-center justify-center gap-36">
        <div className="lg:w-[450px]">{children}</div>
        <div className="flex flex-col gap-3 lg:flex-row items-center justify-between lg:w-[450px]">
          <Typography variant="body3" component="p">
            Copyright © 2023 RealExcellence
          </Typography>
          <div className="flex items-center gap-3">
            <Button type="link" onClick={() => setOpenTermsModal(true)} block>
              Terms
            </Button>
            <Button type="link" onClick={() => setOpenPrivacyModal(true)} block>
              Privacy
            </Button>
            <TermsOfUseModal
              open={openTermsModal}
              handleClose={() => setOpenTermsModal(false)}
            />
            <DataPrivacyModal
              open={openPrivacyModal}
              handleClose={() => setOpenPrivacyModal(false)}
            />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:grid place-content-center p-8">
        <Image src={IMG.BG_AUTH} alt="bg" fill className="-z-10" />
        <div className="text-center">
          <Image
            src={ICON.METRONIC_CUSTOM}
            alt="Metronic logo"
            width={120}
            className="mx-auto mb-12"
          />
          <Image
            src={IMG.SCREENS_AUTH}
            alt="Auth screens"
            width={500}
            className="mb-10 mx-auto"
          />
          <Typography
            variant="h1"
            component="h3"
            className="text-white mb-7"
            weight="bold"
          >
            Fast, Efficient and Productive
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className="text-white w-[460px]"
          >
            In this kind of post, the blogger introduces a person they’ve
            interviewed and provides some background information about the
            intervieweeand their work following this is a transcript of the
            interview.
          </Typography>
        </div>
      </div>
    </div>
  );
}

"use client";

import { IMG } from "@/constants/images";
import { AVATAR_ITEMS } from "@/constants/nav";
import { Avatar, Dropdown } from "antd";
import { Header } from "antd/es/layout/layout";
import Image from "next/image";

export default function CustomHeader() {
  return (
    <Header className="flex items-center justify-end !px-6">
      <Dropdown
        placement="bottomRight"
        menu={{ items: AVATAR_ITEMS }}
        trigger={["click"]}
        className="block cursor-pointer"
      >
        <Avatar src={<Image src={IMG.AVATAR} alt="avatar" />} size="large" />
      </Dropdown>
    </Header>
  );
}

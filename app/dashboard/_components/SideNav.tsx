"use client";

import { ICON } from "@/constants/icons";
import { NAV_ITEMS } from "@/constants/nav";
import { ROUTE } from "@/constants/routes";
import { ConfigProvider, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const rootSubMenuKeys = ["2"];

export default function SideNav() {
  const pathname = usePathname();
  const [selectedKeys, setSelectedKeys] = useState([""]);
  const [openKeys, setOpenKeys] = useState([""]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (latestOpenKey && rootSubMenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    switch (pathname) {
      case ROUTE.DASHBOARD:
        setSelectedKeys(["1"]);
        break;
      case ROUTE.EMPLOYEE_LIST:
        setOpenKeys(["2"]);
        setSelectedKeys(["sub1"]);
        break;
      default:
        setOpenKeys([""]);
        setSelectedKeys([""]);
        break;
    }
  }, [pathname]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: "rgb(3,7,18)",
            itemColor: "rgb(107,114,120)",
            itemHoverColor: "#fff",
            itemSelectedBg: "rgb(55,65,81)",
            itemSelectedColor: "#fff",
          },
        },
      }}
    >
      <Sider breakpoint="lg" collapsedWidth="0" width="265">
        <div className="p-6 border-dashed border-b border-gray-800">
          <Image src={ICON.METRONIC_FULL} alt="Metronic logo" width={120} />
        </div>
        <Menu
          items={NAV_ITEMS}
          mode="inline"
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          onOpenChange={onOpenChange}
        />
      </Sider>
    </ConfigProvider>
  );
}

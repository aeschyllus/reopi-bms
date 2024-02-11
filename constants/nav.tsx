import {
  DashboardOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps, Space } from "antd";
import Link from "next/link";
import { ROUTE } from "./routes";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const NAV_ITEMS: MenuItem[] = [
  getItem(
    <Link href={ROUTE.DASHBOARD}>Dashboard</Link>,
    "1",
    <DashboardOutlined />
  ),
  getItem("Employee Information", "2", <UserOutlined />, [
    getItem(<Link href={ROUTE.EMPLOYEE_LIST}>Employee List</Link>, "sub1"),
  ]),
];

export const AVATAR_ITEMS = [
  getItem(
    <Space>
      <UserOutlined />
      My profile
    </Space>,
    1
  ),
  getItem(
    <Space className="text-red-500">
      <LogoutOutlined />
      Sign out
    </Space>,
    2
  ),
];

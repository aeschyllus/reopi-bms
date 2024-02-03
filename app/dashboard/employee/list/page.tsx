"use client";

import { UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Breadcrumb,
  Button,
  Dropdown,
  Flex,
  Table,
  TableProps,
  Tag,
} from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";

interface DataType {
  key: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  twoStep: boolean;
  joinDate: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "User",
    dataIndex: "user",
    key: "user",
    render: (_, { firstName, lastName, email }) => (
      <Flex align="center" gap={10}>
        <Avatar icon={<UserOutlined />} size="large" />
        <Flex vertical>
          <Text>{`${firstName} ${lastName}`}</Text>
          <Text type="secondary">{`${email}`}</Text>
        </Flex>
      </Flex>
    ),
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (_, { role }) => {
      let color;

      switch (role) {
        case "Admin":
          color = "red";
          break;
        case "Support":
          color = "pink";
          break;
        case "Developer":
          color = "blue";
          break;
      }

      return (
        <Tag color={color} key={role}>
          {role.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Two-step",
    dataIndex: "twoStep",
    key: "twoStep",
    render: (_, { twoStep }) => twoStep && <Tag color="green">Enabled</Tag>,
  },
  { title: "Joined Date", dataIndex: "joinDate", key: "joinDate" },
  {
    title: "Actions",
    key: "actions",
    render: () => (
      <Dropdown
        placement="bottomRight"
        menu={{
          items: [
            { label: "Edit", key: 1 },
            { label: "Delete", key: 2 },
          ],
        }}
        trigger={["click"]}
        className="block cursor-pointer"
      >
        <Button>Actions</Button>
      </Dropdown>
    ),
  },
];

const dataSource: DataType[] = [
  {
    key: "1",
    firstName: "Dennis",
    lastName: "Patricio",
    email: "d.patricio@sinvion.com",
    role: "Admin",
    twoStep: true,
    joinDate: "14 January 2024",
  },
  {
    key: "2",
    firstName: "Jhon Paul",
    lastName: "Laparan",
    email: "jp.laparan@sinvion.com",
    role: "Support",
    twoStep: true,
    joinDate: "14 January 2024",
  },
  {
    key: "3",
    firstName: "Ryan",
    lastName: "Avanzado",
    email: "a.avanzado@sinvion.com",
    role: "Developer",
    twoStep: false,
    joinDate: "14 January 2024",
  },
  {
    key: "4",
    firstName: "Mark",
    lastName: "Lapada",
    email: "m.lapada@sinvion.com",
    role: "Developer",
    twoStep: false,
    joinDate: "14 January 2024",
  },
  {
    key: "5",
    firstName: "Dennis",
    lastName: "Patricio",
    email: "d.patricio@sinvion.com",
    role: "Admin",
    twoStep: true,
    joinDate: "14 January 2024",
  },
  {
    key: "6",
    firstName: "Jhon Paul",
    lastName: "Laparan",
    email: "jp.laparan@sinvion.com",
    role: "Support",
    twoStep: true,
    joinDate: "14 January 2024",
  },
  {
    key: "7",
    firstName: "Ryan",
    lastName: "Avanzado",
    email: "a.avanzado@sinvion.com",
    role: "Developer",
    twoStep: false,
    joinDate: "14 January 2024",
  },
  {
    key: "8",
    firstName: "Mark",
    lastName: "Lapada",
    email: "m.lapada@sinvion.com",
    role: "Developer",
    twoStep: false,
    joinDate: "14 January 2024",
  },
  {
    key: "9",
    firstName: "Dennis",
    lastName: "Patricio",
    email: "d.patricio@sinvion.com",
    role: "Admin",
    twoStep: true,
    joinDate: "14 January 2024",
  },
  {
    key: "10",
    firstName: "Jhon Paul",
    lastName: "Laparan",
    email: "jp.laparan@sinvion.com",
    role: "Support",
    twoStep: true,
    joinDate: "14 January 2024",
  },
  {
    key: "11",
    firstName: "Ryan",
    lastName: "Avanzado",
    email: "a.avanzado@sinvion.com",
    role: "Developer",
    twoStep: false,
    joinDate: "14 January 2024",
  },
  {
    key: "12",
    firstName: "Mark",
    lastName: "Lapada",
    email: "m.lapada@sinvion.com",
    role: "Developer",
    twoStep: false,
    joinDate: "14 January 2024",
  },
];

export default function EmployeeList() {
  return (
    <div>
      <Title level={3}>Users List</Title>
      <div className="mb-4">
        <Breadcrumb
          items={[
            { title: "Dashboard" },
            { title: "Employee Information" },
            { title: "Employee List" },
          ]}
        />
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ x: 1300, y: 600 }}
      />
    </div>
  );
}

import { ConfigProvider, Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { CustomHeader, SideNav } from "./_components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: "rgb(3,7,18)",
            headerBg: "#fff",
            headerPadding: 0,
          },
        },
      }}
    >
      <Layout className="h-screen">
        <SideNav />

        <Layout>
          <CustomHeader />
          <Content className="px-12 py-8 lg:px-40">{children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

import { Layout } from "antd";
import { Routing } from "./Routing";
const { Footer } = Layout;

export const PageLayout = () => {
  return (
    <Layout className="layout">
      <Routing />
      <Footer style={{ textAlign: "center" }}>
        Tord Eliasson Ghidoni © {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

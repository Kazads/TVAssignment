import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

export const MenuComponent = () => {
  const navigate = useNavigate();
  const onClick = (event: any) => {
    navigate(event.key);
  };
  return (
    <Header>
      <Menu
        defaultSelectedKeys={["/" + window.location.pathname.split("/")[1]]}
        onClick={onClick}
        theme="dark"
        mode="horizontal"
        items={[
          { label: "Search series", key: "/" },
          { label: "Show series details", key: "/show" },
        ]}
        data-testid={"menu"}
      />
    </Header>
  );
};

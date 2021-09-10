import { Menu } from "antd"
// Watch out this Link component is different than the link from react
// it is a Link component from Next.js
import Link from "next/link"

// Importing Ant Design Icons
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const { Item } = Menu;

const TopNav = () => {
  return (
    <Menu mode="horizontal">
      <Item icon={<AppstoreOutlined />}>
        <Link href="/">
          <a>App</a>
        </Link>
      </Item>

      <Item icon={<LoginOutlined />}>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Item>

      <Item icon={<UserAddOutlined />}>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </Item>

    </Menu>
  );
};

export default TopNav;

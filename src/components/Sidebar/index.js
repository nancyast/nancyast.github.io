import { Menu as AMenu } from 'antd';
import styled from 'styled-components';
import { ReactComponent as DashboardIcon } from 'assets/svg/dashboard-icon.svg';
import { ReactComponent as UserIcon } from 'assets/svg/user-icon.svg';
import { ReactComponent as DataRegisterIcon } from 'assets/svg/data-register-icon.svg';
import { ReactComponent as LogoutIcon } from 'assets/svg/logout-icon.svg';

const StyledMenu = styled(AMenu)`
  margin-top: 40px;
  width: 100%;
  flex: 1 0 0;

  &.ant-menu-vertical {
    border-right: none;

    .ant-menu-item {
      height: 54px;
      margin: 0;
      padding: 14px 16px;
      display: flex;
      align-items: center;
      font-size: 16px;

      &.ant-menu-item-selected {
        background-color: rgba(0, 89, 171, 0.1);
        border-radius: 6px;
        font-family: 'Arial Bold', sans-serif;
        color: #0059ab;
      }
    }
  }
`;

const SideBarContainer = styled.nav`
  width: 265px;
  min-width: 265px;
  height: 100%;
  flex: 0 0 0;
  padding: 32px 24px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: white;

  .sidebar-header {
    color: #0059ab;
    text-transform: uppercase;
    font-size: 30px;
  }
`;

const Logout = styled.div`
  color: #0059ab;
  font-family: 'Arial Bold', sans-serif;
  font-size: 16px;
  height: 10%;
  display: flex;
  justify-content: center;

  button.content {
    cursor: pointer;
    height: fit-content;
    display: flex;
    gap: 16px;
    justify-content: center;
    background: none;
    border: none;
    outline: none;
    margin: 0;
  }
`;

const items = [
  {
    label: 'Introduction',
    key: 'dashboard',
    icon: <DashboardIcon />
  },
  {
    label: 'My CV',
    key: 'user-list',
    icon: <UserIcon />
  },
  {
    label: 'My interests',
    key: 'data-register',
    icon: <DataRegisterIcon />
  }
];

const SideBar = ({ onRequestLogout, selectedKeys = [], onMenuItemChage }) => {
  const onSelectMenuItem = ({ key }) => {
    onMenuItemChage(key);
  };

  return (
    <SideBarContainer>
      <div className="sidebar-header">My profile</div>
      <StyledMenu
        selectedKeys={selectedKeys}
        items={items}
        mode="vertical"
        onSelect={onSelectMenuItem}
      />
      {/* <Logout>
        <button className="content" onClick={onRequestLogout}>
          <LogoutIcon />
          <span className="text">Bye</span>
        </button>
      </Logout> */}
    </SideBarContainer>
  );
};

export default SideBar;

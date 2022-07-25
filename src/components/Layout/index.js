import styled from 'styled-components';
import { SideBar, Header, PublicLayout } from 'components';

const AuthenticatedLayout = styled.section`
  min-width: 1060px;
  width: 100%;
  height: 100%;
  background-color: #f2f5fe;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
`;

const RightContent = styled.section`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.main`
  height: 100%;
  flex: 1 0 0;
  width: 100%;
  padding: 32px;
  overflow: auto;
  justify-content: center;

  .page-title {
    color: #0059ab;
    font-size: 20px;
    line-height: 28px;
    font-family: 'Arial Bold', sans-serif;
    margin-bottom: 24px;
  }
`;

const FitContent = styled.section`
  width: 100%;
  max-width: 1559px;
  margin: 0 auto;
`;

const Layout = ({
  type = 'private',
  userName,
  children,
  onRequestLogout,
  onMenuItemChage,
  selectedKeys
}) => {
  if (type === 'public') {
    return <PublicLayout>{children}</PublicLayout>;
  }
  return (
    <AuthenticatedLayout>
      <SideBar
        selectedKeys={selectedKeys}
        onRequestLogout={onRequestLogout}
        onMenuItemChage={onMenuItemChage}
      />
      <RightContent>
        <Header userName={userName} />
        <Content>
          <FitContent>{children}</FitContent>
        </Content>
      </RightContent>
    </AuthenticatedLayout>
  );
};

export default Layout;

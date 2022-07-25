import styled from 'styled-components';
import { ReactComponent as NotificationIcon } from 'assets/svg/notification-icon.svg';
import { ReactComponent as AvatarIcon } from 'assets/svg/avatar-icon.svg';

const StyledHeader = styled.header`
  width: 100%;
  height: 72px;
  background-color: white;
  flex: 0 0 72px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  padding: 16px 28px;

  .user-name {
    font-size: 14px;
    font-family: 'Arial Bold', sans-serif;
  }
`;

const Header = ({ userName }) => {
  return (
    <StyledHeader>
      <NotificationIcon />
      <AvatarIcon />
      <div className="user-name">{userName}</div>
    </StyledHeader>
  );
};

export default Header;

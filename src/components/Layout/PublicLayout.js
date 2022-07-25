import styled from 'styled-components';
import { ReactComponent as ProjectLogo } from 'assets/svg/project-logo.svg';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f5fe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .project-logo {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

const PublicLayout = ({ children }) => {
  return (
    <Container>
      <div className="project-logo">
        <ProjectLogo />
      </div>
      {children}
    </Container>
  );
};

export default PublicLayout;

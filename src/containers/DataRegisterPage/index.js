import styled from 'styled-components';
import { UploadFile } from 'components';

const UploadContainer = styled.section`
  width: 500px;
  margin: 20px auto;
`;

const DataRegisterPage = () => {
  return (
    <>
      <h1 className="page-title">Interests</h1>

      <UploadContainer>
        <UploadFile />
      </UploadContainer>
    </>
  );
};

export default DataRegisterPage;

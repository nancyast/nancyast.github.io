import styled from 'styled-components';

const StyledBtn = styled.button`
  border: 1px solid #d9d9d9;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  background: white;
  color: #003974;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Arial Bold', sans-serif;
  cursor: pointer;
`;

const ExportButton = ({ children }) => {
  return <StyledBtn>{children}</StyledBtn>;
};

export default ExportButton;

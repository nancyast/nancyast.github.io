import styled from 'styled-components';

const StyleCard = styled.article`
  flex: 1 0 350px;
  min-width: 350px;
  height: 194px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;

  .title {
    color: #7b7b7b;
    font-size: 20px;
    line-height: 28px;
    margin: 8px 0;
  }

  .subtitle {
    font-size: 36px;
    line-height: 48px;
    color: #333333;
    font-family: 'Arial Bold', sans-serif;
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 70px;
  text-align: right;
`;

const StatisticCard = ({ icon = '', title = '', subTitle = '' }) => {
  return (
    <StyleCard>
      <IconWrapper>{icon}</IconWrapper>
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subTitle}</h3>
    </StyleCard>
  );
};

export default StatisticCard;

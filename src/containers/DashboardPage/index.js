import styled from 'styled-components';
import { StatisticCard } from 'components';
import { useCallback, useEffect, useState } from 'react';
import { admin } from 'api';
import { ReactComponent as StatisticIcon1 } from 'assets/svg/statistic-icon1.svg';
import { ReactComponent as StatisticIcon2 } from 'assets/svg/statistic-icon2.svg';
import { ReactComponent as StatisticIcon3 } from 'assets/svg/statistic-icon3.svg';
import { ReactComponent as StatisticIcon4 } from 'assets/svg/statistic-icon4.svg';
import { ReactComponent as StatisticIcon5 } from 'assets/svg/statistic-icon5.svg';
import { ReactComponent as StatisticIcon6 } from 'assets/svg/statistic-icon6.svg';

const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin: 0 auto;

  .line-of-card {
    width: 100%;
    display: flex;
    gap: 24px;
  }
`;

const DashboardPage = () => {
  const [statistic, setStatistic] = useState({});
  const fetchStatistic = useCallback(async () => {
    const data = await admin.getStatistic();
    setStatistic(data);
  }, []);

  useEffect(() => {
    fetchStatistic();
  }, [fetchStatistic]);

  return (
    <>
      <h1 className="page-title">My labels</h1>
      <Cards>
        <div className="line-of-card">
          <StatisticCard
            key="1"
            icon={<StatisticIcon1 />}
            title="Front-end developer"
            subTitle="about 3-year experience"
          />
          <StatisticCard
            key="2"
            icon={<StatisticIcon2 />}
            title="HTML/CSS/JS"
            subTitle="is my strength"
          />
        </div>
        <div className="line-of-card">
          <StatisticCard
            key="1"
            icon={<StatisticIcon3 />}
            title="Reactjs"
            subTitle="is my favorite library"
          />
          <StatisticCard
            key="2"
            icon={<StatisticIcon4 />}
            title="Redux, redux-thunk, redux-saga"
            subTitle="is my favorite tools "
          />
        </div>
        <div className="line-of-card">
          <StatisticCard
            key="1"
            icon={<StatisticIcon5 />}
            title="Introvert"
            subTitle="is my personality"
          />
          <StatisticCard
            key="2"
            icon={<StatisticIcon6 />}
            title="Gentle"
            subTitle="is what people describe me"
          />
        </div>
      </Cards>
    </>
  );
};

export default DashboardPage;

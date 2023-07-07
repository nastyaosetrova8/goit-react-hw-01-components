import PropTypes from 'prop-types';
import Stat from './Stat';
import { StatisticsStyled } from './StatisticsStyled';

const Statistics = props => {
  const { title = '', stats } = props;
  return (
    <StatisticsStyled className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <Stat
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          );
        })}
      </ul>
    </StatisticsStyled>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;

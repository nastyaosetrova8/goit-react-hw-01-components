import PropTypes from 'prop-types';
import Stat from './Stat';

const Statistics = props => {
  const { title = '', stats } = props;
  return (
    <section className="statistics">
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
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      //   label: PropTypes.string.isRequired,
      //   percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;

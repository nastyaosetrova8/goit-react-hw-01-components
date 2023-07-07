import PropTypes from 'prop-types';
import { getRandomHexColor } from 'helpers/getRandomHexColor';
import { StatStyled } from './StatisticsStyled';

const Stat = props => {
  const { label, percentage } = props;
  return (
    <StatStyled className="item" color={getRandomHexColor()}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatStyled>
  );
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stat;
 
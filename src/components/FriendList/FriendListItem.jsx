import PropTypes from 'prop-types';
import { StatusStyled } from './FriendListStyled';
import { BsFillEmojiSmileFill } from 'react-icons/bs';

const FriendListItem = props => {
  const { avatar, name, isOnline = false } = props;
  return (
    <li className="item">
      <StatusStyled isOnline={isOnline} className="status"> <BsFillEmojiSmileFill size={20}/>
      </StatusStyled>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;

import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendListStyled } from './FriendListStyled';

const FriendList = props => {
  const { friends } = props;
  return (
    <FriendListStyled className="friend-list">
      {friends.map(friendListItem => {
        return (
          <FriendListItem
            key={friendListItem.id}
            isOnline={friendListItem.isOnline}
            avatar={friendListItem.avatar}
            name={friendListItem.name}
          />
        );
      })}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};

export default FriendList;

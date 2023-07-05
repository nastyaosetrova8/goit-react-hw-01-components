import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = props => {
  const { friends } = props;
  return (
    <ul className="friend-list">
      {friends.map(friendListItem => {
        return (
          <FriendListItem
            key={friendListItem.id}
            status={friendListItem.status}
            avatar={friendListItem.avatar}
            name={friendListItem.name}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;

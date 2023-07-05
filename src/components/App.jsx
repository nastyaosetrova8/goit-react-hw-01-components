import Profile from './Profile';
import user from '../user.json';
import Statistics from './Statistics';
import data from '../data.json';
import FriendList from './FriendList';
import friends from '../friends.json';

// const stats = data.stats;

export const App = () => {
  // console.log(user);
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
};

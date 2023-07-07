import Profile from './Profile/Profile';
import user from '../dataJson/user.json';
import Statistics from './Statistics/Statistics';
import data from '../dataJson/data.json';
import FriendList from './FriendList/FriendList';
import friends from '../dataJson/friends.json';
import transactions from '../dataJson/transactions.json';
import TransactionHistory from './Transaction/TransactionHistory';

// const stats = data.stats;

export const App = () => {
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
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};

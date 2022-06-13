import user from 'data/user';
import stats from 'data/data';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import s from './App.module.css';

export default function App() {
  return (
    <div className={s.mainContainer}>
      <div className={s.profileContainer}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={stats} />
      </div>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

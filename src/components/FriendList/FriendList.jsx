import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, name, avatar }) => {
        return (
          <FriendListItem
            avatar={avatar}
            isOnline={isOnline}
            name={name}
            key={id}
          />
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

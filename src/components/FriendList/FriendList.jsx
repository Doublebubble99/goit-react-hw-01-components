import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
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
function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span
        className={clsx(css.status, isOnline ? [css.green] : [css.red])}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
FriendList.propTypes = {
  friends: PropTypes.array,
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

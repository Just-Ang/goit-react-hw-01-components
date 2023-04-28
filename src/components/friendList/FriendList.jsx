 import PropTypes from 'prop-types';
 import css from './FriendList.module.css'
function getColorStatus(status) {
    return status ? 'green' : 'red';
  }
export default function FriendList({friends}) {
  return (
    <ul class={css.friendslist}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.item}>
            <span className={css.status} style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
           backgroundColor: getColorStatus(isOnline),
          }}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
          </li>
        )
      })}
    </ul>
  )
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
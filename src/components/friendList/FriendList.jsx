// import PropTypes from 'prop-types';
function getColorStatus(status) {
    return status ? 'green' : 'red';
  }
export default function FriendList({friends}) {
  return (
    <ul class="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className="item">
            <span className="status" style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
           backgroundColor: getColorStatus(isOnline),
          }}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        )
      })}
    </ul>
  )
}

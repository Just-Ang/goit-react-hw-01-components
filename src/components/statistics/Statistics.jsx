import PropTypes from 'prop-types';
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

export default function Statistics({ title, stats }) {
  return (
    <section>
      {title && <h2 className="title">{title}</h2>}
      {stats.map(({ label, percentage, id }) => {
        return (
            <div key={id}  style={{ backgroundColor: getRandomHexColor() }}>
            <span>{label} </span>
            <span>{percentage}%</span>
          </div>
        );
      })}
    </section>
  );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };
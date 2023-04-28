import PropTypes from 'prop-types';

import css from './Statistics.module.css';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <span>{label} </span>
              <span>{percentage}%</span>
            </li>
          );
        })}
      </ul>
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

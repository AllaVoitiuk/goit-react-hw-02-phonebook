import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={css.item} key={id}>
              {name}: {number}
              <button
                className={css.button_delete}
                type="button"
                onClick={() => {
                  onDelete(id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
};

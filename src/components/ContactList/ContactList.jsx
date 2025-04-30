import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations/contactsOperations';
import { selectFilteredContacts, selectError, selectLoading } from '../../redux/slices/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (contacts.length === 0) {
    return <div>No contacts found</div>;
  }

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.item}>
          <span className={styles.contact}>
            {name}: {phone}
          </span>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
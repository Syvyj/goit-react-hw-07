import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter, selectNameFilter } from '../../redux/slices/filtersSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div className={styles.filterContainer}>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className={styles.input}
          placeholder="Search contacts..."
        />
      </label>
    </div>
  );
};

export default Filter;
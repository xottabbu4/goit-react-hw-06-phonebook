import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.filterSection}>
      <label className={css.filterLabel}>
        <p className={css.filterText}>Find contacts by name</p>
        <input className={css.filterInput} type="text" onChange={event => {
          const action = filterContacts(event.target.value);
          dispatch(action);
        }} />
      </label>
    </div>
  );
};


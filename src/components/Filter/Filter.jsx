import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <label className="Filter__label">
    Find contacts by name
    <input
      className="Filter__input"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;

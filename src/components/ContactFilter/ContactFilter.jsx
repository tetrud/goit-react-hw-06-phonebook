import { connect } from 'react-redux';

import contactActions from '../../redux/contact-action';
import './ContactFilter.scss';

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

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

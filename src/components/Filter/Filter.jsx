import { PropTypes } from 'prop-types';
import { LabelFilter, InputFilter } from "./Filter.styled";
// 
import { useDispatch } from 'react-redux';
import { filtringContactsUser } from 'redux/filterSlice';

export const Filter = () => {

  const dispatch = useDispatch();
  
  const handleFilter = e => {
    dispatch(filtringContactsUser(e.target.value));
  }
  return (
    <LabelFilter>
       Find contacts by name
      <InputFilter type="text" name="name" onChange={handleFilter}/>
    </LabelFilter>
  );
};

Filter.propTypes = {
  filtring: PropTypes.func
}
import { InputSearch, LabelSearch } from './SearchContact.styled';
import { setFilter } from 'redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';


const SearchContact = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => dispatch(setFilter(e.target.value));
  
  return (
    <>
      <LabelSearch>
        Find contacts by name
        <InputSearch onChange={handleFilterChange} />
      </LabelSearch>
    </>
  );
};

export default SearchContact

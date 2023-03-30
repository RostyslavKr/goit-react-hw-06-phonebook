import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import {
  ContainerFilterInput,
  TitleFilter,
  FilterInput,
} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(filterContact(value));
  };

  return (
    <ContainerFilterInput>
      <ContainerFilterInput htmlFor="name">
        <TitleFilter>Find contacts by name</TitleFilter>
        <FilterInput
          autoComplete="off"
          type="text"
          name="name"
          onChange={handleChange}
        />
      </ContainerFilterInput>
    </ContainerFilterInput>
  );
};

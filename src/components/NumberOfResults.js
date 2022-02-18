import { Select } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../redux/reducers/searchReducer';

export default function NumberOfResults() {
  const resultsNumber = useSelector((state) => state.search.form.resultsNumber);
  const dispatch = useDispatch();

  const setResultsNumber = (value) => {
    dispatch(setSearch('resultsNumber',value))
  }

  return (
    <div>
      <Select value={resultsNumber} onChange={(e) => setResultsNumber(e.target.value)} placeholder='Number of Results'>
        <option>1</option>
        <option>5</option>
        <option>10</option>
        </Select><br />
    </div>
  )
}

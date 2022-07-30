import { items } from './mock/mock';
// import Spinner from './components/spinner/spinner';
import { Table } from './components/table';
import { useState } from 'react';

const App = () => {
  const [sort, setSort] = useState('up');
  const [tableItems, setTableItems] = useState(items);

  const onSort = (sortField) => {
    const copyTableItems = tableItems.concat();
    const sortType = sort === 'up' ? 'down' : 'up';
    const sortedTableItems = copyTableItems.sort((a, b) => {
      return sortType === 'up' ? a[sortField] - b[sortField] : b[sortField] - a[sortField];
    });
    setSort(sortType);
    setTableItems(sortedTableItems);
    console.table(sortedTableItems);
  };

  return (
    <div className="container">
      {console.log(tableItems)}

      <Table tableItems={tableItems} onSort={onSort} />
    </div>
  );
};

export default App;

// a[sortField] > b[sortField]? 1 : -1;

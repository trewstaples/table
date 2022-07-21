import { tableItems } from './mock/mock';
// import Spinner from './components/spinner/spinner';
import { Table } from './components/table';

function App() {
  return (
    <div className="container">
      {console.log(tableItems)}

      <Table />
    </div>
  );
}

export default App;

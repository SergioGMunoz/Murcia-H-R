import './App.css'
import List from './components/List/List.jsx'
import { NavBar } from './components/navbar/navbar.jsx'
import Pagination from './components/List/Pagination.jsx'
import {fetchData} from './hooks/useData.js';

function App() {
  fetchData('hotel');
  return (
    <>
    {console.log('HOTELS LENGTH')}
     <NavBar/>
     <main>
      {/* <List elements={hotels}/> */}
      <Pagination
        currentPage={2}
        totalPages={7}
        onNext={console.log('Next')}
        onPrevious={console.log('Previous')}
      />
     </main>

    </>
  )
}

export default App

import './App.css'
import List from './modules/List.jsx'
import { NavBar } from './modules/navbar/navbar.jsx'
import Pagination from './modules/Pagination.jsx'
import {getData} from './hooks/useData.js';

function App() {
  getData('hotel');
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

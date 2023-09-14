import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {
 

  return (
    <>
       <Header></Header>
       <div className='w-2/3'>
         <Courses></Courses>
       </div>
    </>
  )
}

export default App

import React from 'react'
import { useSelector } from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Home() {
    const hi = useSelector(state => state.users)
    console.log(hi)
  return (
    <>
    <div className='App'>
    <h1> student name</h1>
    <table className='table'>
        <tr className='table-dark'>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
        </tr>
    </table>
    </div>
       
    </>
  )
}

export default Home
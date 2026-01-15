import { useState } from 'react'
import './App.css'
import * as XLSX from "xlsx"

function App() {
  const array = [
    {
      name : "somehssj",
      id :1,
      class: "sevev"
    },
    {
      name : "somehssj",
      id :2,
      class: "ddgftrhyt"
    },
    {
      name : "erefrf",
      id :3,
      class: "seregrevev"
    },
    {
      name : "erfrmre",
      id :4,
      class: "frfy6v"
    },
  ]

  const handleExport = () => {
    console.log(array);
    var wb = XLSX.utils.book_new();
    let ws =XLSX.utils.json_to_sheet(array);
    XLSX.utils.book_append_sheet(wb , ws , "mySheet1")
    XLSX.writeFile(wb , "myExcel.xlsx")
  }

  return (
    <>
    <div className='w-[400px] h-[300px] border-3 '> 
      <table className='border-collapse border'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {
            array.map((item )=>(
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{item.class}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <button className='bg-blue-600 py-3 px-1 rounded' onClick={handleExport}>Export</button>
    </div>
    </>
  )
}

export default App

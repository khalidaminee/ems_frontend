import React from 'react'
import Table from 'react-bootstrap/table'

function BootstrapDataTables() {
    const tableData = [
        {id:1, name:'M Khalid', age: 30, location: 'Kabul'},
        {id:2, name:'Ahamad', age: 22, location: 'Wardak'},
        {id:3, name:'Nawee', age: 40, location: 'Ghazni'},
        {id:4, name:'Ahsanullah', age: 25, location: 'Logar'},
    ]
  return (
    <div className='text-center'>
        <h1>Bootsrap DataTable</h1>
        <div>
            <Table striped hover bordered size='sm' variant='dark' responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>َAge</th>
                    <th>َLocation</th>
                  </tr>
                </thead>
                <tbody>
                    {tableData.map( ( data ) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.location}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
        <h2>Striped Column</h2>
        <div>
            <Table striped='columns' responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>َAge</th>
                    <th>َLocation</th>
                  </tr>
                </thead>
                <tbody>
                    {tableData.map( ( data ) => (
                        data.age === 25 ?
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.location}</td>
                        </tr> 
                        : null
                    ))}
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default BootstrapDataTables

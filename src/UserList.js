import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap"

const UserList = ({users}) => {
  return (

    <div className='tableheader'>
    <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th style={{width:'7%'}}>Id</th>
                <th style={{width:'16.66%'}}>Name</th>
                <th style={{width:'16.66%'}}>Username</th>
                <th style={{width:'16.66%'}}>Email</th>
                <th style={{width:'16.66%'}}>Website</th>
                <th style={{width:'26.32%'}}>Address</th>
            </tr>
        </thead>
    </Table>
   {users.map((user) => (
       <div> 
            <Table className='tablebody'>
                <tbody>
                    <tr>
                        <td style={{width:'7%', backgroundColor:'brown'}}>{user.id}</td>
                        <td style={{width:'16.66%'}}>{user.name}</td>
                        <td style={{width:'16.66%' }}>{user.username}</td>
                        <td style={{width:'16.66%'}}>{user.email}</td>
                        <td style={{width:'16.66%'}}>{user.website}</td>
                        <td style={{width:'26.32%'}}>{user.address.street}, {user.address.city} </td>
                    </tr>  
                </tbody>
            </Table>
        </div> 
       
   ))}

</div>

  
  )
}

export default UserList
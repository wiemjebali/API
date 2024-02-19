import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
const UserList = () => {
const [Users,setUsers] = useState([]);
useEffect(()=>{
axios
.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>setUsers(response.data))
.catch((error)=>(console.error(error)))

},[]);


console.log(Users);

  return (
    <div>{
        Users.map((Users)=>(
      <Card Key={Users.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
))}</div>

  )
}

export default UserList

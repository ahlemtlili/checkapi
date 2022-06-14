import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import  UserList  from './UserList';

function App() {

  const [listOFUsers, setlistOFUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const getusers =async()=> {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setlistOFUsers(response.data);
      console.log(response.data)
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
      console.log("component app did mount or state query updated")
    getusers()
  }, [])

  return (
    <div className="App">
      <div className='header'>
        <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/users5.png" alt="users" />
        <h1>The Users are :</h1>
      </div>
      {loading?<h1>loading ...</h1>: <UserList users={listOFUsers}/>}
    </div>
  );
}

export default App;

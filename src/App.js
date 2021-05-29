import Navbar from "./Navbar";
import Post from "./Post";
import React from 'react';
import axios from "axios"

function App() {
  const [data,setdata] = React.useState(null)
    React.useEffect(()=>{
      const functionCall = async()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setdata(response.data)
      }
      functionCall()
        
    },[])
  const handleCreatePost = async(e)=>{
    const callApi = await axios.post("https://jsonplaceholder.typicode.com/posts",e)

    const newData = callApi.data
    const total = [...data,newData]
    const reverse = total.reverse()
    setdata(reverse)
} 
const handleDeletePost = async(e)=>{
  
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const filterData = response.data.filter(function( obj ) {
    return obj.id !== e;
  });
  setdata(filterData)
 
}
  return (
    <div className="App">
      <Navbar handleCreatePost={handleCreatePost} />
      <Post handleDeletePost={handleDeletePost} data={data} />
    </div>
  );
}

export default App;

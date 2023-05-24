import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useSWR from "swr"

const Post = () => {
  
    const [users, setUsers] = useState(null);
     const [posts, updatePosts] = useState(null);

    //fetch 
    // useEffect(() => {
        
    //     const fetchdata = async () => {
    //         const res = await fetch(
    //           "https://jsonplaceholder.typicode.com/todos/"
    //         ) 
    //         const data = await res.json();
    //          updatePosts(data);
            
    //         //return data;
    //     };

    //     fetchdata();
    //     //console.log(fetchdata);

    //     console.log(posts)

    // }, []);

// axious

// useEffect(() => {
//     const fetchdata = async () => {
//     const res = await axios.get(
//         "https://jsonplaceholder.typicode.com/todos/"
//     );
//     updatePosts(res.data);

//     //return data;
//     };

//     fetchdata();
//     //console.log(fetchdata);

//     console.log(posts);
// }, []);


// const getApiData = async () => {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/todos/"
//   ).then((response) => response.json());

//   // update the state
//   setUsers(response);
// };
    
//    useEffect(() => {
//      getApiData();
//    }, []); 




// swr 

    const fetchdata = async (...args) => { 
        const res = await fetch(...args);
        const data = await res.json();
        return data;
    }

    const { data, error } = useSWR("https://jsonplaceholder.typicode.com/todos/", fetchdata, {
        suspense:true,
    });
    console.log(data)

    if(error) return <h2>There was an error</h2>


  return (
    <div className="app">
      {
        data.map((post) => (
          <div className="item-container" key={post.id}>
            Id:{post.id} <div className="title">Title:{post.title}</div>
          </div>
        ))}
    </div>
  );
}

export default Post

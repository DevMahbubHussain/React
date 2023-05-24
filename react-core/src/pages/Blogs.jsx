import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { blogsData } from '../BlogData';

export default function Blogs() {
    const { title } = useParams();
    const location = useLocation();
    console.log(location);
    // const [bodyData, setBodyData ] = useState('');

    // useEffect(() => {
    //     const blogData = blogsData.filter((blog) => blog.title === title);
    //     setBodyData(blogData[0].body);
    // }, []);
    

  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body.slice(0, 300)}</p>
      <p>{location.state.body.slice(301, 800)}</p>
    </div>
  );
}

import React, { useState } from 'react'
import { blogsData } from "../BlogData";
import { Link } from 'react-router-dom';

export default function Blog() {
  const [blogs, setBlogData] = useState(blogsData);
  console.log(blogs);
  const readMore = (str,num) => {
    if (str.length > num)  return str.slice(0, num);
    else return str;
  };
  return (
    <div>
      <h2>Blog Pssts</h2>
      <section>
        {blogs.map((blog) => {
          const {id, title, body} = blog;
          return <article key={id}>
            <h3>{title}</h3>
            <p>{readMore(body, 100)}</p>
            <Link to={title} state={ {id,title,body}}>Read More</Link>
          </article>
        })}
      </section>
          
    </div>
  )
}

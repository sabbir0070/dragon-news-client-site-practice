import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Left = () => {
const [categories, setCategories] = useState([]);
// console.log(categories)
useEffect(()=>{
fetch(`http://localhost:5000/categories`)
.then(res=>res.json())
.then(data=>setCategories(data))
.catch(error=>console.log(error))

},[])
  return (
    <div className='ps-4'>
      <h2>All Category</h2>
{
categories.map(category=> <p key={category.id}
  > 
<Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link> 
</p> )
}
    </div>
  );
};

export default Left;
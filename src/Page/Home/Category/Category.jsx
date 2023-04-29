import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';
import EditorsInsight from '../../News/EditorsInsight/EditorsInsight';

const Category = () => {
const {id} = useParams();
const categoryNews = useLoaderData();
// console.log(categoryNews)

  return (
    <div>
     { id&& <h2>This Category News {categoryNews.length}</h2>}
{
categoryNews.map(news => <NewsCard key={news._id}
news ={news}
></NewsCard>)
}   

 </div>
  );
};

export default Category;
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';

const News = () => {
const {loading} = useContext(AuthContext);
if(loading){
return <div>loading.....</div>
}
const news = useLoaderData();
const {_id,category_id, image_url, title, details,} = news;
  return (
    <div>
      <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
       <Link to={`/category/${category_id}`} > <Button variant="danger"> <FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
      </Card.Body>
    </Card>
<EditorsInsight></EditorsInsight>
    </div>
  );
};

export default News;
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating';


const NewsCard = ({ news }) => {
  // console.log(news)
  const { _id, rating, author, total_view, thumbnail_url, image_url, title, details, } = news;

  return (
    <div className='mb-4'>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center" >
          <div className='d-flex align-items-center gap-3'>
            <Image src={author.img} style={{ width: '60px', height: '60px' }} className='' roundedCircle />
            <div className='text-secondary'>
              <h4> {author.name}</h4>
              <p>{moment(author?.published_date).format("YYYY-MM-D")}</p>
            </div>
          </div>
          <div className='text-secondary'>
            <FaShareAlt className='me-2'></FaShareAlt>
            <FaBookmark></FaBookmark>
          </div>
        </Card.Header>

        <Card.Body className='text-center' >
          <Card.Title>{title} </Card.Title>
          <Card.Img variant="top" src={image_url} alt='pic nai' />

          <Card.Text>
            {details.length < 250 ? <> {details} </> : <>{details.slice(0, 250)}....<Link to={`/news/${_id}`} >See more</Link> </>}
          </Card.Text>

        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <div>
<Rating className='fs-4'
 placeholderRating={rating.number}
 readonly
  emptySymbol={ <FaRegStar/> }
  placeholderSymbol={<FaStar className='text-warning'/>}
  fullSymbol={<FaStar className='text-danger'/>}
/>
<span className='fs-5 ms-2'>{rating.number}</span>
</div>
<div>
<FaEye className='me-2 fs-3'></FaEye>
<span className='fs-6'>{total_view}</span>
</div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
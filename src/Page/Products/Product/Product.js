import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import './product.css';

const Product = ({ product, setCurrentId }) => {
  const dispatch = useDispatch();
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };

  return (
    <Card
      className={`card ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleExpand}
      onMouseLeave={handleCollapse}
      onClick={handleExpand}
    >
      {product.selectedFile && (
        <CardMedia
          component="img"
          src={product.selectedFile}
          alt="Product"
          title={product.company}
          className="product-image"
        />
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" className="product-name">
          {isExpanded ? product.name : truncateText(product.name, 20)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className="product-description">
          {isExpanded ? product.description : truncateText(product.description, 80)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className="product-company">
          {product.company}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;

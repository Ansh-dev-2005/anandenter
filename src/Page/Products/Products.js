import React from 'react'
import Header from '../../container/Header/Header'
import Footer from '../../container/Footer/Footer'
import ImageGallery from 'react-image-gallery'
import './products.css'

const Products = () => {
  const brands = [
    {
      name: "Havells",
      products: [
        {
          name: "Celling Fan",
          images: [
            {
              original: "https://images.freeimages.com/images/previews/dc9/pennybacker-bridge-1636714.jpg",
              thumbnail: "https://images.freeimages.com/images/previews/dc9/pennybacker-bridge-1636714.jpg"
            },
            {
              original: "https://example.com/image2.jpg",
              thumbnail: "https://example.com/thumb2.jpg"
            },
            {
              original: "https://example.com/image3.jpg",
              thumbnail: "https://example.com/thumb3.jpg"
            }
          ]
        },
        {
          name: "Product 1B",
          images: [
            {
              original: "https://example.com/image4.jpg",
              thumbnail: "https://example.com/thumb4.jpg"
            },
            {
              original: "https://example.com/image5.jpg",
              thumbnail: "https://example.com/thumb5.jpg"
            },
            {
              original: "https://example.com/image6.jpg",
              thumbnail: "https://example.com/thumb6.jpg"
            }
          ]
        },
        {
          name: "Product 1C",
          images: [
            {
              original: "https://example.com/image7.jpg",
              thumbnail: "https://example.com/thumb7.jpg"
            },
            {
              original: "https://example.com/image8.jpg",
              thumbnail: "https://example.com/thumb8.jpg"
            },
            {
              original: "https://example.com/image9.jpg",
              thumbnail: "https://example.com/thumb9.jpg"
            }
          ]
        }
      ]
    },
    // ...similar data for other brands...
  ];

  const renderProduct = (product) => {
    return (
      <div className="product-container">
        <h3>{product.name}</h3>
        <ImageGallery items={product.images} />
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className="products-container">
        <h1>Our Products</h1>
        <ul className="brand-list">
          {brands.map((brand, index) => (
            <li key={index}>
              <h2>{brand.name}</h2>
              <ul className="product-list">
                {brand.products.map((product, index) => (
                  <li key={index}>
                    {renderProduct(product)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default Products

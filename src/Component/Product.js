import React from "react";
import "../Component/Product.css";
import { addToCart } from "./Redux/Slice";
import { useDispatch } from "react-redux";
export const Product = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      image:
        "https://www.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2023/6/1/house-middleclass.jpg.transform/845x440/image.jpg",
      name: "@2BHK House",
      description:
        "Description of the product goes here. It can span multiple lines.",
      price: 19999.99,
      quantity: 1,
    },

    {
      id: 2,
      image:
        "https://www.bhg.com/thmb/3Vf9GXp3T-adDlU6tKpTbb-AEyE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
      name: "@2BHK House",
      description:
        "Description of the product goes here. It can span multiple lines.",
      price: 19999.99,
      quantity: 1,
    },
    {
      id: 3,
      image:
        "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Types%20Of%20Homes/Stock-Gray-Ranch-Style-Home-AdobeStock_279953994-copy.jpeg",
      name: "@2BHK House",
      description:
        "Description of the product goes here. It can span multiple lines.",
      price: 19999.99,
      quantity: 1,
    },
    {
      id: 4,
      image:
        "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/11/most-unique-houses-in-the-world%20(1)_0_1200.jpg",
      name: "@2BHK House",
      description:
        "Description of the product goes here. It can span multiple lines.",
      price: 19999.99,
      quantity: 1,
    },

    {
      id: 5,
      image:
        "https://www.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2023/6/1/house-middleclass.jpg.transform/845x440/image.jpg",
      name: "@2BHK House",
      description:
        "Description of the product goes here. It can span multiple lines.",
      price: 19999.99,
      quantity: 1,
    },

    {
      id: 6,
      image:
        "https://www.bhg.com/thmb/3Vf9GXp3T-adDlU6tKpTbb-AEyE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
      name: "@2BHK House",
      description:
        "Description of the product goes here. It can span multiple lines.",
      price: 19999.99,
      quantity:1
    },
    {
      id: 7,
      image:
        "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Types%20Of%20Homes/Stock-Gray-Ranch-Style-Home-AdobeStock_279953994-copy.jpeg",
      name: "@2BHK House",
      description:
        "Description of the product goes here. It can span multiple lines.",
      price: 19999.99,
      quantity: 1,
    },
    {
      id: 8,
      image:
        "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/11/most-unique-houses-in-the-world%20(1)_0_1200.jpg",
      name: "@2BHK House",
      description:
        "Description of the product goes here. It can span multiple lines.",
      price: 19999.99,
      quantity: 1,
    },
    {
      id: 9,
      image:
        "https://www.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2023/6/1/house-middleclass.jpg.transform/845x440/image.jpg",
      name: "@2BHK House",
      description:
        "Description of the product goes here. It can span multiple lines.",
      price: 19999.99,
      quantity: 1,
    },

    {
      id: 10,
      image:
        "https://www.bhg.com/thmb/3Vf9GXp3T-adDlU6tKpTbb-AEyE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
      name: "@2BHK House",
      description:
        "Description of the product goes here. It can span multiple lines.",
      price: 19999.99,
      quantity: 1,
    },
    {
      id: 11,
      image:
        "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Types%20Of%20Homes/Stock-Gray-Ranch-Style-Home-AdobeStock_279953994-copy.jpeg",
      name: "@2BHK House",
      description:
        "Description of the product goes here. It can span multiple lines.",
      price: 19999.99,
      quantity: 1,
    },
    {
      id: 12,
      image:
        "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/11/most-unique-houses-in-the-world%20(1)_0_1200.jpg",
      name: "@2BHK House",
      description:
        "Description of the product goes here. It can span multiple lines.",
      price: 19999.99,
      quantity: 1,
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-container">
      {products.map((item, index) => (
        <div className="product-card" key={index}>
          <img src={item.image} alt="Product Image" />
          <div className="product-details">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>Price: ${item.price}</p>
              <button
                className="Addtocart"
                onClick={() => handleAddToCart(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

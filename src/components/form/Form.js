import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { createProduct } from "../../action/products";
import Header from "../../container/Header/Header";
import products from "../../reducers/products";

const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productsData));
    console.log(productsData);
  };
  const [productsData, setProductData] = useState({
    company: "",
    name: "",
    description: "",
  selectedFile: "",
  });
  return (
    <div>
      <div>form</div>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input
            type="text"
            name="name"
            value={productsData.company}
            onChange={(e) =>
              setProductData({ ...productsData, company: e.target.value })
            }
          />
        </label>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={productsData.name}
            onChange={(e) =>
              setProductData({ ...productsData, name: e.target.value })
            }
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="pdescription"
            value={productsData.description}
            onChange={(e) =>
              setProductData({
                ...productsData,
                description: e.target.value,
              })
            }
          />
        </label>
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setProductData({ ...productsData, selectedFile: base64 })
            }
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;

import React, { useState } from "react";
import Item from "./Item";

const PRODUCT_LIST = [
  {
    id: 1,
    name: "iPhone 13",
    price: 30000000,
    isNew: true,
    image: "https://via.placeholder.com/800x600",
  },
  {
    id: 2,
    name: "iPhone 13 Mini",
    price: 25000000,
    isNew: false,
    image: "https://via.placeholder.com/800x600",
  },
  {
    id: 3,
    name: "iPhone 13 Pro",
    price: 35000000,
    isNew: true,
    image: "https://via.placeholder.com/800x600",
  },
  {
    id: 4,
    name: "iPhone 13 Pro Max",
    price: 40000000,
    isNew: false,
    image: "https://via.placeholder.com/800x600",
  },
  {
    id: 5,
    name: "iPad mini 6",
    price: 15000000,
    isNew: false,
    image: "https://via.placeholder.com/800x600",
  },
];

function List(props) {
  const [productList, setProductList] = useState(PRODUCT_LIST);
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    comment: '',
    isNew: false,
  });

  const handleAddProduct = () => {
    const newProduct = {
      id: Math.random(),
      name: form.name,
      price: parseInt(form.price),
      isNew: form.isNew,
      image: "https://via.placeholder.com/800x600",
    };
    const newProductList = [...productList, newProduct];
    setProductList(newProductList);
    setForm({
      name: '',
      price: '',
      description: '',
      comment: '',
      isNew: false,
    })
  };

  const renderProductList = () => {
    return productList.map((item, index) => (
      <Item
        key={item.id}
        name={item.name}
        price={item.price}
        isNew={item.isNew}
        image={item.image}
      />
    ));
  };

  return (
    <div>
      <div className="list">{renderProductList()}</div>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setForm({
            ...form,
            name: e.target.value
          })}
          value={form.name}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setForm({
            ...form,
            price: e.target.value
          })}
          value={form.price}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setForm({
            ...form,
            description: e.target.value
          })}
          value={form.description}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Comment"
          onChange={(e) => setForm({
            ...form,
            comment: e.target.value
          })}
          value={form.comment}
        />
      </div>
      <div>
        <input
          type="checkbox"
          onChange={(e) => setForm({
            ...form,
            isNew: e.target.checked
          })}
          checked={form.isNew}
        />New
      </div>
      <button onClick={handleAddProduct}>Add</button>
    </div>
  );
}

export default List;

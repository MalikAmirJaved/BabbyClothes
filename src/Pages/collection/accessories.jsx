import React, { useState } from "react";
import Navbar from "./addressNav"; // Import the reusable Navbar
import Item1 from "../../Images/Accessories/cable_texture_sweater_1_1200x450_crop_center.jpg"; // Your current image
import Item2 from "../../Images/Accessories/1.jpg"; // Item Image 1
import Item3 from "../../Images/Accessories/2.jpg"; // Item Image 2
import Item4 from "../../Images/Accessories/3.jpg"; // Item Image 3
import Item5 from "../../Images/Accessories/4.jpg"; // Item Image 4
import Item6 from "../../Images/Accessories/5.jpg"; // Item Image 5
import Item7 from "../../Images/Accessories/6.jpg"; // Item Image 6
import Item8 from "../../Images/Accessories/7.jpg"; // Item Image 7
import Item9 from "../../Images/Accessories/8.jpg"; // Item Image 8

const Accessories = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  const items = [
    { id: 1, name: "Cable Texture Sweater", price: "$33.00 - $40.00", image: Item9 },
    { id: 2, name: "Contrast Dress", price: "$45.00", image: Item2 },
    { id: 3, name: "Double Breasted Coat", price: "$59.00", image: Item3 },
    { id: 4, name: "Embroidered Shirt", price: "$39.00", image: Item4 },
    { id: 5, name: "Jacquard Dress", price: "$50.00 - $59.00", image: Item5 },
    { id: 6, name: "Knit Cardigan With Pockets", price: "$30.00 - $35.00", image: Item6 },
    { id: 7, name: "Lined Jogging Trousers", price: "$20.00", image: Item7 },
    { id: 8, name: "Jeans", price: "$27.00", image: Item8 }
  ];

  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);

      if (itemIndex === -1) {
        updatedCart.push({ ...item, quantity: 1 });
      } else {
        updatedCart[itemIndex].quantity += 1;
      }

      return updatedCart;
    });

    setModalItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Accessories Page Content */}
      <div className="w-2/3 mx-auto my-6">
        {/* Image Section */}
        <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col items-center">
          <img
            src={Item1}
            alt="Accessories"
            className="w-1/2 h-auto object-cover rounded-lg"
          />
          <h2 className="text-3xl font-bold mt-4 text-center">Accessories</h2>
        </div>
      </div>

      {/* Filter/Category buttons (optional) */}
      <div className="px-2 md:px-9">
        <div className="flex space-x-4 mb-6 overflow-x-auto">
          <button className="bg-black text-white py-2 px-4 rounded">All</button>
          <button className="bg-gray-200 py-2 px-4 rounded">Baby Boy</button>
          <button className="bg-gray-200 py-2 px-4 rounded">Baby Girl</button>
          <button className="bg-gray-200 py-2 px-4 rounded">Kid Boy</button>
          <button className="bg-gray-200 py-2 px-4 rounded">Kid Girl</button>
          <button className="bg-gray-200 py-2 px-4 rounded">Toddler Girl</button>
        </div>

        {/* Sort/Filter Bar */}
        <div className="flex flex-col space-y-y-3 md:flex-row justify-between items-center mb-6 ">
          <div className="flex items-center space-x-4">
            <label className="font-semibold">Sort by:</label>
            <select className="bg-gray-100 p-2 rounded-lg">
              <option>Featured</option>
              <option>Best Selling</option>
              <option>Name: A – Z</option>
              <option>Name: Z – A</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Oldest to Newest</option>
              <option>Newest to Oldest</option>
            </select>
          </div>
          <span className="text-sm text-gray-500">{items.length} items</span>
        </div>

        {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative border p-4 rounded-lg shadow-sm hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.price}</p>

            {/* Hover Effects */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-gray-400/20 bg-opacity-50 transition-all duration-200">
              <button
                className="bg-black text-white py-2 px-4 rounded-full"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
              <div className="flex space-x-2 ml-4">
                <button className="text-white">
                  <i className="fas fa-search"></i> {/* Zoom Icon */}
                </button>
                <button className="text-white">
                  <i className="fas fa-heart"></i> {/* Heart Icon */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Modal */}
      {showModal && modalItem && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold">Product successfully added to your shopping cart</h3>
            <img src={modalItem.image} alt={modalItem.name} className="w-full h-auto mt-4 rounded-lg" />
            <h4 className="mt-2 text-lg font-semibold">{modalItem.name}</h4>
            <p className="text-sm">{modalItem.price}</p>
            <p className="text-sm">Quantity: 1</p>
            <p className="text-sm">Total: {modalItem.price}</p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-200 py-2 px-4 rounded"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => alert("Redirect to Cart")}
                className="bg-black text-white py-2 px-4 rounded"
              >
                Go to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Accessories;
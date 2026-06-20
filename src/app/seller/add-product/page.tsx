"use client";

import { useState } from "react";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price: Number(price),
        category,
        description,
      }),
    });

    const data = await response.json();

    console.log(data);
    alert("Product Added Successfully");
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Add Product
      </h1>

      <input
        className="border p-3 w-full mb-3 rounded"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-3 w-full mb-3 rounded"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        className="border p-3 w-full mb-3 rounded"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <textarea
        className="border p-3 w-full mb-3 rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-orange-500 text-white px-6 py-3 rounded"
      >
        Save Product
      </button>
    </div>
  );
}
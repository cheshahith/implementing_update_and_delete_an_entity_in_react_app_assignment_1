import React, { useState, useEffect } from "react";

const UpdateItem = () => {
  const [item, setItem] = useState(null); // State to store the item
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setItem({ id: 1, name: "Sample Item" }); // Example item
      setLoading(false);
    }, 2000); // Simulating 2 seconds delay
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Update Item</h1>
        <p>Loading item...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Update Item</h1>
      <p>Item Name: {item.name}</p>
      {/* Add input fields here for updating the item */}
    </div>
  );
};

export default UpdateItem;
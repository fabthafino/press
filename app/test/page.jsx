// this is in the components folder its named Switch
"use client";
import React, { useState } from 'react';

const Switch = () => {
 const [showFirst, setShowFirst] = useState(true);

  const handleToggle = () => setShowFirst((change) => !change);

  return (
      <div className="w-full max-w-md rounded-2xl bg-teal-700 shadow p-6 text-center mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Click on the Button to see the transiton.</h1>

        <p className="text-lg mb-6" >
          {showFirst ? " Hello, It's Muhammad." : "This is really Awesome."}
        </p>

        <button
          onClick={handleToggle}
          className="px-4 py-2 rounded-2xl shadow hover:shadow-md hover:bg-teal-950 transition border border-gray-200"
        >
          Switch Message
        </button>
      </div>
    
  );
}

export default Switch
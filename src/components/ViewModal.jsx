// components/Modal.js
import React from 'react';

const ViewModal= ({ isOpen, onClose, title, description, createdAt ,data}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6">
        <div className="flex flex-col">
          <div className="mb-4">
            <h2 className="text-xl font-bold">{data.title}</h2>
            <p className="mt-2 text-gray-600">{data.description}</p>
            <p className="mt-2 text-gray-500 text-sm">Created at: {data.createdAt}</p>
          </div>
          <button 
            onClick={onClose} 
            className="self-end bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;


import React from 'react';

const clientsData = [
  { id: 1, name: 'Celebrity A', industry: 'Music', image: 'path_to_image_a.jpg' },
  { id: 2, name: 'Celebrity B', industry: 'Football', image: 'path_to_image_b.jpg' },
  { id: 3, name: 'Celebrity C', industry: 'Acting', image: 'path_to_image_c.jpg' },
  { id: 4, name: 'Celebrity D', industry: 'Tennis', image: 'path_to_image_d.jpg' },
  // Add more clients as needed
];

const Clients = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 text-center">Our Clients</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {clientsData.map(client => (
          <div key={client.id} className="relative group overflow-hidden rounded shadow-lg">
            <img
              src={client.image}
              alt={client.name}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
              <div className="text-center text-white p-4">
                <h2 className="text-lg font-bold">{client.name}</h2>
                <p className="text-sm">{client.industry}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;

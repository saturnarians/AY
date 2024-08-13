import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CelebrityNews = () => {
  const [celebrities, setCelebrities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCelebrities = async () => {
      const celebrityNames = ['Tom Cruise', 'Angelina Jolie', 'Brad Pitt', 'Beyoncé', 'Leonardo DiCaprio'];
      const requests = celebrityNames.map(name =>
        axios.get('https://api.api-ninjas.com/v1/celebrity', {
          headers: { 'X-Api-Key': import.meta.env.REACT_APP_CELEBRITY_API_KEY},
          params: { name },
        })
        
      );

      try {
        const responses = await Promise.all(requests);
        const celebrityData = responses.map(response => response.data[0]);
        setCelebrities(celebrityData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch celebrity data');
        setLoading(false);
      }
    };

    fetchCelebrities();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Celebrity Information</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {celebrities.map((celebrity, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="font-bold text-lg mb-2">{celebrity.name}</h2>
            <p className="text-sm text-gray-600 mb-4">Net Worth: ${celebrity.net_worth}</p>
            <p className="text-sm text-gray-600 mb-4">Occupation: {celebrity.occupation}</p>
            <p className="text-sm text-gray-600">Nationality: {celebrity.nationality}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CelebrityNews;

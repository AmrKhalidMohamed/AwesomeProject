import  { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'https://7e5f-154-178-181-57.ngrok-free.app'; 

const useFetch = (endPoint) => {
  const [data, setData] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    url: `https://1166-45-242-122-1.ngrok-free.app`,
    method: 'get',
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      if (endPoint == `rooms/1/images`||endPoint == `images`){
        setData(response.data);
      }else{
        setData(response.data.data);
      } 
    } catch (error) {
      setError(error);
      alert('There was an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { data, isLoading, error };
};

export default useFetch;

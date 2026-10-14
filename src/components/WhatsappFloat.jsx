import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import api from '../utils/api';

const WhatsappFloat = () => {
  const [number, setNumber] = useState('');

  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const res = await api.get('/settings/whatsapp');
        setNumber(res.data.whatsappNumber);
      } catch (error) {
        console.error('Error fetching WhatsApp number:', error);
      }
    };
    fetchNumber();
  }, []);

  if (!number) return null;

  const whatsappUrl = `https://wa.me/${number}?text=Hello!%20I%20want%20to%20know%20more%20about%20the%20gym.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 flex items-center justify-center text-3xl animate-bounce"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappFloat;
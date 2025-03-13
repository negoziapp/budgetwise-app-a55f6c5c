
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Redirect to Index page which now has the landing page implementation
const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/', { replace: true });
  }, [navigate]);

  return null;
};

export default LandingPage;

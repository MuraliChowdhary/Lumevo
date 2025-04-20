import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Extend the Window interface to include trackConversion
 declare global {
  interface Window {
    trackConversion?: (event: string, data: Record<string, any>) => void;
  }
}

function TrackingInitializer() {
  const location = useLocation();
  
  useEffect(() => {
    // Check if tracking ID exists in URL
    const urlParams = new URLSearchParams(window.location.search);
    const trackingId = urlParams.get('utm_tracking_id');
    
    if (trackingId) {
      localStorage.setItem('utm_tracking_id', trackingId);
    }
    if (window.trackConversion) {
    // Track page view on each route change
    if (window.trackConversion) {
      window.trackConversion('page_view', { 
        path: location.pathname
      });
    }
  }
  }, [location.pathname]);
  
  return null;
}

export default TrackingInitializer;
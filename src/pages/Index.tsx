
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to the main portfolio HTML file
    window.location.href = '/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-xl">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default Index;

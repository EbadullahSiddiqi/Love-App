import Home from "./components/Home";
import React, { useEffect } from "react";

function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="text-center">
            <img
              src="/cat3.png"
              alt="Loading..."
              className="w-32 h-32 animate-bounce mx-auto"
            />
            <p className="mt-4 text-lg font-semibold text-gray-600">
              Loading, please wait...
            </p>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;

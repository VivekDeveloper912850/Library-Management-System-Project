
{/*}

const Home = () => {
    return (
      <div className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?library,books')" }}>
        
        <div className="bg-black bg-opacity-60 p-10 rounded-lg text-white text-center">
          <h2 className="text-4xl font-bold">Welcome to Library Management System</h2>
          <p className="mt-4">Easily manage books, borrow, and return with our digital library system.</p>
          <a href="/register" className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded">
            Get Started
          </a>
        </div>
      </div>
    );
  };
  
  export default Home;
  */}
{/*
  import { Link } from "react-router-dom";
  
const Home = () => {
  return (
    <div
      className="relative h-screen flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: "url('/library-bg.jpg')" }}
    >
      {/* Overlay 
       {/* <div className="absolute inset-0 bg-white bg-opacity-20"></div>  */}
      
      {/* Content 
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h2 className="text-5xl font-extrabold drop-shadow-lg">Welcome to Library Management System</h2>
        <p className="mt-4 text-lg max-w-2xl">
          Manage books effortlessly with our digital library system. Borrow, return, and track books with ease.
        </p>
        <Link to="/register" className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-700 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition-all">
          Get Started
        </Link>
      </div>

      {/* Footer 
      <footer className="relative bg-blue-900 text-white text-center py-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Library Management System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
*/}
{/*
const Home = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/library-bg.jpg')",
      }}
    >
      {/* Dark overlay for better contrast
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Box 
      <div className="relative z-10 text-white text-center px-6 md:px-12">
        <h2 className="text-5xl font-bold drop-shadow-lg">Welcome to Library Management System</h2>
        <p className="mt-4 text-lg text-gray-300">
          Manage books effortlessly with our digital library system. Borrow, return, and track books with ease.
        </p>

        {/* Get Started Button 
        <a
          href="/register"
          className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 ease-in-out shadow-md"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
*/}


const Home = () => {
  return (
    <div className="relative h-screen flex flex-col justify-between bg-cover bg-center" style={{
        backgroundImage: "url('/library-bg.jpg')",
      }}>
      {/* Dark overlay for better contrast */}
       <div className="absolute inset-0 bg-black bg-opacity-60"></div> 

      {/* Content Box */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-6 md:px-12 flex-grow">
        <h2 className="text-6xl font-extrabold drop-shadow-lg mb-4">Welcome to Library Management System</h2>
        <p className="text-xl text-gray-300 max-w-2xl">
          Manage books effortlessly with our digital library system. Borrow, return, and track books with ease.
        </p>

        {/* Get Started Button */}
        <a
          href="/register"
          className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-10 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-lg"
        >
          Get Started
        </a>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-gray-300 text-center py-4">
        <p>&copy; 2024 Library Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

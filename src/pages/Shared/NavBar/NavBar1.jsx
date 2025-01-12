import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const NavBar1 = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  // const [dropdownOpen, setDropdownOpen] = useState(false); // To control the dropdown visibility
  // const [clickCount, setClickCount] = useState(0); // Counter to track button clicks
  const navigate = useNavigate(); // Hook to navigate to another route

  const handleOrderFoodClick = () => {
    // const newClickCount = clickCount + 1; // Increment click count
    // setClickCount(newClickCount);

    // if (newClickCount % 3 === 1) {
    //   // First click (1st, 4th, 7th, etc.): Navigate to the link
    //   setDropdownOpen(false); // Ensure the dropdown is closed
    navigate("order/salad");
    // } else if (newClickCount % 3 === 2) {
    //   // Second click (2nd, 5th, 8th, etc.): Show the dropdown
    //   setDropdownOpen(true);
    // } else if (newClickCount % 3 === 0) {
    //   // Third click (3rd, 6th, 9th, etc.): Close the dropdown
    //   setDropdownOpen(false);
    // }
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <Link to="/" className="text-white">
          Home
        </Link>
      </li>
      <li>
        <Link to="/menu">Our menu</Link>
      </li>
      <li className="relative group">
        <button tabIndex={0} onClick={handleOrderFoodClick}>
          Order Food
        </button>
        {/* {dropdownOpen && ( */}
        <ul className="absolute mt-2 w-48 bg-gray-700 rounded-md transform translate-y-[-14] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          <li>
            <Link to="/service1" className="block px-4 py-2 text-white">
              Service 1
            </Link>
          </li>
          <li>
            <Link to="/service2" className="block   px-4 py-2 text-white">
              Service 2
            </Link>
          </li>
          <li>
            <Link to="/service3" className="block px-4 py-2 text-white">
              Service 3
            </Link>
          </li>
        </ul>
        {/* )} */}
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="flex mt-1">
            <FaShoppingCart />
            <div className="badge badge-secondary -mt-2">+{cart.length}</div>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-gray-800 p-4 navbar fixed bg-opacity-30 z-10 max-w-screen-xl text-white">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl">daisyUI</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex space-x-4">{navLinks}</ul>
      </div>
      <div className="navbar-end flex gap-5">
        {user ? (
          <>
            <span>{user?.displayName}</span>

            <button onClick={handleLogOut} className="btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <button>
              <Link to="/login" className="btn">
                Login
              </Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar1;

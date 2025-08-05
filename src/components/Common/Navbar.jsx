import { useEffect, useState } from "react";
import { apiConnector } from "../../services/apiConnector";
import { courseEndpoints } from "../../services/apis";
import { Link } from "react-router-dom";

function Navbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiConnector("GET", courseEndpoints.COURSE_CATEGORIES_API);
        setCategories(data.data);
      } catch (error) {
        console.error("Could not fetch Categories.", error);
      }
    })();
  }, []);

  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <img
            src="../assets/Logo/Logo-Full-Light.png" // Relative path from Navbar.jsx
            alt="Logo"
            width={160}
            height={32}
            loading="lazy"
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            <li>
              <Link to="/">
                <p className="text-yellow-25">Home</p>
              </Link>
            </li>
            <li>
              <div className="group relative flex cursor-pointer items-center gap-1 text-richblack-25">
                <p>Catalog</p>
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    fillRule="evenodd"
                  />
                </svg>
                <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                  <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5" />
                  {categories.length ? (
                    categories.map((category) => (
                      <p key={category._id}>{category.name}</p>
                    ))
                  ) : (
                    <p className="text-center">No Courses Found</p>
                  )}
                </div>
              </div>
            </li>
            <li>
              <Link to="/about">
                <p className="text-richblack-25">About Us</p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <p className="text-richblack-25">Contact Us</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden items-center gap-x-4 md:flex">
          <Link to="/login">
            <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
              Sign up
            </button>
          </Link>
        </div>
        <button className="mr-4 md:hidden">
          <svg
            fill="#AFB2BF"
            fontSize="24"
            height="1em"
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;

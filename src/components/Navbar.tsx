import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="bg-gradient-to-b from-sky-900 to-slate-950 bg-opacity-60 h-16 flex items-center px-4 sm:px-10 md:px-20 lg:px-40 mb-10 gap-4 w-full">
      <Link to="/" className="flex items-center">
        <p className="font-nasalization text-2xl leading-5 text-white">SPACE NEWS</p>
      </Link>
      <div className="ml-auto">
        <ul className="flex flex-row gap-4 md:gap-8 font-bold items-center h-16 tracking-wide text-white">
          <Link to="/apod" className="w-auto">
            <li className="hover:text-orange-200 hover:cursor-pointer hover:translate-y-0.5 transition duration-300 ease-in-out">
              Pic of the day!
            </li>
          </Link>
          <Link to="/news">
            <li className="hover:text-cyan-400 hover:cursor-pointer hover:translate-y-0.5 transition duration-300 ease-in-out text-lg">
              News
            </li>
          </Link>
          <Link to="/blogs">
            <li className="hover:text-cyan-400 hover:cursor-pointer hover:translate-y-0.5 transition duration-300 ease-in-out text-lg">
              Blogs
            </li>
          </Link>
          <Link to="/reports">
            <li className="hover:text-cyan-400 hover:cursor-pointer hover:translate-y-0.5 transition duration-300 ease-in-out text-lg">
              Reports
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
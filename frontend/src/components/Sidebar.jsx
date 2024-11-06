// src/components/Sidebar.jsx

import Avatar from './Avatar';

const Sidebar = () => (
  <div className="w-1/4 bg-gray-800 bg-opacity-20 border-r border-gray-600 flex flex-col items-center p-6">
    <Avatar />
    <h2 className="text-white font-bold text-lg mt-4">Your Name</h2>
    <p className="text-gray-400">Full Stack Software Engineer</p>
    <hr className="border-gray-600 w-full my-4" />
    <div className="text-gray-400 text-center">
      <p>email@example.com</p>
      <p>+123 456 7890</p>
    </div>
  </div>
);

export default Sidebar;

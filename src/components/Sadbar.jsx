import React from 'react';
import { FaHome, FaFileAlt, FaBell, FaCog } from 'react-icons/fa';

const Sadbar = () => {
    return (
        <div className="h-screen bg-gray-900 text-white w-64 p-4">
            <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-xl font-bold">Untitled UI</span>
            </div>
            <nav className="space-y-4">
                <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
                    <FaHome className="mr-2" /> Home
                </a>
                <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
                    <FaFileAlt className="mr-2" /> All files
                </a>
                <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
                    <FaBell className="mr-2" /> Notifications <span className="ml-auto bg-blue-500 rounded-full h-6 w-6 flex items-center justify-center">8</span>
                </a>
                <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
                    <FaCog className="mr-2" /> Settings
                </a>
            </nav>
            <div className="mt-auto">
                <div className="text-sm text-gray-500">Storage</div>
                <div className="flex items-center justify-between text-gray-400">
                    <span>9.2 GB of 10 GB used</span>
                    <button className="text-blue-500">Upgrade</button>
                </div>
                <div className="h-2 bg-gray-700 rounded mt-2">
                    <div className="h-full bg-blue-500" style={{ width: '92%' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Sadbar;

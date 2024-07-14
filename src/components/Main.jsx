import React from 'react';

const Main = () => {
    return (
        <div className="flex-1 p-6 bg-gray-800 text-white">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Mia de Silva</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Upgrade</button>
            </div>
            <div className="mt-6">
                <div className="bg-gray-700 p-4 rounded">
                    <h2 className="text-lg font-semibold">Your account security is 90%</h2>
                    <p>Please review your account security settings regularly and update your password.</p>
                    <div className="flex justify-end mt-2">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Review security</button>
                    </div>
                </div>
                <div className="mt-6 space-y-4">
                    <div className="bg-gray-700 p-4 rounded flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold">Password</h3>
                            <p className="text-gray-400">Set a password to protect your account.</p>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                    </div>
                    <div className="bg-gray-700 p-4 rounded flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold">Two-step verification</h3>
                            <p className="text-gray-400">We recommend requiring a verification code in addition to your password.</p>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <h3 className="font-semibold">Browsers and devices</h3>
                        <p className="text-gray-400">These browsers and devices are currently signed in to your account. Remove any unauthorized devices.</p>
                        <div className="mt-2 space-y-2">
                            <div className="flex justify-between items-center bg-gray-800 p-2 rounded">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-red-500 rounded-full mr-2"></div>
                                    <span>Brave on Mac OS X</span>
                                </div>
                                <span>Ninh Binh, Vietnam</span>
                            </div>
                            <div className="flex justify-between items-center bg-gray-800 p-2 rounded">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-red-500 rounded-full mr-2"></div>
                                    <span>Mia's MacBook Pro</span>
                                </div>
                                <span>Ninh Binh, Vietnam</span>
                            </div>
                            <div className="flex justify-between items-center bg-gray-800 p-2 rounded">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-green-500 rounded-full mr-2"></div>
                                    <span>Brave on Mac OS X</span>
                                </div>
                                <span>Mexico City, Mexico</span>
                            </div>
                            <div className="flex justify-between items-center bg-gray-800 p-2 rounded">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-green-500 rounded-full mr-2"></div>
                                    <span>Mia's MacBook Pro</span>
                                </div>
                                <span>Mexico City, Mexico</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

'use client'
import { useState } from 'react';

export function Toggle() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="flex items-center justify-center  bg-transparent w-[20px] h-[20px]">
            <button
                onClick={() => setEnabled(!enabled)}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 ease-in-out ${enabled ? 'bg-green-500' : 'bg-gray-400'
                    }`}
            >
                <span
                    className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ease-in-out ${enabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                />
            </button>
        </div>
    );
}

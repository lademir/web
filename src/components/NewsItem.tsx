"use client";

import React from 'react';

interface NewsItemProps {
    title: string;
    date: string;
    content: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, date, content }) => {
    return (
        <>
            {/* // <motion.li
                //     initial={{ opacity: 0, y: 20 }}
                //     animate={{ opacity: 1, y: 0 }}
                //     transition={{ duration: 0.5 }}
                //     className="border-b pb-6 last:border-b-0 transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded-lg"
                // > */}
            <li className="border-b pb-6 last:border-b-0 transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{date}</p>
                <p className="text-gray-700 dark:text-gray-200">{content}</p>
            </li>
            {/* </motion.li > */}
        </>
    );
};

export default NewsItem;
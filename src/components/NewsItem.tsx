import React from 'react';

interface NewsItemProps {
    title: string;
    date: string;
    content: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, date, content }) => {
    return (
        <li className="border-b pb-4 last:border-b-0">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{date}</p>
            <p>{content}</p>
        </li>
    );
};

export default NewsItem;
import React from 'react';

interface RepoCardProps {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

const RepoCard: React.FC<RepoCardProps> = ({ id, name, description, html_url }) => {
    return (
        <div className="bg-card text-card-foreground shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow dark:bg-slate-800">
            <h2 className="text-xl font-bold mb-2">
                <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {name}
                </a>
            </h2>
            <p className="text-muted-foreground mb-4">{description}</p>
        </div>
    );
};

export default RepoCard;

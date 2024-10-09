import React from 'react';

interface LinkProps {
    link: string;
    linkText: string;
}

interface CvCardProps {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
    links?: LinkProps[];
}

const CvCard: React.FC<CvCardProps> = ({ title, company, period, responsibilities, links }) => {


    return (
        <div className="mb-4 hover:bg-foreground/10 p-4 rounded-md transition-all duration-150">
            <h3 className="text-xl font-medium">{title} - {company}</h3>
            <span className="flex gap-x-4">
                <p className="text-sm text-foreground/70">{period}</p>
                {
                    links?.map((link, index) => (
                        <a key={index} href={link.link} target="_blank" className="text-sm text-blue-500">
                            {link.linkText}
                        </a>
                    ))
                }

            </span>
            <ul className="list-disc list-inside mt-2">
                {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
        </div>
    );
};

export default CvCard;

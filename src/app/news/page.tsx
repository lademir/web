import newsItems from '../../../latest-news.json';
import NewsItem from '../../components/NewsItem';

export default function AllNews() {
    return (
        <div className="container mx-auto max-w-3xl px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Todas as Notícias</h1>
            <ul className="space-y-6">
                {newsItems.map((item, index) => (
                    <NewsItem key={index} title={item.title} date={item.date} content={item.content} />
                ))}
            </ul>
        </div>
    );
}

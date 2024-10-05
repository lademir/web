import Image from 'next/image';
import profilePic from '../../assets/me.jpg';
import newsItems from '../../latest-news.json';
import NewsItem from '../components/NewsItem';

export default function Home() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <section className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
          <Image
            src={profilePic}
            alt="Profile picture"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-2xl font-bold mb-4">About Me</h1>
          <p className="mb-4">
            I hold a bachelor&apos;s degree in Computer Science from the Federal University of Viçosa (UFV). Currently, I work as a freelance fullstack developer, focusing on JavaScript and frameworks such as Next.js, Nest.js, and React Native.
          </p>
          <p className="mb-4">
            My areas of interest include combinatorial optimization, heuristics, metaheuristics, operations research, and evolutionary algorithms.
          </p>
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <ul className="space-y-4">
          {newsItems.map((item, index) => (
            <NewsItem key={index} title={item.title} date={item.date} content={item.content} />
          ))}
        </ul>
      </section>
    </div>
  );
}

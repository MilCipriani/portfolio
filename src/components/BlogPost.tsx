import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight';
import { posts, imageMap } from '../data/posts'
import Footer from './Footer'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  if (!post) return <p>Not found</p>
  return (
    <main className="article-markdown w-full h-full flex flex-col max-w-150 mx-auto">
      <div className='flex flex-col gap-6 mb-32'>
        <ReactMarkdown
        remarkPlugins={[remarkBreaks]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
          components={{
            img: ({ src, alt }) => {
              const resolvedSrc = src ? imageMap[src] : undefined;
              if (!resolvedSrc) {
                console.warn(`Image not found in imageMap: ${src}`);
                return null;
              }
              return <img src={resolvedSrc} alt={alt ?? ''} loading="lazy" />;
            },
            a: ({href, children}) => (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
          }}
          >{post.content}</ReactMarkdown>
        </div>
				<Footer />
    </main>
  );
}
import { useLanguage } from '../translation/index'
import { Link } from 'react-router-dom';

import { posts } from '../data/posts';
import Footer from '../components/Footer';

export default function Contacts() {
  const { t } = useLanguage()

  return (
    <main className="w-full h-full flex flex-col gap-32 max-w-[1000px] mx-auto">
			<h1 className="font-serif uppercase text-3xl xxs:text-4xl md:text-6xl lg:text-7xl">{t('routes.blog.h1')}</h1>

      <div className='mb-auto'>
        {posts.map((p, index) => (
          <div key={p.slug}>
            <Link className='flex flex-col gap-2' to={`/blog/${p.slug}`}>
              <h2>{p.title}</h2>
              <p className='text-secondary-text dark:text-secondary-text-dark text-sm'>{p.date}</p>
              <p>{p.description}</p>
            </Link>

            <div className='flex gap-2 mt-2'>
              {p.tags?.map((tag) => <div key={tag} className='px-2 py-1 bg-tags-bg dark:bg-tags-bg-dark text-tags-text dark:text-tags-text-dark text-[12px] rounded-full'>{tag}</div>)}
            </div>

            {index < posts.length - 1 && <hr className='mt-4 text-secondary-text/50 dark:text-secondary-text-dark'/>}
          </div>
        ))}
      </div>
      
      <Footer/>
    </main>
    
  );
}
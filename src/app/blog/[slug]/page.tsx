import styles from './blogPost.module.css';
import Image from 'next/image';
import { Text } from '@/app/components/Text';
import { Button, SSGButton } from '@/app/components/Button';
import ChevronLeft from '@/app/icons/chevron-left.svg';
import Link from 'next/link';
import blogs from './blogs.json';
import type { Metadata } from 'next';
import { phoneNumberLink } from '@/app/utils/constants';
import CallLink from '@/app/components/CallLink';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blogData = blogs[slug as keyof typeof blogs];

  // Return the dynamic metadata
  return {
    title: blogData.title,
    description: blogData.summary,
    openGraph: {
      type: 'article',
      title: blogData.title,
      description: blogData.summary,
      publishedTime: blogData.publishDate,
      url: `https://reframedeye.com/blog/${slug}`,
      images: [
        {
          url: `https://reframedeye.com/images/blog/${blogData.localImgFileName}`,
        },
      ],
    },
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blogData = blogs[slug as keyof typeof blogs];

  return (
    <main className={styles.main}>
      <article className="centerColumnContent maxTextContent">
        <Link href={'/'} className={styles.backLink}>
          <SSGButton
            showArrow={false}
            variant="outlined"
            className={styles.backLinkButton}
          >
            <ChevronLeft />
          </SSGButton>
        </Link>
        <Text el="h1" styleAs="h2" center>
          {blogData.title}
        </Text>
        <Text el="p" className={styles.subtitle}>
          <em>
            {blogData.author} ·{' '}
            {new Intl.DateTimeFormat('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }).format(new Date(blogData.publishDate))}
          </em>
        </Text>
        {blogData.localImgFileName && (
          <figure className={styles.figure}>
            <div className={styles.imageContainer}>
              <Image
                src={`/images/blog/${blogData.localImgFileName}`}
                alt={`Picture from Unsplash relating to ${blogData.title}`}
                fill
                objectFit="contain"
                className={styles.image}
              />
            </div>
            <figcaption className={styles.caption}>
              <a href={blogData.imageAttributionLink}>
                {blogData.imageAttribution}
              </a>
            </figcaption>
          </figure>
        )}
        {blogData.content.map((paragraph, i) => (
          <Text el="p" key={`${slug}_content_${i}`} className={styles.p}>
            {paragraph}
          </Text>
        ))}
      </article>
      <footer className={`centerColumnContent maxTextContent ${styles.footer}`}>
        {blogData.sources.map((source, i) => (
          <Text el="span" key={`${slug}_source_${i}`} className={styles.source}>
            {source}
          </Text>
        ))}
        {blogData.additionalPublication && (
          <Text el="span" className={styles.source}>
            {blogData.additionalPublication}
          </Text>
        )}
      </footer>
      <div className={styles.callNowLink}>
        <CallLink />
      </div>
    </main>
  );
}

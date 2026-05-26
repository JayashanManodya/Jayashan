import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';

interface MediumItem {
    title: string;
    link: string;
    pubDate: string;
    author: string;
    thumbnail?: string;
    description?: string;
}

interface MediumResponse {
    status: string;
    items: MediumItem[];
}

const mediumUsername = 'jayashanmanodya';
const rssFeedUrl = `https://medium.com/feed/@${mediumUsername}`;
const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssFeedUrl)}`;

export function Blogs() {
    const [posts, setPosts] = useState<MediumItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        fetch(rss2jsonUrl, { signal: controller.signal })
            .then((response) => response.json())
            .then((data: MediumResponse) => {
                if (data?.status !== 'ok' || !Array.isArray(data.items)) {
                    throw new Error('Unable to load Medium posts');
                }

                setPosts(data.items.slice(0, 3));
            })
            .catch((fetchError) => {
                if (fetchError.name !== 'AbortError') {
                    setError('Unable to load Medium posts right now.');
                }
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, []);

    return (
        <Section id="blogs" className="transition-colors duration-300">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Blogs</h2>
                <div className="h-2 w-24 bg-brand-primary mx-auto rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto px-4 text-center">
                <div className="mb-8 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                        Latest blog highlights
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Swipe through the newest articles published on my Medium blog.
                    </p>
                </div>

                {loading && (
                    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-slate-700 dark:text-slate-300 shadow-sm">
                        Loading latest Medium posts...
                    </div>
                )}

                {error && (
                    <div className="rounded-3xl border border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/40 p-8 text-rose-700 dark:text-rose-200 shadow-sm">
                        {error}
                    </div>
                )}

                {!loading && !error && posts.length === 0 && (
                    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-slate-700 dark:text-slate-300 shadow-sm">
                        No posts found yet. Please check back soon.
                    </div>
                )}

                <div className="overflow-x-auto pb-4">
                    <div className="flex gap-6 min-w-max px-1">
                        {posts.map((post) => (
                            <motion.a
                                key={post.link}
                                href={post.link}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="min-w-[300px] max-w-[360px] shrink-0 rounded-[28px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                {post.thumbnail ? (
                                    <div className="h-44 overflow-hidden">
                                        <img
                                            src={post.thumbnail}
                                            alt={post.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="h-44 bg-gradient-to-br from-brand-primary to-slate-500" />
                                )}
                                <div className="p-6">
                                    <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">{post.author}</span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400">{new Date(post.pubDate).toLocaleDateString()}</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">{post.title}</h4>
                                    {post.description && (
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-6 line-clamp-4">
                                            {post.description.replace(/(<([^>]+)>)/gi, '')}
                                        </p>
                                    )}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

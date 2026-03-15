import { Button } from '@/styles/components/ui/button';
import { Card, CardContent } from '@/styles/components/ui/card';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
    const posts = [
        {
            id: 1,
            slug: 'learn-next.js',
            title: 'Learn Next.js basics',
            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore totam earum sit commodi minima molestias iste culpa recusandae aut, exercitationem laborum, reiciendis itaque, aliquam sint ducimus debitis mollitia beatae provident!',
        },
        {
            id: 2,
            slug: 'learn-node.js',
            title: 'learn-node.js basics',
            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore totam earum sit commodi minima molestias iste culpa recusandae aut, exercitationem laborum, reiciendis itaque, aliquam sint ducimus debitis mollitia beatae provident!',
        },
    ];
    return (
        <main className="min-h-screen">
            <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
                <h1 className="text-xl font-bold mb-4"> Hi, I&apos;m Lâm</h1>
                <p className="text-muted-foreground text-lg max-w-md mb-6">
                    A full-stack developer passion about building great web experiences
                </p>
                <div className="flex gap-4">
                    <Button asChild>
                        <Link href="/blog">Read Blog</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/comment">
                            <MessageCircle className="w-4 h-4 mr-2" /> Contact me
                        </Link>
                    </Button>
                </div>
            </section>
            {/* About section */}
            <section className="py-16 px-4 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">About me</h2>
                <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae debitis reprehenderit
                    repudiandae quae nam corporis aut assumenda neque consequuntur alias, odit aliquam ipsa,
                    consectetur, error magni aliquid minus. Odio!
                </p>
            </section>
            {/* Recent Post */}
            <section className="py-16 px-4 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
                {posts.length > 0 ? (
                    <div>
                        {posts.map((post) => (
                            <Card key={post.id} className="hover:bg-accent transition-colors">
                                <Link href={`/blog/${post.slug}`}>
                                    <CardContent className="p-4">
                                        <h3 className="font-semibold">{post.title}</h3>
                                        <p className='text-sm text-muted-foreground'>
                                            {new Date(post.createdAt).toLocaleString()}
                                             
                                        </p>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted-foreground">No posts yet.</p>
                )}
            </section>
        </main>
    );
}

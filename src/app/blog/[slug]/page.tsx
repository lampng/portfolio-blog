import MarkdownRender from '@/styles/components/markdown-renderer';
import { Button } from '@/styles/components/ui/button';
import prisma from '@/styles/lib/db';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function PostBlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const post = await prisma.blogPost.findUnique({
        where: { slug },
    });
    if (!post) notFound();
    return (
        <main className="min-h-screen py-16 px-4">
            <article className="max-w-3xl mx-auto">
                <Button variant="ghost" className="mb-8" asChild>
                    <Link href="/blog">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                </Button>

                {/* Post */}
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="text-muted-foreground">{new Date(post.createdAt).toLocaleDateString()}</p>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <MarkdownRender content={post.content} />
                </div>
            </article>
        </main>
    );
}

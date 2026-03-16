import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownRender({ content }: { content: string }) {
    return (
        <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
                h1: ({ children }) => <h1 className="text-2xl font-bold mt-6 mb-4">{children}</h1>,

                h2: ({ children }) => <h2 className="text-xl font-bold mt-5 mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-lg font-bold mt-4 mb-2">{children}</h3>,

                p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,

                ul: ({ children }) => <ul className="list-disc pl-6 mb-4 ">{children}</ul>,

                ol: ({ children }) => <ol className="list-decimal pl-6 mb-4   ">{children}</ol>,

                li: ({ children }) => <li className="text-gray-700 mb-1">{children}</li>,

                code: ({ children, className }) => {
                    const isInline = !className;
                    return isInline ? (
                        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">{children}</code>
                    ) : (
                        <code className="block bg-muted px-4 mb-4 rounded-lg overflow-x-auto text-sm">{children}</code>
                    );
                },

                pre: ({ children }) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,

                blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-border pl-4 italic my-4">{children}</blockquote>
                ),
                a: ({ children, href }) => (
                    <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        {children}
                    </a>
                ),
            }}
        >
            {content}
        </Markdown>
    );
}

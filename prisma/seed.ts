import prisma from '@/styles/lib/db';

async function main() {
    const blogPosts = [
  {
    slug: "learn-node.js",
    title: "Learn node.js basics",
    content: `
# Node.js Basics

Node.js is a **JavaScript runtime** built on Chrome's V8 engine.

---

## Features

- Fast
- Event-driven
- Non-blocking IO
- Huge ecosystem (NPM)

---

## Install Node.js

\`\`\`bash
node -v
npm -v
\`\`\`

---

## Create Simple Server

\`\`\`js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello Node.js");
});

server.listen(3000);
\`\`\`

---

## Project Structure

- src/
- package.json
- node_modules/

---

## Table Example

| Tool | Purpose |
|-----|------|
| Node.js | Runtime |
| Express | Web framework |
| Prisma | Database ORM |

---

## Quote

> Node.js allows developers to use JavaScript for server-side programming.

---

## Links

- https://nodejs.org
- https://npmjs.com

---

## Conclusion

Node.js is great for **API, realtime apps, and microservices**.
`,
  },

  {
    slug: "learn-next.js",
    title: "Learn Next.js basics",
    content: `
# Next.js Basics

Next.js is a **React framework** for production.

---

## Features

- File-based routing
- Server-side rendering
- Static site generation
- API routes

---

## Create Next.js App

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

---

## Example Page

\`\`\`tsx
export default function Home() {
  return <h1>Hello Next.js</h1>;
}
\`\`\`

---

## Folder Structure

- app/
- components/
- public/
- styles/

---

## When to use Next.js

1. SEO websites
2. Blogs
3. Dashboards
4. SaaS products

---

## Conclusion

Next.js giúp build **fullstack React app nhanh và tối ưu**.
`,
  },

  {
    slug: "learn-prisma",
    title: "Learn Prisma ORM",
    content: `
# Prisma ORM

Prisma is a **modern database ORM** for Node.js and TypeScript.

---

## Install Prisma

\`\`\`bash
npm install prisma --save-dev
npx prisma init
\`\`\`

---

## Prisma Schema Example

\`\`\`prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  createdAt DateTime @default(now())
}
\`\`\`

---

## Query Example

\`\`\`ts
const posts = await prisma.post.findMany()
\`\`\`

---

## Advantages

- Type-safe
- Easy migrations
- Great developer experience

---

## Use Cases

- REST API
- SaaS backend
- Blog system

---

## Conclusion

Prisma giúp làm việc với database **rất nhanh và an toàn**.
`,
  }
];
    for (const post of blogPosts) {
        await prisma.blogPost.create({
            data: post,
        });
    }
    console.log('🐼 Seed runner');
}
main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

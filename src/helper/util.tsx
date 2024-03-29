import { Montserrat } from "next/font/google";
import { Post } from "./types";
const { BLOG_URL, CONTENT_API_KEY } = process ? process.env: {BLOG_URL: "", CONTENT_API_KEY: ""}

export async function getPost(slug: string): Promise<Post> {
    let post: Post = {title: '', slug: '', html: '', feature_image: '', feature_image_alt: ''};
    if (BLOG_URL && CONTENT_API_KEY) {
        const url = `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}/?key=${CONTENT_API_KEY}&fields=title,html,slug,feature_image,feature_image_alt`;
        const res: {posts: Post[]} | void = await fetch(url)
        .then<{ posts: Post[] }>((response: Response) => {
            if (response.ok) {
                return response.json()
            }
            else {
                const message = `An error occured: ${response.status}`
                throw new Error(message)
            }
        }).catch((error: Error) => {
            throw new Error(error.message)
        });

        const posts: Post[] = res.posts
        post = posts[0]
    }
    return post;
}

export async function getAllPosts(): Promise<Post[]> {
    // curl "https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062"

    let posts: Post[] = [];
    if (BLOG_URL && CONTENT_API_KEY) {
        const url = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,html,feature_image,feature_image_alt`
        const res: { posts: Post[] } | void = await fetch(url)
            .then<{ posts: Post[] }>((response: Response) => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    const message = `An error occured: ${response.status}`
                    throw new Error(message)
                }

            }).catch((error: Error) => {
                throw new Error(error.message)
            });
        if (res) {
            posts = res.posts
        }
    }
    return posts;
}

export async function getAllPostsByTag(tag: string): Promise<Post[]> {

    let posts: Post[] = [];
    if (BLOG_URL && CONTENT_API_KEY) {
        try {
            const url = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,html,slug,feature_image,feature_image_alt&filter=tag:${tag}`
            const res: Response = await fetch(url);
            if (!res.ok) {
                throw new Error(JSON.stringify({ code: res.status, message: res.statusText }));
            }
            const data: {posts: Post[]} = await res.json() as {posts: Post[]};
            posts = data.posts;
            
        } catch (error) {
            console.error(error);
        }
    }
    return posts;
}

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap'
})
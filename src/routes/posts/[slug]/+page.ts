// src/routes/blog/[slug]/+page.js
export const trailingSlash = 'always';


export async function load({ params }) {
    const post = await import(`../${params.slug}.md`);
    const { title, date } = post.metadata;
    const content = post.default;

    return {
        content,
        title,
        date
    };
}
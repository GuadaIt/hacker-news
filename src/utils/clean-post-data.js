export const cleanPostsData = (posts) => {
    const simplifiedPosts = posts.map((post) => {
        return {
            author: post.author,
            story_title: post.story_title,
            story_url: post.story_url,
            created_at: post.created_at,
        };
    });

    return simplifiedPosts.filter(
        (post) => !Object.values(post).includes(null)
    );
};

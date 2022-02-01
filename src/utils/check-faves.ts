import { Post } from "../models/posts";

export const getLocalStorageFaves = (): Post[] => {
    const savedFaves = localStorage.getItem("__HN-APP__faves__");
    if (savedFaves) return JSON.parse(savedFaves);
    return [];
};

export const removeFave = (post: Post) => {
    const faves = getLocalStorageFaves();
    const newFaves = faves.filter(
        (fave: Post) => fave.story_id !== post.story_id
    );
    localStorage.setItem("__HN-APP__faves__", JSON.stringify(newFaves));
};

export const addFave = (post: Post) => {
    const faves = getLocalStorageFaves();
    faves.push(post);
    localStorage.setItem("__HN-APP__faves__", JSON.stringify(faves));
};

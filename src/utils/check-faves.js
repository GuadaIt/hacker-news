export const getLocalStorageFaves = () => {
    const savedFaves = localStorage.getItem("__HN-APP__faves__");
    if (savedFaves) return JSON.parse(savedFaves);
    return [];
};

export const removeFave = (post) => {
    const faves = getLocalStorageFaves();
    const newFaves = faves.filter(
        (fave) => fave.story_id !== post.story_id
    );
    localStorage.setItem("__HN-APP__faves__", JSON.stringify(newFaves));
};

export const addFave = (post) => {
    const faves = getLocalStorageFaves();
    faves.push(post);
    localStorage.setItem("__HN-APP__faves__", JSON.stringify(faves));
};

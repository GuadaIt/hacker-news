export interface Post {
    author: string;
    story_title: string;
    story_url: string;
    created_at: number;
    story_id: string;
}

export interface ApiPost {
    created_at: string | null;
    title: string | null;
    url: string | null;
    author: string | null;
    points: null;
    story_text: string | null;
    comment_text: string;
    num_comments: null;
    story_id: number;
    story_title: string | null;
    story_url: string | null;
    parent_id: number;
    created_at_i: number;
    _tags: string[];
    objectID: string;
    _highlightResult: {
        author: {
            value: string;
            matchLevel: string;
            matchedWords: string[];
        };
        comment_text: {
            value: string;
            matchLevel: string;
            fullyHighlighted: boolean;
            matchedWords: string[];
        };
        story_title: {
            value: string;
            matchLevel: string;
            matchedWords: [];
        };
        story_url: {
            value: string;
            matchLevel: string;
            matchedWords: [];
        };
    };
}

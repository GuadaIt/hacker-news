import { useEffect, useState } from "react";
import {
    removeFave,
    addFave,
    getLocalStorageFaves,
} from "../../utils/check-faves";
import { dateDistance } from "../../utils/date-distance";
import "./news-card.style.css";

const NewsCard = ({ data }) => {
    const { author, story_title, story_url, created_at } = data;
    const [isFave, setIsFave] = useState(false);

    const handleFave = () => {
        isFave ? removeFave(data) : addFave(data);
        setIsFave(!isFave);
    };

    useEffect(() => {
        const faves = getLocalStorageFaves();

        if (faves) {
            faves.forEach((fave) => {
                if (fave.story_title === story_title) {
                    setIsFave(true);
                }
            });
        }
    }, [story_title]);

    return (
        <article className="news-card">
            <div className="card-left-side">
                <a href={story_url} target="_blank" rel="noopener noreferrer">
                    <div className="card-caption">
                        <img
                            src="/icon-time.svg"
                            alt="clock icon"
                            width="15px"
                        />
                        <p>
                            {dateDistance(created_at)} by {author}
                        </p>
                    </div>
                    <p className="card-desc">{story_title}</p>
                </a>
            </div>
            <div className="card-right-side">
                {isFave ? (
                    <img
                        src="/icon-favorite.svg"
                        alt="clock icon"
                        width="15px"
                        onClick={handleFave}
                    />
                ) : (
                    <img
                        src="/icon-notfavorite.svg"
                        alt="clock icon"
                        width="15px"
                        onClick={handleFave}
                    />
                )}
            </div>
        </article>
    );
};

export default NewsCard;

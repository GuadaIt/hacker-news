import "./news-card.style.css";

const NewsCard = ({ data }) => {
    const { author, story_title, story_url, created_at } = data;
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
                            {created_at} by {author}
                        </p>
                    </div>
                    <p className="card-desc">{story_title}</p>
                </a>
            </div>
            <div className="card-right-side">
                <img
                    src="/icon-notfavorite.svg"
                    alt="clock icon"
                    width="15px"
                />
            </div>
        </article>
    );
};

export default NewsCard;

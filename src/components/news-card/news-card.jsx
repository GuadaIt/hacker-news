import "./news-card.style.css";

function NewsCard() {
    return (
        <article className="news-card">
            <div className="card-left-side">
                <div className="card-caption">
                    <img src="/icon-time.svg" alt="clock icon" width="15px" />
                    <p>4 hours ago by author</p>
                </div>
                <p className="card-desc">
                    Event-driven state management in React using Storeon
                </p>
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
}

export default NewsCard;

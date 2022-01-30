import "./App.css";

const filterOptions = [
    {
        label: "Angular",
        iconSrc: "/angular-icon.png",
    },
    {
        label: "ReactJS",
        iconSrc: "/react-icon.png",
    },
    {
        label: "VueJS",
        iconSrc: "/vue-icon.png",
    },
];

function App() {
    return (
        <div className="app">
            <header className="app__header">
                <h1 className="app__title">Hacker News</h1>
            </header>

            <main className="app__main">
                <div className="app__tabs-container">
                    <p className="app__tab app__tab-left app__tab--active">
                        All
                    </p>
                    <p className="app__tab app__tab-right">My faves</p>
                </div>

                <div className="dropdown-list-container">
                    <div className="dropdown-selected-opt">
                        Select your news
                        <div className="arrow-down"></div>
                    </div>
                    <ul className="dropdown-list">
                        {filterOptions.map((option) => (
                            <li key={Math.random()} className="dropdown-item">
                                <img
                                    className="dropdown-item-img"
                                    src={option.iconSrc}
                                    alt={option.label + " icon"}
                                />
                                <p className="dropdown-item-label">
                                    {option.label}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <section className="cards-container">
                    <article className="news-card">
                        <div className="card-left-side">
                            <div className="card-caption">
                                <img
                                    src="/icon-time.svg"
                                    alt="clock icon"
                                    width="15px"
                                />
                                <p>4 hours ago by author</p>
                            </div>
                            <p className="card-desc">
                                Event-driven state management in React using
                                Storeon
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

                    <article className="news-card">
                        <div className="card-left-side">
                            <div className="card-caption">
                                <img
                                    src="/icon-time.svg"
                                    alt="clock icon"
                                    width="15px"
                                />
                                <p>4 hours ago by author</p>
                            </div>
                            <p className="card-desc">
                                Event-driven state management in React using
                                Storeon
                            </p>
                        </div>
                        <div className="card-right-side">
                            <img
                                src="/icon-favorite.svg"
                                alt="clock icon"
                                width="15px"
                            />
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default App;

import "./App.css";
import FilterSelect from "./components/filter-select/filter-select";
import NewsCard from "./components/news-card/news-card";

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
                
                <FilterSelect />

                <section className="cards-container">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </section>
            </main>
        </div>
    );
}

export default App;

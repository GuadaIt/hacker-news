import "./App.css";
import { useState } from "react";
import FilterSelect from "./components/filter-select/filter-select";
import NewsCard from "./components/news-card/news-card";

const App = () => {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [activeTab, setActiveTab] = useState(1);

    const handleSelect = (opt) => setSelectedFilter(opt);

    const handleTabClick = (tab) => {
        if (tab === activeTab) return;
        setActiveTab(tab);
    };

    return (
        <div className="app">
            <header className="app__header">
                <h1 className="app__title">Hacker News</h1>
            </header>

            <main className="app__main">
                <div className="app__tabs-container">
                    <p
                        className={
                            activeTab === 1
                                ? "app__tab app__tab-left app__tab--active"
                                : "app__tab app__tab-left"
                        }
                        onClick={() => handleTabClick(1)}
                    >
                        All
                    </p>
                    <p
                        className={
                            activeTab === 2
                                ? "app__tab app__tab-right app__tab--active"
                                : "app__tab app__tab-right"
                        }
                        onClick={() => handleTabClick(2)}
                    >
                        My faves
                    </p>
                </div>

                <FilterSelect filter={selectedFilter} onselect={handleSelect} />

                <section className="cards-container">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </section>
            </main>
        </div>
    );
};

export default App;

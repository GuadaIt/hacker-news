import "./App.css";
import { useEffect, useState } from "react";
import FilterSelect from "./components/filter-select/filter-select";
import NewsCard from "./components/news-card/news-card";
import Loader from "./components/loader/loader";
import { cleanPostsData } from "./utils/clean-post-data";
import { BASE_URL } from "./constants/config";

const App = () => {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [activeTab, setActiveTab] = useState(1);
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSelect = (opt) => {
        setSelectedFilter(opt);
        localStorage.setItem("__HN-APP__filter__", JSON.stringify(opt));
        fetchPosts(`${BASE_URL}/search_by_date?query=${opt.value}&page=0`);
    };

    const handleTabClick = (tab) => {
        if (tab === activeTab) return;
        setActiveTab(tab);
    };

    const fetchPosts = async (url) => {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        const cleanData = cleanPostsData(data.hits);
        setIsLoading(false);
        setPosts(cleanData);
    };

    useEffect(() => {
        const filter = localStorage.getItem("__HN-APP__filter__");
        const parsedFilter = JSON.parse(filter);

        setSelectedFilter(parsedFilter);

        const query = parsedFilter ? parsedFilter.value : "angular,react,vue";

        fetchPosts(`${BASE_URL}/search_by_date?query=${query}&page=0`);
    }, []);

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
                    {isLoading ? (
                        <Loader />
                    ) : (
                        posts?.map((post, i) => (
                            <NewsCard data={post} key={i} />
                        ))
                    )}
                </section>
            </main>
        </div>
    );
};

export default App;

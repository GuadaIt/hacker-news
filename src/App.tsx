import "./App.css";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import FilterSelect from "./components/filter-select/filter-select";
import NewsCard from "./components/news-card/news-card";
import Loader from "./components/loader/loader";
import { cleanPostsData } from "./utils/clean-post-data";
import { BASE_URL } from "./constants/config";
import { getLocalStorageFaves } from "./utils/check-faves";
import { Filter } from "./models/filter";
import { Post } from "./models/posts";
import { Pagination } from "./models/pagination";

const App = () => {
    const [selectedFilter, setSelectedFilter] = useState<Filter | null>(null);
    const [activeTab, setActiveTab] = useState<number>(1);
    const [posts, setPosts] = useState<Post[]>([]);
    const [faves, setFaves] = useState<Post[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [postsPagination, setPaginationPosts] = useState<Pagination>({
        current_page: null,
        total_pages: 0,
        per_page: null,
    });

    const handleSelect = (opt: Filter) => {
        setSelectedFilter(opt);
        localStorage.setItem("__HN-APP__filter__", JSON.stringify(opt));
        fetchPosts(`${BASE_URL}/search_by_date?query=${opt.value}&page=0`);
    };

    const handleTabClick = (tab: number) => {
        if (tab === activeTab) return;
        if (tab === 2) {
            setFaves(getLocalStorageFaves());
        }
        setActiveTab(tab);
    };

    const handlePageClick = (event: { selected: number }) => {
        const query = selectedFilter
            ? selectedFilter.value
            : "angular,react,vue";
        fetchPosts(
            `${BASE_URL}/search_by_date?query=${query}&page=${event.selected}`
        );
    };

    const fetchPosts = async (url: string) => {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        const cleanData = cleanPostsData(data.hits);
        setIsLoading(false);
        setPaginationPosts({
            current_page: data.page,
            total_pages: data.nbPages,
            per_page: data.hitsPerPage,
        });
        setPosts(cleanData);
    };

    useEffect(() => {
        const filter: string | null =
            localStorage.getItem("__HN-APP__filter__");

        if (filter) {
            const parsedFilter = JSON.parse(filter);

            setSelectedFilter(parsedFilter);

            const query = parsedFilter
                ? parsedFilter.value
                : "angular,react,vue";

            fetchPosts(`${BASE_URL}/search_by_date?query=${query}&page=0`);
        }
    }, [activeTab]);

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

                {activeTab === 1 && (
                    <FilterSelect
                        filter={selectedFilter}
                        onselect={handleSelect}
                    />
                )}

                <section className="cards-container">
                    {isLoading ? (
                        <Loader />
                    ) : activeTab === 1 ? (
                        posts?.map((post, i) => (
                            <NewsCard data={post} key={i} />
                        ))
                    ) : (
                        faves?.map((post, i) => (
                            <NewsCard data={post} key={i} />
                        ))
                    )}
                </section>

                {activeTab === 1 && !isLoading && (
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={postsPagination.total_pages}
                        previousLabel="<"
                        containerClassName="pagination-container"
                        pageClassName="pagination-item"
                        activeClassName="pagination-active"
                        previousClassName="pagination-item"
                        nextClassName="pagination-item"
                    />
                )}
            </main>
        </div>
    );
};

export default App;

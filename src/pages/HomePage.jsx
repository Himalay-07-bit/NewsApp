import React, { useEffect, useState } from "react";
import NewsItem from "../component/NewsItem";
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';


export default function HomePage() {
    let [page, setPage] = useState(1)
    let [articles, setArticles] = useState([])
    let [totalResults, setTotalResults] = useState([])
    let [searchParams] = useSearchParams()


    async function getApiData() {
        let response = await fetch(`/api/news?q=${searchParams.get("q") ?? "All"}&language=${searchParams.get("language") ?? "hi"}&page=${page}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
        response = await response.json();
        if (response.status === "ok") {
            setArticles(response.articles);
            setTotalResults(response.totalResults);
        }
    }

    let fetchData = async () => {
        let nextPage = page + 1;
        setPage(nextPage);

        let response = await fetch(`/api/news?q=${searchParams.get("q") ?? "All"}&language=${searchParams.get("language") ?? "hi"}&page=${nextPage}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
        response = await response.json();
        if (response.status === "ok") {
            setArticles(articles.concat(response.articles));
        }
    };


    useEffect(() => {
        getApiData()
    }, [searchParams])
    return (
        <div className="container-fluid">
            <h5 className="background text-center mt-1 p-2 text-light rounded-5">{searchParams.get("q")} News Articles</h5>
            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchData}
                hasMore={articles.length < totalResults}
                loader={<div className="my-5 text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
            >
                <div className="row">
                    {articles.map((item, index) => {
                        return <NewsItem
                            key={index}
                            source={item.source?.name ?? "N/A"}
                            title={item.title}
                            description={item.description}
                            url={item.url}
                            pic={item.urlToImage}
                            date={item.publishedAt}
                        />
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}


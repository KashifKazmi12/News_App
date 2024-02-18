import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import bannerImage from '../images/default_banner.png';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [state, setState] = useState({
        articles: [],
        loading: false,
        page: 1,
        noOfPages: 0,
    });

    useEffect(() => {
        fetchData();
    }, []);   // eslint-disable-line react-hooks/exhaustive-deps


    const fetchData = async () => {
        try {
            props.setProgress(30);
            setState((prevState) => ({ ...prevState, loading: true }));
            props.setProgress(60);

            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=7d7b6b05ae1149fab4fde456e23b7e6b&pagesize=9&category=${props.category}`);

            setState({
                articles: response.data.articles,
                loading: false,
                page: 1, // Reset the page when fetching new data
                noOfPages: Math.floor(response.data.totalResults / 9) + 1,
            });

            props.setProgress(100);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchMore = async () => {
        if (state.page >= state.noOfPages) {
            return; // No more pages to load
        }

        setState((prev) => ({
            ...prev,
            loading: true,
            page: state.page + 1,
        }));

        try {
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=in&apiKey=7d7b6b05ae1149fab4fde456e23b7e6b&page=${state.page + 1}&pagesize=9&category=${props.category}`
            );

            setState((prev) => ({
                ...prev,
                articles: prev.articles.concat(response.data.articles),
                loading: false,
            }));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h2 className='top-heading'>
                News Monkey - Top {props.category ? `${props.category} ` : ''} HeadLines
            </h2>

            <InfiniteScroll
                dataLength={state.articles.length}
                next={fetchMore}
                hasMore={state.page < state.noOfPages}
                loader={state.loading ? <Spinner /> : null}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className='container'>
                    <div className='row'>
                        {state.articles.map((article) => (
                            <div key={article.url} className='col-12 col-md-6 col-lg-4'>
                                <NewsItem
                                    title={article.title ? article.title.slice(0, 40) : ''}
                                    description={article.description ? article.description.slice(0, 88) : ''}
                                    imageUrl={article.urlToImage ? article.urlToImage : bannerImage}
                                    newsUrl={article.url}
                                    publishDate={article.publishedAt}
                                    author={article.author}
                                    source={article.source.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};

export default News;

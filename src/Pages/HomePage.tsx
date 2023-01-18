import React from 'react';
import {TextField} from "@mui/material";
import Article from "../components/Article/Article";
import {useData} from "./useData";

import styles from './HomePage.module.scss'

export interface ArticlesData {
    id: number,
    author?: string,
    title: string,
    imageUrl: string,
    summary: string,
    publishedAt: string,
    tags: string[],
}

const HomePage = () => {
    const [tags, setTags] = React.useState([''])
    const url = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=30'
    const {visibleData, data, setVisibleData} = useData(url)
    const articles = visibleData.map(item => <Article
        tags={tags} id={item.id} key={item.id}
        title={item.title.slice(0, 100)}
        summary={item.summary.slice(0, 100)} imageUrl={item.imageUrl}
        publishedAt={item.publishedAt.slice(0,10)}/>
    )

    const filterData = (e: string) => {
        // set tags from input and add to array
        setTags(e.split(' '))

        // search with regexp from tags items
        const isFiltered = data.filter(item => item.title.match(new RegExp(tags.join('|'), 'gi')) ||
            item.summary.match(new RegExp(tags.join('|'), 'gi')))
        isFiltered ? setVisibleData(isFiltered) : setVisibleData(data)
    }

    return (
        <div className={styles.main}>
            <h1> Filter by keywords</h1>
            <TextField onChange={(e) => filterData(e.target.value)}
                       id="outlined-basic"
                       label="Enter your tags..."
                       variant="outlined"/>
            <h2>Results:{visibleData.length}</h2>
            <div className={styles.articles}>
                {articles || <h1>Try again, we haven't data....</h1>}
            </div>
        </div>
    );
}

export default HomePage;

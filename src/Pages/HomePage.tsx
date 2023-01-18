import React from 'react';
import {TextField} from "@mui/material";
import Article from "../components/Article/Article";
import {useData} from "./useData";


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
    const url = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=90'
    const {visibleData, data, setVisibleData} = useData(url)
    const articles = visibleData.map(item => <Article
        tags={tags} id={item.id} key={item.id}
        title={item.title.slice(0, 100)}
        summary={item.summary.slice(0, 100)} imageUrl={item.imageUrl}
        publishedAt={item.publishedAt}/>
    )

    const filterData = (e: string) => {
        // set tags from input and add to array
        setTags(e.split(' '))

        // search with regexp from tags items
        const isFiltered = data.filter(item => item.title.match(new RegExp(tags.join('|'), 'i')) ||
            item.summary.match(new RegExp(tags.join('|'), 'i')))
        isFiltered ? setVisibleData(isFiltered) : setVisibleData(data)
    }

    return (
        <div className="app">
            <h1> Filter by keywords</h1>
            <TextField onChange={(e) => filterData(e.target.value)}
                       id="outlined-basic"
                       label="Enter your tags..."
                       variant="outlined"/>
            <h2>Results:{visibleData.length}</h2>
            <div className='articles'>
                {articles}
            </div>
        </div>
    );
}

export default HomePage;

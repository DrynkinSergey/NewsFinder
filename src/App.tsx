import React from 'react';
import {TextField} from "@mui/material";
import './main.scss'
import axios from "axios";
import Article from "./components/Article/Article";
import Highlighter from "react-highlight-words";

export interface ArticlesData {
    author?: string,
    title: string,
    urlToImage: string,
    description: string,
    publishedAt: string,
    tags:string[]
}


const App = () => {
    const [tags, setTags] = React.useState([''])

    const [data, setData] = React.useState<ArticlesData[]>([])
    const [test, setTest] = React.useState<ArticlesData[]>([])
    const [visibleData, setVisibleData] = React.useState<ArticlesData[]>([])
    const url = 'https://saurav.tech/NewsAPI/top-headlines/category/general/us.json'
    React.useEffect(() => {

        axios.get(url)
            .then(res => {
                setData(res.data.articles)
                setVisibleData(res.data.articles)
            })


    }, []);


    const filterData = (e: string) => {
            setTags(e.split(' '))
         const isFiltered = data.filter(item => item.title.match(new RegExp(tags.join('|'), 'i') ))
        isFiltered? setVisibleData(isFiltered ) : setVisibleData(data)
    }

    return (
        <div className="app">
            <h1> Filter by keywords</h1>
            <TextField onChange={(e) => filterData(e.target.value)} id="outlined-basic"
                       label="Enter your tags..." variant="outlined"/>

            <h2>Results:{visibleData.length}</h2>
            <div className='articles'>
                {
                    visibleData.map(item => <Article tags={tags}  key={item.title} title={item.title}
                                                     description={item.description} urlToImage={item.urlToImage}
                                                     publishedAt={item.publishedAt}/>
                    )
                }
            </div>
        </div>
    );
}

export default App;

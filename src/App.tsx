import React from 'react';
import {TextField} from "@mui/material";
import './main.scss'
import axios from "axios";
import Article from "./components/Article/Article";

export interface ArticlesData {
    author?: string,
    title: string,
    urlToImage: string,
    description: string,
    publishedAt: string
}

const App = () => {

    const [data, setData] = React.useState<ArticlesData[]>([])
    const [filteredData, setFilteredData] = React.useState<ArticlesData[]>([])

    React.useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b6677a0e100e4a31b13eafcaaad599a0')
            .then(res => setData(res.data.articles))
    }, []);
    const filterData = (e: string) => {



            const isFiltered = data.filter(item =>  item.title.toLowerCase().includes(e.toLowerCase())
            )

            setFilteredData(isFiltered)


    }

    return (
        <div className="app">
            <h1> Filter by keywords</h1>
            <TextField onChange={(e) => filterData(e.currentTarget.value)} id="outlined-basic"
                       label="Enter your request" variant="outlined"/>

            <h2>Result:{data.length}</h2>
            <div className='articles'>
                {
                    filteredData.length!=0  ? filteredData.map(item => <Article key={item.author} title={item.title}
                                                                                description={item.description}
                                                                                urlToImage={item.urlToImage}
                                                                                publishedAt={item.publishedAt}/>
                        )
                        :
                        data.map(item => <Article key={item.author} title={item.title}
                                                  description={item.description} urlToImage={item.urlToImage}
                                                  publishedAt={item.publishedAt}/>
                        )

                }
            </div>
        </div>
    );
}

export default App;

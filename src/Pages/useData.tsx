import React from "react";
import axios from "axios";
import {ArticlesData} from "./HomePage";

export const useData = (url:string) => {
    const [data, setData] = React.useState<ArticlesData[]>([])
    const [visibleData, setVisibleData] = React.useState<ArticlesData[]>([])

    React.useEffect(() => {
        axios.get(url)
            .then(res => {
                //get data from API set for search and filter
                setData(res.data)
                setVisibleData(res.data)
            })
    }, []);

    return {data, visibleData,setVisibleData}

}


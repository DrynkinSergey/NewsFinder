import React from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import styles from './ArticlePage.module.scss'

interface ArticlesData {
    id?: number,
    author?: string,
    title?: string,
    imageUrl?: string,
    summary?: string,
    publishedAt?: string,

}

const ArticlePage = () => {
    const [data, setData] = React.useState<ArticlesData>()
    const {id} = useParams()
    const url = `https://api.spaceflightnewsapi.net/v3/articles/${id}`
    React.useEffect(() => {
        axios.get(url)
            .then(res => {
                //get data from API set for search and filter
                setData(res.data)
            })
    }, []);
    return (
        <>

            <main className={styles.article}>
                <img className={styles.articleImg} src={data?.imageUrl} alt="articleImg"/>
                <div className={styles.content}>
                    <h1>{data?.title}</h1>
                    <h2>{data?.summary}</h2>
                    <Link className={styles.btnBack} to='/'>
                        Back to homepage
                    </Link>
                </div>
            </main>
        </>
    );
};

export default ArticlePage;

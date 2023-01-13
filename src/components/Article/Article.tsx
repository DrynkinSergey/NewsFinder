import React from 'react';
import styles from './Article.module.scss'
import {ArticlesData} from "../../App";


const Article = (props:ArticlesData) => {

    return (
        <article className={styles.article}>
            <img src={props.urlToImage} alt="articleImg"/>
            <div className={styles.date}>{props.publishedAt}</div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.description}</div>
            <a href='#'>Read more </a>
        </article>
    );
};

export default Article;

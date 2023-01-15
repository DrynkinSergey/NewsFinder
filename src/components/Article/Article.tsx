import React from 'react';
import styles from './Article.module.scss'
import {ArticlesData} from "../../App";
import Highlighter from "react-highlight-words";


const Article = (props:ArticlesData) => {
    return (
        <article className={styles.article}>
            <img src={props.urlToImage} alt="articleImg"/>
            <div className={styles.date}>{props.publishedAt}</div>
            {/*<div className={styles.title}>{props.title.slice(0,70)}...</div>*/}
            <div className={styles.title}> <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={props.tags}
                autoEscape={true}
                textToHighlight={props.title.slice(0,70)}
            /></div>

            <div className={styles.description}>{props.description.slice(0,100)}...</div>
            <a href='#'>Read more </a>
        </article>
    );
};

export default Article;

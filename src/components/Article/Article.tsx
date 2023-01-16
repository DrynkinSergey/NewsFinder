import React from 'react';
import styles from './Article.module.scss'

import Highlighter from "react-highlight-words";
import {ArticlesData} from "../../Pages/HomePage";


const Article = (props: ArticlesData) => {
    return (
        <article className={styles.article}>
            <img src={props.imageUrl} alt="articleImg"/>
            <div className={styles.date}>{props.publishedAt}</div>

            <div className={styles.title}>
                <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={props.tags}
                    autoEscape={true}
                    textToHighlight={props.title}
                />
            </div>

            <div className={styles.description}>
                <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={props.tags}
                    autoEscape={true}
                    textToHighlight={props.summary}
                />
                ...
            </div>
            <a href='#'>Read more </a>
        </article>
    );
};

export default Article;

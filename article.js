import React from 'react';
import { useParams } from 'react-router-dom';
import articleContent from "./article-content.js";

const Article = () =>{
    const { name } = useParams();
    //To show article related to given name as a paramter in URL
    const article = articleContent.find((article)=>article.name === name);
    console.log(name);
    //if article does not exist, we can apply condition
    if(!article){
        return <p>Article does not exist</p>
    }
    return (<div>
        <h1>
            {article.title}
        </h1>
        {article.content.map((paragraph)=>(
            <p className ='mx-auto leading-relaxed text-base mb-4'>{paragraph}</p>
        ))}
    </div>);
}

export default Article;
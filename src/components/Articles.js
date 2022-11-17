

export default function Articles(props) {
    
    return (
       props.articles.map((article) => ( 
       <div id="articles">
            <h2 style={{cursor: "pointer", display: "inline-block"}
}
        onClick ={()=>window.open(article.url , '_blank')}
            >{article.title}</h2>
            <p>{article.points} points by {article.author} {article.created_at} | hide | {article.num_comments} comments</p>
        </div> )
    )
    );
}
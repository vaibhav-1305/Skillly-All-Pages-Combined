import React from "react";


function articleBox(props) {
    return (
            <div class="article">

                <img class="article-img" src={props.image} alt="Article-Image" />

                <div class="article-heading">
                    {props.title}
                </div>


                <div class="article-text">
                    {props.description}
                </div>

            </div>
    );
}


export default articleBox
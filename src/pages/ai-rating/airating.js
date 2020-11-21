import React from "react";
import data from '../../data/AiRatingData';
import Readability from './Components/parameter';
import ComparisonGraph from './Components/comparisonGraph';
import '../../Css/AiRatings/AiRating.css'
import LoadingAnimation from '../../shared/loading'

class AiRating extends React.Component {

    constructor() {
        super();
        this.enableMessage = this.enableMessage.bind(this);
        this.state = {
            taskTitle: data.taskTitle,
            isLoading: true
        }

        this.timer = setTimeout(this.enableMessage,4000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
      }
    
    enableMessage() {
        this.setState({displayMessage: true, isLoading: false});
    }

    render() {
        const pageIsLoading = <LoadingAnimation />
        

        const pageIsNotLoading = 

        <div className="ai-rating-total-grid"> 
                
                <div className="ai-rating-headings">
                    <div className="article-topic">
                        <h1>Dunk of the Dunkin {this.state.taskTitle} </h1>
                    </div>

                    <div id="rating-nav">
                        <a href="#overview">OVERVIEW</a>
                        <a href="#review">REVIEW</a>
                        <a href="#ai-review" class="active">AI REVIEW</a>
                        <a href="#engagement">ENGAGEMENT</a>
                    </div>
                    
                </div> 
            
                <div className="parameters">
                    <div className="ai-rating-sub-grid">
                                <div className="box1">
                                    <Readability name="Readability" />
                                </div>
                                
                                
                                <div className="box2">
                                    <Readability name="Readability" />
                                </div>
                                

                                <div className="box3">
                                    <Readability name="Readability" />
                                </div>
                                

                                <div className="box4">
                                    <Readability name="Readability" />
                                </div>
                    </div>
                </div>

                <div className="comp-graph">
                    <ComparisonGraph />
                </div>
        </div>;

        let pageContent;

        if(this.state.isLoading) {
            pageContent = pageIsLoading;
        }
        else {
            pageContent = pageIsNotLoading;
        }

        return (
            pageContent
        );
    }
}

export default AiRating

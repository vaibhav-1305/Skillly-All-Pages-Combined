import React from "react";
import LoadingAnimation from '../../shared/loading'
import ReviewBox from './Components/reviewbox';
import data from '../../data/readreview'
import '../../Css/read-review/readreview.css'

class ReadReview extends React.Component {

    constructor() {
        super();
        // this.enableMessage = this.enableMessage.bind(this);
        this.state = {
            isLoading: true
        }

        // this.timer = setTimeout(this.enableMessage,4000);
    }

    // componentWillUnmount() {
    //     clearTimeout(this.timer);
    //   }
    
    // enableMessage() {
    //     this.setState({displayMessage: true, isLoading: false});
    // }

    render() {
        // const pageIsLoading = <LoadingAnimation />
        

        // const pageIsNotLoading = 

        // let pageContent;

        // if(this.state.isLoading) {
        //     pageContent = pageIsLoading;
        // }
        // else {
        //     pageContent = pageIsNotLoading;
        // }
        var ctr = 0;
        const reviewBoxCallingArray = data.map((item) =>{
            ctr++;
            return(<ReviewBox key = {item.id} reviewNumber = {ctr} questions = {item.questions} answers = {item.answers} image = {item.image} />);
        })

        return (
            // pageContent
            <div>
                <div className="total-grid"> 
                    <div className="headings">

                        <div className="article-topic">
                            <h1>Dunk of the Dunkin</h1>
                        </div>

                        <div className="sub-nav" id="task-nav">
                            <a href="#all">OVERVIEW</a>
                            <a href="#Started" className="active">REVIEW</a>
                            <a href="#Completed">AI REVIEW</a>
                            <a href="#ondisplay">ENGAGEMENT</a>
                        </div>
                    </div>

                </div>

                <div className="read-reviews">
                    <div className="content-box-review-box">
                        {reviewBoxCallingArray}
                    </div>
                </div>    
            </div>


        );
    }
}

export default ReadReview;

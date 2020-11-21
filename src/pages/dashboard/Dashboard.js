import React from "react"
import "../../font-awesome/css/font-awesome.min.css"

import ArticleBox from "./ArticleBox.js"
import QuickOverviewBox from "./QuickOverviewBox.js"
import '../../Css/dashboard/Dashboard.css'
import LoadingAnimation from '../../shared/loading'

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.enableMessage = this.enableMessage.bind(this);

        this.state = {
          displayMessage: false,
          isLoading: true
        };

        this.timer = setTimeout(this.enableMessage,4000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  enableMessage() {
    this.setState({displayMessage: true, isLoading: false});
  }

    render() {

        const articleboxes = this.props.dashboarddata.map((articleinfo) => {
            return (
            <ArticleBox articleinfo={articleinfo}/>
            );
        });

        
        const pageIsLoading = <LoadingAnimation />
        

        const pageIsNotLoading = 
         
            <div className="total-grid" >

              <div className="headings">
                <h1>Your Tasks</h1>

                <div className="sub-nav" id="task-nav">
                  <a href="#all" className="active">ALL</a>
                  <a href="#Started">STARTED</a>
                  <a href="#Completed">COMPLETED</a>
                  <a href="#ondisplay">ON DISPLAY</a>

                </div>
              </div>

              {articleboxes}

              <div className="quick-view" id="">
                <div className="quickv">
                  <div id="donut-chart">
                    <img src="images/donutchart.png" alt=""/>
                  </div>
                  <hr className="rule"/>
                  <div id="past-transactions">

                  </div>
                </div>
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

export default Dashboard

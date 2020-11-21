import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from './shared/Header.js';
import Sidebar from './shared/Sidebar.js';
import Footer from './shared/Footer.js';

import Analytics from './pages/analytics/Analytics.js';
import Dashboard from './pages/dashboard/Dashboard.js';
import Portfolio from './pages/portfolio/portfolio';
import QuestionLike from './pages/review-article-questions/questionlike';
import QuestionDislike from './pages/review-article-questions/questiondislike';
import Profile from './pages/profile/profile'
import ReviewPage from './pages/review-page/ReviewPage'
import TaskPage from './pages/task-page/TaskPage'
import Engagement from './pages/engagement/Engagement'
import AiRating from './pages/ai-rating/airating'


import AnalyticsData from './data/AnalyticsData.js'
import DashboardData from './data/DashboardData.js'
import QuickOverviewData from './data/QuickOverviewData.js'

import ReviewMore from './pages/review-more/reviewmore'

import ReadReview from './pages/read-review/readreview'

import "./Css/Mediator.css"


  /*     <Analytics analyticsdata={this.state.analyticsdata}/>*/
  //<Portfolio />
  //        <Dashboard dashboarddata={this.state.dashboarddata} quickoverviewdata = {this.state.quickoverviewdata}/>
class Mediator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      analyticsdata: AnalyticsData,
      dashboarddata: DashboardData,
      quickoverviewdata : QuickOverviewData
    };
  }
  render() {
    /*
    ************ISSUE*************
    Sidenav not displayed properly
    */
    const DashboardPage = () => {
      return(
          <Dashboard dashboarddata={this.state.dashboarddata} quickoverviewdata = {this.state.quickoverviewdata}/>
      );
    }
    const AnalyticsPage = () => {
      return(
          <Analytics analyticsdata={this.state.analyticsdata}/>
      );
    }

    const ReviewMorePage = () => {
      return(
          <ReviewMore />
      );
    }

    /*
    ************ISSUE*************
    - We are not supposed to show Navbar and Header for this page
*/

    const PortfolioPage = () => {
      return(
          <Portfolio />
      );
    }
/*
    ************ISSUE*************
    - Can't figure out how to call this page which in turn calls three seperate pages which are interconnected
    - Sidenav not displayed properly in each question wala page
*/


    // const ReviewArticleQuestionComponent = () => {
    //   return( < ReviewArticleQuestion />)
    // }

    const QuestionLikeComponent = () => {
      return( < QuestionLike />)
    }

    const QuestionDislikeComponent = () => {
      return( < QuestionDislike />)
    }


    const ProfileComponent = () => {
      return( < Profile />)
    }

    const ReviewPageComponent = () => {
      return( < ReviewPage />)
    }

    const TaskPageComponent = () => {
      return( < TaskPage />)
    }

    const EngagementComponent = () => {
      return( < Engagement />)
    }

    const AiRatingComponent = () => {
      return( < AiRating />)
    }

    const ReadReviewComponent = () => {
      return( < ReadReview />)
    }


    return (
      <Router>
      <div className="Mediator">
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/Review-more" component={ReviewMorePage} />
          <Route path='/portfolio' component={PortfolioPage} />
          <Route path='/analytics' component={AnalyticsPage} />
          <Route path='/profile' component={ProfileComponent} />
          <Route path='/question-like' component={QuestionLikeComponent} />
          <Route path='/question-dislike' component={QuestionDislikeComponent} />
          <Route path='/engagement' component={EngagementComponent} />
          <Route path='/airating' component={AiRatingComponent} />
          <Route path='/task-page' component={TaskPageComponent} />
          <Route path='/read-review' component={ReadReviewComponent} />
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}
export default Mediator;

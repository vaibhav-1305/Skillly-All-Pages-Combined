import React from "react"
import '../../Css/analytics/Analytics.css';

class AnalyticsStructure extends React.Component {
/*
    constructor(props) {
        super(props);
    }*/
    render() {
        const analyticspage = this.props.article
        return (
            <div className="total-grid-i">
                <div className="headings-analytics">
                  <div className="article-topic-analytics">
                    <h1>Dunk of the Dunkin</h1>
                  </div>

                      <div className="sub-nav" id="task-nav-analytics">
                          <a href="#all" className="active-analytics">OVERVIEW</a>
                          <a href="#Started">REVIEW</a>
                          <a href="#Completed">AI REVIEW</a>
                          <a href="#ondisplay">ENGAGEMENT</a>
                    </div>
                  </div>

                  <div className="overview-analytics">
                        <div className="overview-box-analytics">

                          <div className="individual-box-analytics">
                              <div className="stat-heading-analytics">
                              Skilllies Earned
                              </div>
                              <div className="stat-value-analytics">
                              $ {analyticspage.SkillliesEarned} <span>  +24.8%</span>
                              </div>
                          </div>

                          <div className="individual-box-analytics">
                            <div className="stat-heading-analytics">
                            Review Rating
                            </div>
                            <div className="stat-value-analytics">
                            {analyticspage.reviewRating} <span>  +24.8%</span>
                            </div>
                          </div>

                          <div className="individual-box-analytics">
                            <div className="stat-heading-analytics">
                            AI Rating
                            </div>
                            <div className="stat-value-analytics">
                            {analyticspage.aiRating} <span>  +24.8%</span>
                            </div>
                          </div>

                          <div className="individual-box-analytics">
                            <div className="stat-heading-analytics">
                            Days Spent
                            </div>
                            <div className="stat-value-analytics">
                            {analyticspage.DaysTaken} <span>  +24.8%</span>
                            </div>
                          </div>

                          </div>
                  </div>

                  <div className="content1">
                        <div className="content-box">
                          <div>word cloud image
                          </div>
                          </div>
                  </div>

                  <div className="content2">
                        <div className="content-box">
                          <div>
                            <table className="content-table">
                              <thead>
                              <tr>
                                <th>Parameter</th>
                                <th>You</th>
                                <th>Avg User</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td>Skilllies Earned</td>
                                <td>$ {analyticspage.SkillliesEarned}</td>
                                <td>$ 39</td>
                              </tr>
                              <tr>
                                <td>Review Rating</td>
                                <td>{analyticspage.reviewRating}</td>
                                <td>3.8</td>
                              </tr>
                              <tr>
                                <td>AI Rating</td>
                                <td>{analyticspage.aiRating}</td>
                                <td>74</td>
                              </tr>

                              <tr>
                                <td>Days Spent</td>
                                <td>{analyticspage.DaysTaken}</td>
                                <td>4</td>
                              </tr>
                              </tbody>
                            </table>

                          </div>
                          </div>
                  </div>
                  <div className="footerp">
                      footer
                  </div>
              </div>
        );
    }
}

export default AnalyticsStructure

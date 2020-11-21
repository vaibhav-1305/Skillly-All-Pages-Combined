import React from 'react';

class RightGridTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="right-grid-tile">
            <div class="trending-articles">
                <div class="rank">
                    {"#" + this.props.rank}
                </div>

                <div class="trending-article-content">
                    <div class="trending-article-content-heading">
                        {this.props.title}
                    </div>

                    <span class="trending-article-content-text">
                        {this.props.metaText}
                    </span>

                    <div class="trending-article-content-details">
                        <div class="trending-article-content-date">
                            {this.props.date}
                        </div>
                        <div class="trending-article-content-length">
                            {this.props.readTime}
                        </div>
                    </div>
                </div>

                <img class="trending-articles-image" src={this.props.image} alt="" />
                
            </div>
        </div>
    );
  }
}
export default RightGridTile;

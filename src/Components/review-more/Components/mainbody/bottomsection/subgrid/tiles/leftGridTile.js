import React from 'react';
import { Grid } from '@material-ui/core';

class LeftGridTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="left-grid-tile">
            <Grid container spacing={1}>

                <div class="genre-articles">

                    <Grid item md={12} sm={4}>
                        <img class="genre-article-image" src={this.props.image} alt="" />
                    </Grid>

                    <Grid item md={12} sm={8}>
                        <div class="genre-article-heading">
                            {this.props.title}
                        </div>

                        <div class="genre-article-text">
                            {this.props.metaText}
                        </div>

                        <div class="genre-article-details">
                            <div class="genre-article-date">
                                {this.props.date}
                            </div>
                            <div class="genre-article-read-time">
                                {this.props.readTime}
                            </div>
                        </div>
                    </Grid>

                </div>

            </Grid>
        </div>
    );
  }
}
export default LeftGridTile;

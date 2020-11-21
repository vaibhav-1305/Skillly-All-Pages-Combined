import React from 'react';
import '../../../../../Css/review-more/bottomsection/bottomgrid.css'
import { Grid } from '@material-ui/core';
import Leftgrid from './subgrid/leftgrid';
import Rightgrid from './subgrid/rightgrid';


class Bottomgrid extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Grid container spacing={2} className="bottom-grid">

                <Grid item lg={8} xs={12} className="bottom-grid-left-article">
                    <Leftgrid />
                </Grid>

                <Grid item lg={4} xs={12} className="bottom-grid-right-article">
                    <Rightgrid />
                </Grid>
            </Grid>
        );
    }
}
export default Bottomgrid;

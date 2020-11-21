import React from "react"
import "../../font-awesome/css/font-awesome.min.css"
import AnalyticsStructure from "./AnalyticsStructure.js"
import LoadingAnimation from '../../shared/loading'


class Analytics extends React.Component {

    constructor(props) {
        super(props);
        this.enableMessage = this.enableMessage.bind(this);
        
        this.state = {
            isLoading: true
        }
        this.timer = setTimeout(this.enableMessage,4000);
        
    }


    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    
    enableMessage() {
        this.setState({isLoading: false});
    }

      
    render() {
        const analyticsoverview = this.props.analyticsdata.map((article) => {
            return (
            <AnalyticsStructure article={article}/>
            );
        });

        
        const pageIsLoading = <LoadingAnimation />
        

        const pageIsNotLoading = 
                <div>
                    {analyticsoverview}
                </div>


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

export default Analytics

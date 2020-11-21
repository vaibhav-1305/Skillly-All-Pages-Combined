import React from 'react';
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';
import Mainody from './Components/mainbody/mainbody';
import '../../Css/review-more/review-more.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <Sidebar />
                <Header />
                <Mainody />
            </div>
        );
    }
}
export default App;

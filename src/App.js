import React, {Component} from 'react';

import NavBar from './components/NavBar'
import Main from './components/Main'


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <NavBar />
                </div>
                <div className="container-fluid">
                    <Main />
                </div>
            </div>
        );
    }
}

export default App;

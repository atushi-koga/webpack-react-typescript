import React from 'react';
import ReactDOM from 'react-dom';

import {HelloWorld} from './sub';

class App extends React.Component {
    render() {
        return (
            <div>
                <HelloWorld name="okutani" />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
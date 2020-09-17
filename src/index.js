import React from 'react';
import ReactDOM from 'react-dom';

import {HelloWorld} from './sub';

console.log(process.env.NODE_ENV);

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
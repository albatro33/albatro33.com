import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, About } from 'pages';


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Main} />
                <Switch>
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        );
    }
}

export default App;
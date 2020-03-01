import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { grommet } from "grommet/themes";
import { Main as GMain, Grommet } from "grommet";
import { Main, About } from 'pages';
import { Header } from "components";


class Layout extends Component {
    render() {
        return (
            <Grommet theme={grommet}>
                <Header />
                <GMain>

                    <Route exact path="/" component={Main} />
                    <Switch>
                        <Route path="/about/:name" component={About} />
                        <Route path="/about" component={About} />
                    </Switch>
                </GMain>
            </Grommet>
        );
    }
}

export default Layout;
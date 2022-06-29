import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { grommet } from "grommet/themes";
import { Main as GMain, Grommet } from "grommet";
import { Main, About } from "pages";
import { Header } from "components";
import Post from "../pages/Post";

class Layout extends Component {
  render() {
    return (
      <Grommet theme={grommet}>
        <Header />
        <GMain>
          <Route exact path="/" component={Main} />
          <Switch>
            <Route path="/post" component={Post} />
            <Route path="/about" component={About} />
          </Switch>
        </GMain>
      </Grommet>
    );
  }
}

export default Layout;

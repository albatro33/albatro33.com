import React from "react";
import { Header as MyHeader } from "grommet";
import { GNB } from "components";

class Header extends React.Component {
    render() {
        return (
            <MyHeader background="dark-1" pad="medium">
                Albatro33's World Wide What???
                <GNB />
            </MyHeader>
        )
    }
}

export default Header;
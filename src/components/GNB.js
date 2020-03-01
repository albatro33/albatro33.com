import React from "react";
import { Nav, Anchor } from "grommet";

const items = [
    { label: "Albatro33", href: "#" },
    { label: "Post", href: "#" }
];

const GNB = () => {
    return (
        <Nav direction="row">
            {items.map(item => (
                <Anchor href={item.href} label={item.label} key={item.label} />
            ))}
        </Nav>
    )
}

export default GNB;
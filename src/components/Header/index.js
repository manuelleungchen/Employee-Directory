import React from "react";
import "./style.css";

function Header() {

    return (
        <nav>
            <section id="header">
                <h1>Employee Directory</h1>
                <p>CLick on headings to apply filters or use searchbar to narrow results</p>
            </section>
            <section id="searchbar">
                <input type="search" id="form1" className="form-control" placeholder="Search by Name" />
            </section>
        </nav>
    )
}

export default Header;
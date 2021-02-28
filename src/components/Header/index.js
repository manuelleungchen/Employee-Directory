import React from "react";
import "./style.css";

function Header(props) {

    return (
        <nav>
            <section id="header">
                <h1>Employee Directory</h1>
                <p>CLick on headings to apply filters or use searchbar to narrow results</p>
            </section>
            <section id="searchbar">
                <input 
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text" 
                id="search" 
                className="form-control"
                placeholder="Search by Name"
                
                />
            </section>
        </nav>
    )
}


export default Header;
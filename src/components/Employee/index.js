import React, { Component } from "react";
import "./style.css";
import Image from "../images/profile.png"

class Employee extends Component {
    render() {
        return (
            <section className="row" id="row">
                <img className="col-2" src={Image}></img>
                <p className="col-3">Manuel Leung Chen</p>
                <p className="col-2">647-234-2342</p>
                <a className="col-3" href="mailto:webmaster@example.com">webmaster@example.com</a>
                <p className="col-2">Febraery 28, 2012</p>
            </section>
        )
    }
}

export default Employee;
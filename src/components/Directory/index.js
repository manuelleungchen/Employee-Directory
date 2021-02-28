import React, { Component } from "react";
import "./style.css";
import Employee from "../Employee/"

class Directory extends Component {

    render() {
        return (
            <article className="container">
                <header className="row" id="directory-header">
                    <h5 className="col-2">Image</h5>
                    <h5 className="col-3">Name</h5>
                    <h5 className="col-2">Phone</h5>
                    <h5 className="col-3">Email</h5>
                    <h5 className="col-2">DOB</h5>
                </header>

                <div className="employee-list">
                    <Employee />
                    <Employee />
                    <Employee />
                </div>
            </article>
        )
    }
}

export default Directory;
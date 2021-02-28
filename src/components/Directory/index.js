import React from "react";
import "./style.css";

function Directory(props) {

    let users = props.results.filter(user => {
        const fullname = user.name.first + user.name.last;
        return fullname.toLowerCase().includes(props.search.toLowerCase())
    }).map(user => {
        let phone = user.phone.replace(/\D/g, "")

        if (phone === null) {
            phone = user.phone
        }

        let dob = user.dob.date.match(/(.{10})/)[0]

        return (
            <section className="row" id="row" key={user.cell}>
                <img className="col-2" src={user.picture.medium} alt={user.picture.thumbnail}></img>
                <p className="col-3">{user.name.first} {user.name.last}</p>
                <p className="col-2">{phone}</p>
                <a className="col-3" href="#">{user.email}</a>
                <p className="col-2">{dob}</p>
            </section>
        )
    })

    return (
        <article className="container">
            <header className="row" id="directory-header">
                <h5 className="col-2">Image</h5>
                <h5 className="col-3" onClick={props.sortByName} >Name</h5>
                <h5 className="col-2" onClick={props.sortByPhone}>Phone</h5>
                <h5 className="col-3" onClick={props.sortByEmail}>Email</h5>
                <h5 className="col-2">DOB</h5>
            </header>

            <div className="employee-list">
                {users}
            </div>
        </article>
    )
}

export default Directory;
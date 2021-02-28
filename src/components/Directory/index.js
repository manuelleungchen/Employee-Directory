import React from "react";
import "./style.css";

function Directory(props) {

    let users = props.results.filter(user => {
        return user.fullname.toLowerCase().includes(props.search.toLowerCase())
    }).map(user => {
        // Format the phone number
        const phone = user.phone.replace(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/, "($1) $2-$3")

        // Format the DOB date
        const dobMatches = user.dob.match(/^([0-9]{4})?([0-9]{2})?([0-9]{2})?$/)
        const dob = `${dobMatches[2]}/${dobMatches[3]}/${dobMatches[1]}`

        return (
            // Create section element for each user
            <section className="row" id="row" key={user.id}>
                <img className="col-2" src={user.picture} alt={user.fullname} ></img>
                <p className="col-3" >{user.fullname}</p>
                <p className="col-2" >{phone}</p>
                <a className="col-3" href={user.email} >{user.email}</a>
                <p className="col-2" >{dob}</p>
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
                <h5 className="col-2" onClick={props.sortByDOB}>DOB</h5>
            </header>

            <div className="employee-list">
                {users}
            </div>
        </article>
    )
}

export default Directory;
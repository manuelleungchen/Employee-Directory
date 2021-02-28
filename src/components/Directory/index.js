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
            <tr key={user.id}>
                <td><img src={user.picture} alt={user.fullname} ></img></td>
                <td>
                    <p>{user.fullname}</p>
                </td>
                <td>
                    <p>{phone}</p>
                </td>
                <td><a href={user.email} >{user.email}</a></td>
                <td>
                    <p>{dob}</p>
                </td>
            </tr>
        )
    })

    return (
        <article className="container">
            <table className="table table-success table-hover table-striped" id="dir-Table">
                <thead id="directory-header">
                    <tr>
                        <th scope="col"><h5>Picture</h5></th>
                        <th scope="col" onClick={props.sortByName}><h5>Fullname</h5></th>
                        <th scope="col" onClick={props.sortByPhone}><h5>Phone</h5></th>
                        <th scope="col" onClick={props.sortByEmail}><h5>Email</h5></th>
                        <th scope="col" onClick={props.sortByDOB}><h5>DOB</h5></th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
            </table>
        </article>
    )
}

export default Directory;
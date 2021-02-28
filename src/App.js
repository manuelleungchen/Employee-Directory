import './App.css';
import Header from "./components/Header";
import Directory from "./components/Directory";
import { Component } from 'react';
import API from "./utils/API";


class App extends Component {

    state = {
        search: "",     // Storage the search value
        results: [],      // Sorage Users data
        ascending: true  // Storage the order for sortering
    };

    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
        this.searchRandomUsers();
    }

    searchRandomUsers = () => {
        API.search("?results=10")
            .then(res => {

                let formattedData = res.data.results.map(user => {
                    let phone = user.phone.replace(/\D/g, "");

                    // Add extra Zeros for incompleted phone number
                    if(phone.length < 10) {
                        phone = "0".repeat(10-phone.length) + phone;
                    }
                    // Remove international code from phone number
                    if(phone.length > 10){
                        const interCodeLength = phone.length - 10;
                        phone = phone.slice(interCodeLength, phone.length)
                    }

                    return {
                        id: user.cell,
                        picture: user.picture.large,
                        fullname: `${user.name.first} ${user.name.last}`,
                        phone: phone,
                        email: user.email,
                        dob: user.dob.date.match(/(.{10})/)[0].replace(/\D/g, "")
                    }
                })

                this.setState({
                    results: formattedData.sort(
                        function (a, b) {
                            var nameA = a.fullname.toUpperCase(); // ignore upper and lowercase
                            var nameB = b.fullname.toUpperCase(); // ignore upper and lowercase
                            return (nameA < nameB ? 1 : nameA > nameB ? -1 : 0)
                        }
                    )
                })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
  

        this.setState({
            [name]: value
        });
    };

    sortByPhone = () => {
        this.setState({ ascending: !this.state.ascending })
        const order = this.state.ascending;

        console.log("by phone")
        this.setState({
            results: this.state.results.sort(function (a, b) {
                return (order ? (a.phone - b.phone) : (b.phone - a.phone));
            })
        })
    }

    sortByName = () => {
        this.setState({ ascending: !this.state.ascending })
        const order = this.state.ascending;

        console.log("by name")

        this.setState({
            results: this.state.results.sort(
                function (a, b) {
                    var x = a.fullname.toUpperCase(); // ignore upper and lowercase
                    var y = b.fullname.toUpperCase(); // ignore upper and lowercase

                    return (order ? (x < y ? 1 : x > y ? -1 : 0) : (x < y ? -1 : x > y ? 1 : 0));
                })
        })
    }


    sortByEmail = () => {
        this.setState({ ascending: !this.state.ascending })
        const order = this.state.ascending;

        console.log("by email")

        this.setState({
            results: this.state.results.sort(
                function (a, b) {
                    var x = a.email.toUpperCase(); // ignore upper and lowercase
                    var y = b.email.toUpperCase(); // ignore upper and lowercase

                    return (order ? (x < y ? 1 : x > y ? -1 : 0) : (x < y ? -1 : x > y ? 1 : 0));
                })
        })
    }

    sortByDOB = () => {
        this.setState({ ascending: !this.state.ascending })
        const order = this.state.ascending;

        console.log("by DOB")
        this.setState({
            results: this.state.results.sort(function (a, b) {
                return (order ? (a.dob - b.dob) : (b.dob - a.dob));
            })
        })
    }


    render() {

        return (
            <article>
                <Header
                    search={this.state.search}
                    // handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <Directory
                    results={this.state.results}
                    search={this.state.search}
                    sortByEmail={this.sortByEmail}
                    sortByName={this.sortByName}
                    sortByPhone={this.sortByPhone}
                    sortByDOB={this.sortByDOB}
                // sort={this.state.sort} 
                />
            </article>
        );
    }

}

export default App;

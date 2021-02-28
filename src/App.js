import './App.css';
import Header from "./components/Header";
import Directory from "./components/Directory";
import { Component } from 'react';
import API from "./utils/API";


class App extends Component {

    // order = false;

    state = {
        search: "",
        results: [],
        ascending: true
    };

    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
        this.searchRandomUsers();
    }

    searchRandomUsers = () => {
        API.search("?results=10")
            .then(res => {
                this.setState({
                    results: res.data.results.sort(

                        //     function(a, b) {
                        //     var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
                        //     var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
                        //     if (nameA < nameB) {
                        //       return -1;
                        //     }
                        //     if (nameA > nameB) {
                        //       return 1;
                        //     }

                        //     // names must be equal
                        //     return 0;
                        //   }
                        function (a, b) {
                            var nameA = a.email.toUpperCase(); // ignore upper and lowercase
                            var nameB = b.email.toUpperCase(); // ignore upper and lowercase
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }

                            // email must be equal
                            return 0;
                        }
                    )
                })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name)
        console.log(value)

        this.setState({
            [name]: value
        });
    };

      sortByPhone = () => {
        this.setState({ ascending: !this.state.ascending })
        const order = this.state.ascending;

        console.log("by phone")
          this.setState({
              ["results"]: this.state.results.sort(function (a, b) {
                return (order ? (a.phone - b.phone) : (b.phone - a.phone));
              })
          })
      }

    sortByName = () => {
        this.setState({ ascending: !this.state.ascending })
        const order = this.state.ascending;

        console.log("by name")

        this.setState({
            ["results"]: this.state.results.sort(
                function (a, b) {
                    var x = a.name.first.toUpperCase(); // ignore upper and lowercase
                    var y = b.name.last.toUpperCase(); // ignore upper and lowercase

                    return (order ? (x < y ? 1 : x > y ? -1 : 0) : (x < y ? -1 : x > y ? 1 : 0));
                })
        })
    }


    sortByEmail = () => {
        this.setState({ ascending: !this.state.ascending })
        const order = this.state.ascending;

        console.log("by email")

        this.setState({
            ["results"]: this.state.results.sort(
                function (a, b) {
                    var x = a.email.toUpperCase(); // ignore upper and lowercase
                    var y = b.email.toUpperCase(); // ignore upper and lowercase

                    return (order ? (x < y ? 1 : x > y ? -1 : 0) : (x < y ? -1 : x > y ? 1 : 0));
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
                // sort={this.state.sort} 
                />
            </article>
        );
    }

}

export default App;

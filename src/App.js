import './App.css';
import Header from "./components/Header";

import Directory from "./components/Directory";
import { Component } from 'react';
import API from "./utils/API";



class App extends Component {

    state = {
        search: "",
        results: []
      };
    
      // When this component mounts, search the Giphy API for pictures of kittens
      componentDidMount() {
        this.searchGiphy();
      }
    
      searchGiphy = () => {
        API.search("?results=10")
          .then(res => {
            this.setState({ results: res })
            console.log(res)
          })
          .catch(err => console.log(err));
      };
    
    //   handleInputChange = event => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState({
    //       [name]: value
    //     });
    //   };
    
    //   // When the form is submitted, search the Giphy API for `this.state.search`
    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchGiphy(this.state.search);
    //   };

    render(){

        return (
            <article>
                <Header />
                <Directory />
            </article>
        );
    }
    
}

export default App;

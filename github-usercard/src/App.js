import React from 'react';
import './App.css';
import axios from 'axios';
import CardGrid from './Components/CardGrid'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hubUser: [],
    };
  }

componentDidMount() {
  this.hubUser();
};

fetchUser = () => {
  axios
    .get("https://api.github.com/users/prouty89")
    .then(res => {
      this.setState({ hubUser: res.message})
    })
    .catch(err => {
      console.log("error", err)
    })
}


render () {
  return (
    <div className="App">
      Hello
      <CardGrid hubUser={this.state.hubUser} />
    </div>
    );
  }
}

export default App;

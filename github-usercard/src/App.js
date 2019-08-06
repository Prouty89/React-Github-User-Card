    
import React from "react";
import "./App.css";


const API = 'https://api.github.com/users';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'Prouty89',
      name:'',
      avatar:'',
      location:'',
      repos:'',
      followers: '',
      following:'',
      homeUrl:'',
      notFound:''
    }
  }
  fetchProfile(username) { 
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        })
      })
      .catch((error) => console.log('err') )
  }
  componentDidMount() {
    this.fetchProfile(this.state.username);
  }
  render() {
    return (
      <div>
         <section id="card">
           <Profile data={this.state} />
         </section>
      </div>
    )
  }
}


class Profile extends React.Component {
  render() {
    let data = this.props.data;
    let followers = `${data.homeUrl}/followers`;
    let repositories = `${data.homeUrl}?tab=repositories`;
    let following = `${data.homeUrl}/following`;
    if (data.notFound === 'Not Found')
      return (
         <div className="notfound">
            <h2>Error</h2>
            <p>Could Not Retrieve Data </p>
         </div>
      );
      else
      return (
        <section className="github-profile">
          <div className="profile-info">
            <a href={data.homeUrl} target="_blank" title={data.name || data.username}><img className="profile-image" src={data.avatar} alt={data.username}/></a>
            <h2><a href={data.homeUrl} title={data.username} target="_blank">{data.name || data.username}</a></h2>
            <h3>{data.location || ' '}</h3>
          </div>
          <div className="profile-data">
            <ul>
               <li>
                  <a href={followers} target="_blank" title="Number Of Followers"><span>Followers: </span><b>{data.followers}</b></a>
               </li>
               <li>
                  <a href={repositories} target="_blank" title="Number Of Repository"><span>Repository Count: </span><b>{data.repos}</b></a>
               </li>
               <li>
                  <a href={following} target="_blank" title="Number Of Following"><span>Following: </span><b>{data.following}</b></a>
               </li>
            </ul>
          </div>
        </section>
      );
  }
}
export default App;
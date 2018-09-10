import React, { Component } from 'react';
import Title from './components/Title';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Signin from './components/Signin';
import Page from './components/Page';
import Busy from './components/Busy';
import './App.css';
import 'tachyons';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      seed : [],
      route : "Signin",
      isSignedIn: false,
      info: [],
      hasInfo: false,
      machine: true
    };
  }

  fetchMachines=()=>
  {
    this.setState({
      machine: false
    });
  }

  setData = (data) =>
  {
    this.setState({
      seed:data,
      machine: true
    });
  }

  setMachineData = (data) =>
  {
    this.setState({
      machine: true
    });
    if(data != null)
    {
      this.setState({
        info: data,
        hasInfo: true
      });
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false,
        seed: [],
        info: [],
        hasInfo: false
      });
    } else if (route === 'home') {
      this.setState({isSignedIn: true,
      info: [],
      hasInfo: false
      });
    }
    this.setState({route: route});
  }

  render() 
  {
    return (
      <div className = "tc" style={{height:'100%'}}>
        <Title isSignedIn = {this.state.isSignedIn} onRouteChange = {this.onRouteChange} hasInfo = {this.state.hasInfo}/>
        {
          this.state.hasInfo
          ? <Page info = {this.state.info} />
          :(this.state.route === 'home' && this.state.isSignedIn
            ? <div>  
                <SearchBox setData = {this.setData} fetchMachines= {this.fetchMachines}/>
                {(
                  this.state.machine
                  ?<CardList seed = {this.state.seed} func = {this.setMachineData} fetchMachines= {this.fetchMachines}/>
                  :<Busy />
                )}
              </div>
            : <Signin onRouteChange = {this.onRouteChange}/>) 
        }
      </div>
    );
  }
}

export default App;
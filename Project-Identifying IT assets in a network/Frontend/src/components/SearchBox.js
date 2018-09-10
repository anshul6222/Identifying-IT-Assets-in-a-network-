import React from 'react';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IP1: '',
      IP2: ''
    }
  }

  onIP1Change = (event) => {
    this.setState({IP1: event.target.value})
  }

  onIP2Change = (event) => {
    this.setState({IP2: event.target.value})
  }

  onSubmit = () => 
  {
    if(this.state.IP1 === '' || this.state.IP2 === '')
      alert('Enter 4th Octet');
    if(parseInt(this.state.IP1, 10) > parseInt(this.state.IP2, 10))
    {
      alert("Enter Valid IPs.");
    }
    else
    {
    // fetch('http://localhost:3000/ping', {
    //   method: 'post',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
    //     IP1: this.state.IP1,
    //     IP2: this.state.IP2
    //   })
    // })
    //   .then(response => response.json())
    //   .then(status => {
    //     this.props.setData(status);
    //     });

    this.props.fetchMachines();
    fetch('http://localhost:3000/pwsh', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        IP1: this.state.IP1,
        IP2: this.state.IP2
      })
    })
      .then(response => response.json())
      .then(status => {
        this.props.setData(status);
        });
    }
  }

  render() {
	return (
        <div className="pa4 black-80 flex flex-wrap">
            <span className="dib left">
            <label className="dib fw4 lh-copy f6" htmlFor="ip1">First Fourth Octet:</label>
        	<input className="pa1 ba b--green bg-lightest-blue" 
            type="number" 
            name="ip1" onChange = {this.onIP1Change}/>
            </span>
            <span className="dib center">
            <label className="dib fw4 lh-copy f6" htmlFor="ip2">Second Fourth Octet:</label>
            <input className="pa1 ba b--green bg-lightest-blue" 
            type="number"
            name="ip2" onChange = {this.onIP2Change}/>
            </span>
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Check Status!" onClick = {this.onSubmit}/> 
        </div>
	);
    }
}
//{/*pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"*/}
//pattern="[012][0-9]{2}.[012][0-9]{2}.[012][0-9]{2}.[012][0-9]{2}"
export default SearchBox;
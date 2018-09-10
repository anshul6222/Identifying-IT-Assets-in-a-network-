import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: -1,
      two: -1,
      three: -1
    }
  }

  onIPChange = (event) => {
    var temp = event.target.value;
    var one = parseInt(temp.substring(0, temp.indexOf('.')), 10);
    var two = parseInt(temp.substring(temp.indexOf('.')+1, temp.lastIndexOf('.')), 10);
    var three = parseInt(temp.substring(temp.lastIndexOf('.')+1), 10);
    if(one >= 0 && one < 256 && two >= 0 && two < 256 && three >= 0 && three < 256)
      this.setState({one: one, two: two, three: three});
    else
      alert("Enter a Valid IP");
  }

  onSubmitSignIn = () => {
    if(document.getElementById("ip").value === '')
    {
      alert('IP cannot be left blank');
    }
    else if(this.state.one >= 0 && this.state.one < 256 && this.state.two >= 0 && this.state.two < 256 && this.state.three >= 0 && this.state.three < 256)
    {
    fetch('http://localhost:3000/admin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        one: this.state.one,
        two: this.state.two,
        three: this.state.three
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user === "success") {
          this.props.onRouteChange('home');
        }
        else
        {
        	alert("Invalid Credentials");
          document.getElementById("name").value = '';
          document.getElementById("password").value = '';
          document.getElementById("ip").value = '';
        }
      });
    }
    else
      alert("Enter a Valid IP");
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Get Started!</legend>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="ip">Enter First 3 Octets:</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text" name="ip" id="ip" required onBlur={this.onIPChange} title="0-255.0-255.0-255"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Next"
              />
            </div>
           </div>
        </main>
      </article>
    );
  }
}

export default Signin;

/*
<div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text" name="email-address" id="name" onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password" name="password" id="password" onChange={this.onPasswordChange}
                />
              </div>
              */
import React from 'react';
import ReactDOM from 'react-dom/client';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false,
      epassword: '',
    };
  }


  getPassword = e=>{
   this.setState({
    epassword: e.target.value,
   })
  }

  

  authorize = event => {

    console.log(this.state.epassword === this.state.password);

    if(this.state.epassword === this.state.password){
        this.setState({
            authorized: true,
          });
          console.log(true);
    }
event.preventDefault();
  }


  render() {
    const login = (
      <form action="#">
        <input value={this.state.epassword} onChange={this.getPassword} type="password" placeholder="Password"/>
        <input onClick={this.authorize} type="submit"/>
      </form>
    );
    const contactInfo = (
      <ul>
        <li>
          client@example.com
        </li>
        <li>
          555.555.5555
        </li>
      </ul>
    );
    return (
      <div id="authorization">
        <h1>{this.state.authorized ? 'Contact' : 'Enter the Password'}</h1>
        {this.state.authorized ? contactInfo : login }
      </div>
    );
  }
}

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Contact />);

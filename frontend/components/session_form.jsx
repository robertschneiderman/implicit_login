import React from 'react';
import $ from 'jquery';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      securId: ""
    };    
  }

    submitForm(e) {
        e.preventDefault();
        let login = $('#login').val();
        let passwd = $('#passwd').val();
        this.props.login({name: login, securId: passwd});
    }

    formChange(field) {
        // debugger;
        return e => { this.setState({[field]: e.currentTarget.value }); };
    }

  render() {
    return(
      <form method="post" onSubmit={this.submitForm.bind(this)}>
        <div className="placeholder"></div>
        <div className="input-group input-group-lg space-top space-bottom">
            <input type="text" autoComplete="off" spellCheck="false" className="form-control" placeholder="Username" id="login" name="login" />
            <div className="input-icon">
                <i className="fa fa-2x fa-user text-primary"></i>
            </div>
        </div>
        <div className="input-group space-top space-bottom input-group-lg">
            <input type="password" autoComplete="off" className="form-control" placeholder="SecurID &reg; (PIN + 6 or 8 digit code)" id="passwd" name="passwd" />
            <div className="input-icon">
                <i className="fa fa-2x fa-lock text-primary"></i>
            </div>
        </div>
        <select id="region" name="region" className="form-control space-bottom-lg">
            <option value="americas-login.gs.com" selected="selected">Americas</option>
            <option value="emea-login.gs.com">Europe, Middle East &amp; Africa</option>
            <option value="apac1-login.gs.com">Asia Pacific (Hong Kong / Japan)</option>
            <option value="apac2-login.gs.com">Asia Pacific (Singapore)</option>
            <option value="china-login.gs.com">GH and GSGH</option>
            <option value="swiss-login.gs.com">GS Bank Zurich</option>
        </select>
        <button type="submit" className="space-top btn-lg btn-block login-btn space-bottom-lg btn btn-primary">Login</button>
      </form>
    );
  }
}

export default SessionForm;
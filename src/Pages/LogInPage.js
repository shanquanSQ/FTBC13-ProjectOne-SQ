import React from "react";
import "../App.css";

export default class LogInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      overlay: false,
    };
  }

  componentDidMount = () => {
    this.setState({
      overlay: true,
    });
  };

  handleTextChange = (ev) => {
    let { name, value } = ev.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    this.props.catalogButton();
  };

  render() {
    return (
      <>
        {this.state.overlay === true && (
          <div className="whiteoverlayLogIn"></div>
        )}
        <div className="halfLogIn">
          <div className="loginImgWrapper">
            <h1 className="openingtext">
              Fruits
              <br />
              Basket
            </h1>
            <img
              src="./Images/loginfruit2.jpg"
              className="loginBG "
              alt="fruity"
            />
          </div>
          <div className="loginWrapper ">
            <div className="text-desc ">
              <form>
                <input
                  id="logIn-username"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleTextChange}
                  autoComplete="off"
                  placeholder="Username"
                  className="input input-bordered input-primary w-full max-w-xs md:max-w-3xl"
                />
              </form>
              <br />
              <form>
                <input
                  id="logIn-password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleTextChange}
                  autoComplete="off"
                  placeholder="Password"
                  className="input input-bordered input-primary w-full max-w-xs md:max-w-3xl"
                />
              </form>
              <br />
              <button
                onClick={this.handleSubmit}
                className="btn btn-accent btn-sm md:btn-lg"
              >
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

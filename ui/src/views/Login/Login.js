import React, { Component } from "react";
import Navbar from "views/Login/components/Navbar.js";
import FooterSmall from "views/Login/components/FooterSmall.js";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
require("dotenv").config();

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isWrongCredentials: "none",
    };
  }

  onLogin = () => {
    // this.props.history.push('/landing');
    const { username, password } = this.state;
    let uri = process.env.React_APP_Api + "login";
    let param = `username=${username}&password=${password}`;

    fetch(uri, {
      body: param,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "post",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          this.props.history.push(process.env.REACT_APP_Home);
        } else {
          this.setState({
            isWrongCredentials: "",
          });
        }
      })
      .catch(() =>
        this.setState({
          isWrongCredentials: "",
        })
      );
  };
  render() {
    return (
      <>
        <Navbar transparent />
        <main>
          <section className="absolute w-full h-full">
            <div
              className="absolute top-0 w-full h-full bg-gray-900"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/register_bg_2.png") + ")",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <form>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email
                          </label>
                          <input
                            onChange={(e) => {
                              if (
                                e.target.value.match(
                                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
                                ) != null ||
                                e.target.value === ""
                              )
                                this.setState({
                                  username: e.target.value,
                                  emailBackground: "white",
                                });
                              else
                                this.setState({
                                  username: e.target.value,
                                  emailBackground: "rgba(255, 0, 0, .6)",
                                });
                            }}
                            type="email"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Email"
                            style={{
                              transition: "all .15s ease",
                              background: this.state.emailBackground,
                            }}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Password
                          </label>
                          <input
                            onChange={(e) =>
                              this.setState({ password: e.target.value })
                            }
                            type="password"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Password"
                            style={{ transition: "all .15s ease" }}
                          />
                        </div>
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          style={{ display: this.state.isWrongCredentials }}
                        >
                          Invalid Credentials
                        </label>
                        <div className="text-center mt-6">
                          <button
                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            onClick={this.onLogin}
                          >
                            Sign In
                          </button>
                        </div>
                        <Grid item xs>
                          <Link to="/forget-password" variant="body2">
                            Forgot password?
                          </Link>
                        </Grid>
                      </form>
                    </div>
                  </div>

                  <div className="flex flex-wrap mt-6">
                    <div className="w-1/2">
                      <a
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        className="text-gray-300"
                      >
                        <small>Forgot password?</small>
                      </a>
                    </div>
                    <div className="w-1/2 text-right">
                      <a
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        className="text-gray-300"
                      >
                        <small>Create new account</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FooterSmall absolute />
          </section>
        </main>
      </>
    );
  }
}

import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Login } from "./pages/Login";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";

const API = "http://localhost:3000/users";
const cookies = new Cookies();

class App extends Component {
  state = {
    form: {
      username: "",
      password: "",
    },
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = async () => {
    await axios
      .get(API, {
        params: {
          username: this.state.form.username,
          password: md5(this.state.form.password),
        },
      })
      .then((res) => res.data)
      .then((res) => {
        if (res.length > 0) {
          const response = res[0];
          cookies.set("id", response.id, { path: "/" });
          cookies.set("name", response.name, { path: "/" });
          cookies.set("username", response.username, { path: "/" });
          alert(`Bienvenido ${response.name}`);
          window.location.href = "/";
        } else {
          alert("El usuario o contraseña no son correctos.");
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mt-5">
          <Routes>
            <Route
              path="/login"
              element={
                <Login handleChange={this.handleChange} login={this.login} />
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

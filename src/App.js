import "./App.css";
import NavBar from "./Components/NavBar";
import React, { Component } from "react";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 6;

  render() {
    const categories = ["general", "business", "entertainment", "sports", "science", "health", "technology"];

    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            {/* Default route for "/" */}
            <Route path="/" element={<News key="general" pageSize={this.pageSize} country="us" category="general" />} />

            {/* Dynamic routes for each category */}
            {categories.map((category) => (
              <Route
                key={category}
                path={`/${category}`}
                element={<News key={category} pageSize={this.pageSize} country="us" category={category} />}
              />
            ))}

            {/* Fallback route for invalid URLs */}
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

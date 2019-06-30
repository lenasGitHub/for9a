import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/shared/layout/header";
import { Footer } from "./components/shared/layout/footer";

import { OpportunityList } from "./pages/OpportunityList";
import "./App.css";

import PostDetials from "./components/post/post-detials/PostDetials";
const store = require("./reducers").init();
class App extends Component {
  // renderItems() {
  //   return this.state.items.map((item, index) => {
  //     return <PostCard key={index} item={item} />;
  //   });
  // }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={OpportunityList} />
            <Route exact path="/opportunity/:id" component={PostDetials} />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;

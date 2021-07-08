import React, { useEffect } from "react";
import "./App.css";
import Wrapper from "./Wrapper/Wrapper";
import Container from "./Container/Container";
import Navbar from "./Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Footer from "./Footer/Footer";
import SIGN_UP_PAGE from "./PAGES/SIGN_UP_PAGE/SIGN_UP_PAGE";
import HOME_PAGE from "./PAGES/HOME_PAGE/HOME_PAGE";
import PROFILE_PAGE from "./PAGES/PROFILE_PAGE/PROFILE_PAGE";
import SELECTED_POST from "./PAGES/SELECTED_POST/SELECTED_POST";
import FixedRoundButton from "./FixedRoundButton/FixedRoundButton";
import HomeButton from "./HomeButton/HomeButton";
import GET_QUESTION_PAGE from "./PAGES/GET_QUESTION_PAGE/GET_QUESTION_PAGE";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import axios from "axios";

function App() {
  let location = useLocation();
  var formdata = new FormData();

  // useEffect(() => {
  //   axios
  //     .get("https://querybackendapi.herokuapp.com/api/question/")
  //     .then((response) => {
  //       console.log(response.data);
  //     }).catch(
  //       alert('Zucci!, something went wrong')
  //     )
  // }, []);

  return (
    <div className="App">
      <Wrapper>
        <Navbar></Navbar>
        <FixedRoundButton />
        <HomeButton />
        <Container>
          <Route path="/" exact component={SIGN_UP_PAGE} />
          <Route path="/profile" exact component={PROFILE_PAGE} />
          <Route path="/home" exact component={HOME_PAGE} />
          <Route path="/post" exact component={SELECTED_POST} />
          <Route path="/getpost" exact component={GET_QUESTION_PAGE} />
          {<Footer />}
        </Container>
      </Wrapper>
    </div>
  );
}



export default App;
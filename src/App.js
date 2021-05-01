import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import ContactsAndOrder from "./components/Contacts&Order/Contacts&Order";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/contactsandorder">
          <ContactsAndOrder />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Main></Main>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;

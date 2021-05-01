import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import ContactsAndOrder from "./components/Contacts&Order/Contacts&Order";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/contactsandorder">
          <ContactsAndOrder />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;

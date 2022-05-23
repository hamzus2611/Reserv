import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./components/style/dark.scss";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import HomePage from "./pages/homepage/HomePage";
import Profile from "./pages/profile/Profile";
import EventsList from "./pages/EventsList/EventsList";
import EventPage from "./pages/EventPage/EventPage";

import Home from "./AdminPages/home/Home";
import User from "./AdminPages/User/User";
import Organisateur from "./AdminPages/Organisateur/Organisateur";
import Admin from "./AdminPages/Admin/Admin";
import Event from "./AdminPages/Event/Event";
import Single from "./AdminPages/single/Single";
import New from "./AdminPages/new/New";
import { userInputs } from "./Admins/formSource";

import { useContext } from "react";
import OrganisateurPage from "./pages/organisateurPage/OrganisateurPage";
import MyEvents from "./OrganisateurPages/Event/Event";
// import { DarkModeContext } from "./components/context/darkModeContext";

// import { Switch, Router } from "react-router-dom";
import DemandeOrganisateur from './AdminPages/Organisateur/DemandeOrganisateur';
import Param from './pages/profile/Param';

function App() {
  // const { darkMode } = useContext(DarkModeContext);

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/CreateEvent" exact element={<EventsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Profile" exact element={<Profile />} />
        <Route path="/profile/edit" exact element={<Param/>} />
        <Route path="/event/:id" exact element={<EventPage />} />
        {/* render={(props) => */}
        {/* //   <EventPage {...props} />} */}


        <Route path="/Admin/">
          <Route index element={<Home />} />
          <Route path="User">
            <Route index element={<User />} />
            <Route path=":userId" element={<Single />} />
          </Route>
          <Route path="Organisateur/">
            <Route index element={<Organisateur />} />
            <Route path="inv" element={<DemandeOrganisateur />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New title="Add New User" />}
            />
          </Route>
          <Route path="Admin">
            <Route index element={<Admin />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="Event">
            <Route index element={<Event />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
        </Route>
        <Route path="/organisateur/">
          <Route index element={<OrganisateurPage />} />
          <Route path="Event/">
            <Route index element={<MyEvents />} />
            <Route path=":Events" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

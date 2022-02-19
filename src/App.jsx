import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideNavBar from "./components/sideNavbar/SideNavbar"
import { Row, Col } from "react-bootstrap";
import Home from "./components/home/Home.jsx"
import Player from './components/player/Player.jsx';
import ArtistPage from './components/artistPage/artistPage.jsx';
import AlbumPage from './components/albumpage/AlbumPage.jsx';
import { useState } from "react";
function App() {
  const [filter, setFilter] = useState("");

  return (
    <Router>
      <div className="App">
        <Row id="row">
          <Col xs={2} id="sidebar-wrapper">
            <SideNavBar filter={filter} setFilter={setFilter} />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <Routes>
              <Route path="/" element={<Home filter={filter} />} />{" "}
              <Route path="/artist/:artistId" element={<ArtistPage />} />
              <Route path="/album/:Id" element={<AlbumPage />} />
            </Routes>
            <div className='spacingdiv'></div>
          </Col>
        </Row>
        <Player />
      </div>
    </Router>
  );
}

export default App;

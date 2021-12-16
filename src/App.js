import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';
import NavBar from './components/navbar';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <section>
        <NavBar />
        <Routes>
          <Route exact path="*" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
      </section>
    </Provider>
  );
}

export default App;

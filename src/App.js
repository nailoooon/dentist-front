import './App.css';

import {Routes, Route, BrowserRouter} from 'react-router-dom'
import MainPage from "./mainPage/MainPage";
import LoginPage from "./login/loginPage";
import AdminPage from "./adminPage/AdminPage";
import PatientPage from "./adminPage/patientPage/patientPage";

const Pages = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>} />
            <Route path={'/login'} element={<LoginPage/>} />
            <Route path={'/admin'} element={<AdminPage/>}>
                <Route path={'patient'} element={<PatientPage />}/>
            </Route>
            <Route path={'/patient'} element={<PatientPage />}/>
        </Routes>
    )
}

function App() {
  return (
      <BrowserRouter>
          <Pages />
      </BrowserRouter>
  );
}

export default App;

import './App.css';

import {Routes, Route, BrowserRouter} from 'react-router-dom'
import MainPage from "./mainPage/MainPage";
import LoginPage from "./login/loginPage";
import AdminPage from "./adminPage/AdminPage";
import PatientPage from "./adminPage/patientPage/patientPage";
import AppointmentPage from "./adminPage/appointmentPage/appointmentPage";
import StaffPage from "./adminPage/staffPage/staffPage";
import ServicePage from "./adminPage/servicePage/servicePage";
import NewsPage from "./adminPage/newsPage/newsPage";
import DentistryPage from "./adminPage/dentistryPage/dentistryPage";

const Pages = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>} />
            <Route path={'/login'} element={<LoginPage/>} />
            <Route path={'/admin'} element={<AdminPage/>}>
                <Route path={'patient'} element={<PatientPage />}/>
                <Route path={'appointment'} element={<AppointmentPage />}/>
                <Route path={'staff'} element={<StaffPage />}/>
                <Route path={'service'} element={<ServicePage />}/>
                <Route path={'news'} element={<NewsPage />}/>
                <Route path={'dentistry'} element={<DentistryPage />}/>
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

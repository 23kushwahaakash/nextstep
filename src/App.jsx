import {Routes,Route,Link,NavLink} from "react-router-dom"
import { Toaster } from "react-hot-toast"
import LogInPage from "./Authorisation/Pages/LogInPage"
import SignUpPage from "./Authorisation/Pages/SignUpPage"
import ForgotPage from "./Authorisation/Pages/ForgotPage"
import VerifyPage from "./Authorisation/Pages/VerifyPage"
import CreateNewPasswordPage from "./Authorisation/Pages/CreateNewPasswordPage"
import UpdatedPasswordPage from "./Authorisation/Pages/UpdatedPasswordPage"
import JSLandingPage from "./LandingPage/Pages/JSLandingPage"
import RoleSelectionPage from "./RoleSelectionPage/Pages/RoleSelectionPage"
import HomePage from "./HomePage/Pages/HomePage"
import JobPage from "./JobPage/Pages/JobPage"
import ProfilePage from "./ProfilePage/Pages/ProfilePage"
import About from "./AboutPage/About"
import SubmitPage from "./SubmitPage/SubmitPage"
import DashboardPage from "./Dashboard/Pages/Dashboard"
import PromotionPage from "./PromotionPage/PromotionPage"
import LandingPage from "./JobRecruiter/LandingPage/Pages/LandingPage"
import JRDashboardPage from "./JobRecruiter/DashboardPage/Pages/JRDashboardPage"
import JRHomePage from "./JobRecruiter/HomePage/Pages/JRHomePage"
import JRProfilePage from "./JobRecruiter/ProfilePage/Pages/JRProfilePage"
import JRSubmitPage from "./JobRecruiter/SubmitPage/JRSubmitPage"

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false}/>
      <Routes>
        <Route path="/" element={<PromotionPage/>}/>
        <Route path="/login" element={<LogInPage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
        <Route path="/forgotpassword" element={<ForgotPage/>}></Route>
        <Route path="/forgotpassword/verifyotp" element={<VerifyPage/>}></Route>
        <Route path="/forgotpassword/verifyotp/createnew" element={<CreateNewPasswordPage/>}></Route>
        <Route path="/forgotpassword/verifyotp/createnew/updated" element={<UpdatedPasswordPage/>}></Route>
        <Route path="/signup/roleselection" element={<RoleSelectionPage/>}></Route>
        <Route path="/jobseeker" element={<JSLandingPage/>}></Route>
        <Route path="/jobseeker/home" element={<HomePage/>}></Route>
        <Route path="/jobseeker/jobs" element={<JobPage/>}></Route>
        <Route path="/jobseeker/profile" element={<ProfilePage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/jobseeker/profile/submit" element={<SubmitPage/>}></Route>
        <Route path="/jobseeker/dashboard" element={<DashboardPage/>}></Route>
        <Route path="/jobrecruiter" element={<LandingPage/>}></Route>
        <Route path="/jobrecruiter/dashboard" element={<JRDashboardPage/>}></Route>
        <Route path="/jobrecruiter/home" element={<JRHomePage/>}></Route>
        <Route path="/jobrecruiter/profile" element={<JRProfilePage/>}></Route>
        <Route path="/jobrecruiter/profile/submit" element={<JRSubmitPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App

import {Routes,Route,Link,NavLink} from "react-router-dom"
import React from 'react'
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
import DashboardPage from "./Dashboard/DashboardPage"
import PromotionPage from "./PromotionPage/PromotionPage"


function App() {
  return (
    <div>
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
        <Route path="jobseeker/profile" element={<ProfilePage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/jobseeker/profile/submit" element={<SubmitPage/>}></Route>
        <Route path="/jobseeker/dashboard" element={<DashboardPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App

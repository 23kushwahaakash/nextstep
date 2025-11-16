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
import JobGiver from "./JobGiver/Components/app.jsx"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogInPage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
        <Route path="/forgotpassword" element={<ForgotPage/>}></Route>
        <Route path="/forgotpassword/verifyotp" element={<VerifyPage/>}></Route>
        <Route path="/forgotpassword/verifyotp/createnew" element={<CreateNewPasswordPage/>}></Route>
        <Route path="/forgotpassword/verifyotp/createnew/updated" element={<UpdatedPasswordPage/>}></Route>
        <Route path="/signup/roleselection" element={<RoleSelectionPage/>}></Route>
        <Route path="/jobseeker" element={<JSLandingPage/>}></Route>
        <Route path="/jobgiver/" element={<JobGiver/>}></Route>
      </Routes>
    </div>
  )
}

export default App

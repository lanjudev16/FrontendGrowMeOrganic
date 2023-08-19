import './App.css'
import AppDep from './Components/DepartmentList'
import FormTs from './Components/FormTs'
import User from './Components/User'
function App() {

  const user1={
    name:"Md Lanju Mia",
    age:24,
    lang:['Bangla','Hindi']
  }
  const userArrObj=[
    {
      name:"ALi"
    },
    {
      name:"shkil"
    }
  ]
  return (
    <div>
      <h1>User Management</h1>
      {/* <User name="Md Lanju Mia" age={25} isLogIn={true}></User> */}
      <User user={user1} userMul={userArrObj}></User>
      <FormTs></FormTs>
      <AppDep></AppDep>
    </div>
  )
}

export default App

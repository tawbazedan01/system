import './App.css';
import Login from './pages/login/Login.jsx';
import AppSidebar from "./components/sidebar/AppSidebar.jsx";

function App() {

  return (
    <>
      <div style={{ display: "flex" }}>
        <AppSidebar />

        <div style={{ flex: 1, padding: "20px" }}>
          <h2>Welcome to System Dashboard</h2>
        </div>
      </div>
    </>
  )
}

export default App

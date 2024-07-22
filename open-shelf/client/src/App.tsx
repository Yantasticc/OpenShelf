import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/authPage";
import Home from "./pages/homePage";
import Profile from "./pages/profilePage";
import AddBook from './pages/addBookPage'
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={ <ProtectedRoute> <Home /> </ProtectedRoute> }/>
          <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
          <Route path="/add-book" element={ <ProtectedRoute> <AddBook /> </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

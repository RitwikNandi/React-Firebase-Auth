import SignUp from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { Container } from "react-bootstrap";

function App() {
  return (
    <AuthProvider>
      <Container
        className='d-flex align-items-center justiiify-content-center'
        style={{ minHeight: "100vh" }}
      >
        <div className='w-100' style={{ maxWidth: "400px" }}>
          <SignUp />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;

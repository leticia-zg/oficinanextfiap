import './style.css';
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import('./pages/Home/Home'));
const LazyGuincho = lazy(() => import('./pages/Guincho/Guincho'));
const LazyDuvidas = lazy(() => import('./pages/Duvidas/Duvidas'));
const LazyPecas = lazy(() => import('./pages/Pecas/Pecas'));
const LazyLogin = lazy(() => import('./pages/LoginPage/LoginPage'));
const LazySignup = lazy(() => import('./pages/Signup/Signup'));

function App() {
  return (
    <Router>
      <Suspense fallback={<>Carregando...</>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/guincho" element={<LazyGuincho />} />
          <Route path="/duvidasfrequentes" element={<LazyDuvidas />} />
          <Route path="/pecas" element={<LazyPecas />}/>
          <Route path="/login" element={<LazyLogin />}/>
          <Route path="/signup" element={<LazySignup />}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
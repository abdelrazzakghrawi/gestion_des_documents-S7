import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Etudiant
import ListeEtudiants from './components/admin/Etudiants/ListeEtudiants';
import ViewEtudiant from './components/admin/Etudiants/ViewEtudiant';
import AjouterEtudiant from './components/admin/Etudiants/AjouterEtd';
import Modifieretd from './components/admin/Etudiants/Modifieretd';


//Secretaire
import AjouterSec from './components/admin/secretaire/AjouterSec';
import ListeSecretaires from './components/admin/secretaire/ListeSecretaires';
import ViewSecretaires from './components/admin/secretaire/ViewSecretaires';
import ModifierSec from './components/admin/secretaire/ModifierSec';



import Accueiladmin from './components/admin/Admin/accueil';



import Doc from './components/Document/doc';
import Rel from './components/Document/Releve';
import Att from './components/Document/scolarité';



import { Dropdown } from 'react-bootstrap';
 



 
function App() {
  return (

    <div className="App">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/etudiant/list">Etudiants</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Secretaire/list">Secretaire</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Documents">Docs</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
      <Router>
        <Routes>


      
          <Route path="/etudiant/list" element={<ListeEtudiants />} />
          <Route path="/etudiant/AjouterEtudiant" element={<AjouterEtudiant />} />
          <Route path="/etudiant/:id" element={<ViewEtudiant />} />
          <Route path="/etudiant/edit/:id" element={<Modifieretd/>} />


          <Route path="/Secretaire/list" element={<ListeSecretaires/>} />
          <Route path="/Secretaire/AjouterSecretaire" element={<AjouterSec/>} />
          <Route path="/Secretaire/:id" element={<ViewSecretaires />} />
          <Route path="/Secretaire/edit/:id" element={<ModifierSec/>} />





          <Route path="/Home" element={<Accueiladmin />} />
          <Route path="/" element={<Accueiladmin />} />




          <Route path="/Documents" element={<Doc />} />



          <Route path="/documents/attestation" element={<Att />} />
          <Route path="/documents/releve" element={<Rel />} />


        </Routes>
      </Router>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

    </div>
  );
}

export default App;

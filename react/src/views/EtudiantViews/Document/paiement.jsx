import React, { useEffect } from 'react';
 import logo from './logo.png'; // Make sure the logo is in the same directory as this file
import signature from './signature.png'; // Make sure the logo is in the same directory as this file
import tampon from './tampon.png'; // Make sure the logo is in the same directory as this file

 
function paiement() {
    
    useEffect(() => {
        window.print();
      }, []);
      
    return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Attestation d'Inscription</title>
  <style dangerouslySetInnerHTML={{__html: " @page {   size: A4;   margin: 0; } @media print {   body {     width: 210mm;     height: 297mm;     margin: 10mm auto;     box-shadow: none;   }   .page {     border: initial;     border-radius: initial;     width: initial;     min-height: initial;     box-shadow: initial;     background: initial;     page-break-after: always;   } } body {   box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);   width: 210mm;   height: 297mm;   margin: 0 auto;   padding: 20mm;   background: white;   color: black;   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; } .header {   text-align: center;   border-bottom: 2px solid black;   padding-bottom: 10px;   margin-bottom: 100px;   margin-top: -110px;       } .header-logo {   width: 200px; /* Adjust as needed */   height: auto; } .header-info {   text-align: left;   font-size: 0.85em;   margin-top: -90px; } .header-info p {   margin: 2px; } .title {   text-align: center;   font-size: 1.5em;   font-weight: bold;   margin-bottom: 150px; } .content {   text-align: left;   line-height: 1.4;   font-size: 1em; } .footer {   text-align: center;   font-size: 0.75em;   margin-top: 30px;   border-top: 1px solid #ccc;   padding-top: 10px; } @media print {   body {   box-shadow: 0 0 0.0cm rgba(255, 255, 255, 1);  }   }   .signature {   text-align: right;   margin-top: 150px; } .signature img {   width: 120px; /* Adjust as needed */   height: auto; }\n   .signature {   position: relative;   text-align: right;   margin-top: 150px; } .signature img.signature-image {   width: 120px; /* Adjust as needed */   height: auto; } .signature img.stamp {   position: absolute;   width: 100px; /* Adjust as needed */   height: auto;   right: 50px; /* Adjust as needed */    z-index: 1; }\n" }} />
  <style dangerouslySetInnerHTML={{__html: "Nav, Aside,a { display: none; /* Hide navbar and aside when printing } " }} />

  
  <div className="page">
    <div className="header">
    <img src={logo} alt="Logo" className="header-logo" />
      <div className="header-info">
        <p>Université privée de fes</p>
        <p>Fès 30000</p>
        <p>Phone:0661-446024 </p>
        <p>Mail: info@upf.ac.ma</p>
      </div>
    </div>
    <div className="title">Avis de Paiement des Frais de Scolarité</div>
    <div className="content">
      <p className="card-text">Nom de l'étudiant: [Nom de l'étudiant]</p>
      <p className="card-text">Programme: [Nom du programme]</p>
      <p className="card-text">Semestre: [Semestre]</p>
      <p className="card-text">Montant Payee: 100000 Dh</p>
      <p className="card-text">Montant Restant: 100000 Dh</p>
      <p className="card-text">Montant Total: 100000 Dh</p>
      <p className="card-text">Date Limite de Paiement: [Date]</p>
    </div>
    <div className="signature">
      <p>Fait à Fes, Le 01/01/2024</p>
      <p>Belghrib Mohamed</p>
      <p>Responsable Service Scolarité</p>
      <img src={signature} alt="Signature" className="signature-image" />
                            <img src={tampon} alt="Tampon" className="stamp" />
    </div>
  </div>
</div>

    );
}
export default paiement;
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
  <style dangerouslySetInnerHTML={{__html: "\n  @page {\n    size: A4;\n    margin: 0;\n  }\n  @media print {\n    body {\n      width: 210mm;\n      height: 297mm;\n      margin: 10mm auto;\n      box-shadow: none;\n    }\n    .page {\n      border: initial;\n      border-radius: initial;\n      width: initial;\n      min-height: initial;\n      box-shadow: initial;\n      background: initial;\n      page-break-after: always;\n    }\n  }\n  body {\n    box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);\n    width: 210mm;\n    height: 297mm;\n    margin: 0 auto;\n    padding: 20mm;\n    background: white;\n    color: black;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n  .header {\n    text-align: center;\n    border-bottom: 2px solid black;\n    padding-bottom: 10px;\n    margin-bottom: 100px;\n    margin-top: -110px;\n    \n    \n  }\n  .header-logo {\n    width: 200px; /* Adjust as needed */\n    height: auto;\n  }\n  .header-info {\n    text-align: left;\n    font-size: 0.85em;\n    margin-top: -90px;\n  }\n  .header-info p {\n    margin: 2px;\n  }\n  .title {\n    text-align: center;\n    font-size: 1.5em;\n    font-weight: bold;\n    margin-bottom: 150px;\n  }\n  .content {\n    text-align: left;\n    line-height: 1.4;\n    font-size: 1em;\n  }\n  .footer {\n    text-align: center;\n    font-size: 0.75em;\n    margin-top: 30px;\n    border-top: 1px solid #ccc;\n    padding-top: 10px;\n  }\n  @media print {\n    body {\n    box-shadow: 0 0 0.0cm rgba(255, 255, 255, 1);\n   }\n    }\n    .signature {\n    text-align: right;\n    margin-top: 250px;\n  }\n  .signature img {\n    width: 120px; /* Adjust as needed */\n    height: auto;\n  }\n\n    .signature {\n    position: relative;\n    text-align: right;\n    margin-top: 250px;\n  }\n  .signature img.signature-image {\n    width: 120px; /* Adjust as needed */\n    height: auto;\n  }\n  .signature img.stamp {\n    position: absolute;\n    width: 100px; /* Adjust as needed */\n    height: auto;\n    right: 50px; /* Adjust as needed */\n     z-index: 1;\n  }\n" }} />
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
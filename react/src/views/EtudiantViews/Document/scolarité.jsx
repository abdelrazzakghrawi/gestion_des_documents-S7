import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

 import logo from './logo.png'; 
import signature from './signature.png'; 
import tampon from './tampon.png'; 

function scolarité() {
  const [etudiant, setEtudiant] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchEtudiantDetails = async () => {
      try {
        const result = await axios(`http://localhost:8000/api/etudiants/${id}`);
        setEtudiant(result.data);
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };

    fetchEtudiantDetails();
  }, [id]);

  useEffect(() => {
    window.print();
  }, []);
 



   

  return (
    <div className="page">        
 <style dangerouslySetInnerHTML={{__html: "\n  @page {\n    size: A4;\n    margin: 0;\n  }\n  @media print {\n    body {\n      width: 210mm;\n      height: 297mm;\n      margin: 10mm auto;\n      box-shadow: none;\n    }\n    .page {\n      border: initial;\n      border-radius: initial;\n      width: initial;\n      min-height: initial;\n      box-shadow: initial;\n      background: initial;\n      page-break-after: always;\n    }\n  }\n  body {\n    box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);\n    width: 210mm;\n    height: 297mm;\n    margin: 0 auto;\n    padding: 20mm;\n    background: white;\n    color: black;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n  .header {\n    text-align: center;\n    border-bottom: 2px solid black;\n    padding-bottom: 10px;\n    margin-bottom: 100px;\n    margin-top: -110px;\n    \n    \n  }\n  .header-logo {\n    width: 200px; /* Adjust as needed */\n    height: auto;\n  }\n  .header-info {\n    text-align: left;\n    font-size: 0.85em;\n    margin-top: -90px;\n  }\n  .header-info p {\n    margin: 2px;\n  }\n  .title {\n    text-align: center;\n    font-size: 1.5em;\n    font-weight: bold;\n    margin-bottom: 150px;\n  }\n  .content {\n    text-align: left;\n    line-height: 1.4;\n    font-size: 1em;\n  }\n  .signature {\n    text-align: right;\n    margin-top: 250px;\n  }\n  .signature img {\n    width: 120px; /* Adjust as needed */\n    height: auto;\n  }\n  .footer {\n    text-align: center;\n    font-size: 0.75em;\n    margin-top: 30px;\n    border-top: 1px solid #ccc;\n    padding-top: 10px;\n  }\n  @media print {\n    body {\n    box-shadow: 0 0 0.0cm rgba(255, 255, 255, 1);\n   }\n    }\n\n    .signature {\n    position: relative;\n    text-align: right;\n    margin-top: 250px;\n  }\n  .signature img.signature-image {\n    width: 120px; /* Adjust as needed */\n    height: auto;\n  }\n  .signature img.stamp {\n    position: absolute;\n    width: 100px; /* Adjust as needed */\n    height: auto;\n    right: 50px; /* Adjust as needed */\n     z-index: 1;\n  }\n " }} />
 <style dangerouslySetInnerHTML={{__html: "Nav, Aside,a { display: none; /* Hide navbar and aside when printing } " }} />


      <div className="header">
      <img src={logo} alt="Logo" className="header-logo" />
        <div className="header-info">
          <p>Université privée de fes</p>
          <p>Fès 30000</p>
          <p>Phone: 0661-446024</p>
          <p>Mail: info@upf.ac.ma</p>
        </div>
      </div>
      <div className="title">Attestation de Scolarité</div>
      <div className="content">
        <p>Je soussigné Belghrib Mohamed, Responsable Service Scolarité de l'Université privée de fes, atteste que :</p>
        <p><strong>Monsieur {etudiant?.name} {etudiant?.surname} </strong> Né(e) le 23/06/2002 à laayoune</p>
        <p>est inscrit(e) dans notre établissement dans le cadre de la formation en classe de : 4 Genie Info pour l'année 2023/2024.</p>
        <p>Cette attestation a été délivrée à l'intéressé(e) pour servir et faire valoir ce de droit.</p>
      </div>
      <div className="signature">
        <p>Fait à Fes, Le 01/01/2024</p>
        <p>Belghrib Mohamed</p>
        <p>Responsable Service Scolarité</p>
        <img src={signature}  alt="Signature" className="signature-image" />
        <img src={tampon}  alt="Tampon" className="stamp" />
      </div>
    </div>
  );
}

export default scolarité;

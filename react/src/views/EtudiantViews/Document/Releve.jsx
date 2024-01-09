import React, { useEffect } from 'react';
import logo from './logo.png'; // Make sure the logo is in the same directory as this file
import signature from './signature.png'; // Make sure the logo is in the same directory as this file
import tampon from './tampon.png'; // Make sure the logo is in the same directory as this file



        function Releve() {
          useEffect(() => {
            window.print();
          }, []);
        
        return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Grade Report</title>
          <style dangerouslySetInnerHTML={{__html: "        body {            font-family: 'Arial', sans-serif;            margin: 0;            padding: 0;            background: #fff;        }        .report-container {            width: 210mm;            height: 297mm;            margin: auto;            padding: 20mm;            box-shadow: 0 0 5mm rgba(0,0,0,0.2);        }        .header {    text-align: center;    border-bottom: 2px solid black;    padding-bottom: 10px;    margin-bottom: 100px;    margin-top: -110px;          }  .header-logo {    width: 200px; /* Adjust as needed */    height: auto;  }  .header-info {    text-align: left;    font-size: 0.85em;    margin-top: -90px;  }  .header-info p {    margin: 2px;  }        table {            width: 100%;            border-collapse: collapse;            margin-bottom: 5mm;        }        th, td {            border: 1px solid #000;            padding: 2mm;            text-align: left;        }        th {            background-color: #f2f2f2;        }        .footer {            text-align: right;            position: relative;        }        .footer img.stamp {            position: absolute;            right: 20mm;            bottom: 10mm;            width: 30mm;            height: auto;        }        .footer img.signature {            position: absolute;            right: 20mm;            bottom: 20mm;            width: 40mm;            height: auto;        }        .title {    text-align: center;    font-size: 1.5em;    font-weight: bold;    margin-bottom: 150px;  }    .signature img {    width: 120px; /* Adjust as needed */    height: auto;  }   @media print {   .report-container {                box-shadow: 0 0 0.0cm rgba(255, 255, 255, 1);        }    }    .signature {    position: relative;    text-align: right;    margin-top: 70px;  }  .signature img.signature-image {    width: 120px; /* Adjust as needed */    height: auto;  }  .signature img.stamp {    position: absolute;    width: 100px; /* Adjust as needed */    height: auto;    right: 50px; /* Adjust as needed */     z-index: 1;  }    " }} />
          <style dangerouslySetInnerHTML={{__html: "Nav, Aside,a { display: none; /* Hide navbar and aside when printing } " }} />

          <div className="report-container">
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
              <div className="title">Relevé de Note</div>
              <div style={{marginBottom: '10px'}}>
                <span>Nom et Prenom : </span>
                <span>Elkhayyam Mohamed Taha</span>
              </div>
              <div style={{marginBottom: '10px'}}>
                <span>Année et fillière : </span>
                <span>4 Gin</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Module</th>
                    <th>Abs</th>
                    <th>Control</th>
                    <th>Examen</th>
                    <th>Rattrapage</th>
                    <th>Moyenne</th>
                    <th>Obs</th>
                  </tr>
                </thead>
                <tbody>
                   <tr>
                    <td>Module Name</td>
                    <td>0</td>
                    <td>15</td>
                    <td>17</td>
                    <td>-</td>
                    <td>16</td>
                    <td>V</td>
                  </tr>
                  <tr>
                    <td>Module Name</td>
                    <td>0</td>
                    <td>15</td>
                    <td>17</td>
                    <td>-</td>
                    <td>16</td>
                    <td>V</td>
                  </tr>
                  <tr>
                    <td>Module Name</td>
                    <td>0</td>
                    <td>15</td>
                    <td>17</td>
                    <td>-</td>
                    <td>16</td>
                    <td>V</td>
                  </tr>
                  <tr>
                    <td>Module Name</td>
                    <td>0</td>
                    <td>15</td>
                    <td>17</td>
                    <td>-</td>
                    <td>16</td>
                    <td>V</td>
                  </tr>
                  <tr>
                    <td>Module Name</td>
                    <td>0</td>
                    <td>15</td>
                    <td>17</td>
                    <td>-</td>
                    <td>16</td>
                    <td>V</td>
                  </tr>
                  <tr>
                    <td>Module Name</td>
                    <td>0</td>
                    <td>15</td>
                    <td>17</td>
                    <td>-</td>
                    <td>16</td>
                    <td>V</td>
                  </tr>
                  <tr>
                    <td>Module Name</td>
                    <td>0</td>
                    <td>15</td>
                    <td>17</td>
                    <td>-</td>
                    <td>16</td>
                    <td>V</td>
                  </tr>
                 </tbody>
              </table>
              <div className="signature">
                <div style={{marginBottom: '10px'}}>
                  <b><span>Moyenne Generale  :</span> 
                    <span> 12.00</span></b>
                </div>
                <div style={{marginBottom: '10px'}}>
                  <b><span>Semestre  :</span> 
                    <span> Validé</span></b> 
                </div>
                <img src={signature} alt="Signature" className="signature-image" />
                <img src={tampon} alt="Tampon" className="stamp" />
              </div>
            </div>
          </div></div>
      );
    }
    export default Releve;
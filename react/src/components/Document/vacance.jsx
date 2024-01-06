import React, { useEffect } from 'react';
import logo from './logo.png'; // Make sure the logo is in the same directory as this file
import signature from './signature.png'; // Make sure the logo is in the same directory as this file
import tampon from './tampon.png'; // Make sure the logo is in the same directory as this file



        function vacance() {
          useEffect(() => {
            window.print();
          }, []);
        
        return (
            <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Attestation d'Inscription</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <style dangerouslySetInnerHTML={{__html: "\n        @page {\n            size: A4;\n            margin: 0;\n        }\n        \n\n        body {\n            box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);\n            width: 210mm;\n            height: 297mm;\n            margin: 0 auto;\n            padding: 20mm;\n            background: white;\n            color: black;\n            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n            position: relative; /* Pour positionner correctement les éléments absolus */\n        }\n\n        .header {\n            text-align: center;\n            border-bottom: 2px solid black;\n            padding-bottom: 10px;\n            margin-bottom: 100px;\n            margin-top: -110px;\n\n\n        }\n\n        .header-logo {\n            width: 200px;\n            /* Adjust as needed */\n            height: auto;\n        }\n\n        .header-info {\n            text-align: left;\n            font-size: 0.85em;\n            margin-top: -90px;\n        }\n\n        .header-info p {\n            margin: 2px;\n        }\n\n        .title {\n            text-align: center;\n            font-size: 1.5em;\n            font-weight: bold;\n            margin-bottom: 50px;\n        }\n\n        .footer {\n            text-align: center;\n            font-size: 0.75em;\n            margin-top: 30px;\n            border-top: 1px solid #ccc;\n            padding-top: 10px;\n        }\n\n        @media print {\n            body {\n                box-shadow: 0 0 0.0cm rgba(255, 255, 255, 1);\n            }\n        }\n\n        .signature {\n            text-align: right;\n            margin-top: 250px;\n        }\n\n        .signature img {\n            width: 120px;\n            /* Adjust as needed */\n            height: auto;\n        }\n\n        .signature {\n            position: relative;\n            text-align: right;\n           \n        }\n\n        .signature img.signature-image {\n            width: 120px;\n            /* Adjust as needed */\n            height: auto;\n        }\n\n        .signature img.stamp {\n            position: absolute;\n            width: 100px;\n            /* Adjust as needed */\n            height: auto;\n            right: 50px;\n            /* Adjust as needed */\n            z-index: 1;\n        }\n    " }} />
       
            <div className="header">
            <img src={logo} alt="Logo" className="header-logo" />
              <div className="header-info">
                <p>Université privée de fes</p>
                <p>Fès 30000</p>
                <p>Phone:0661-446024 </p>
                <p>Mail: info@upf.ac.ma</p>
              </div>
            </div>
            <div className="title">Vacances</div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">الترتيب</th>
                  <th scope="col">الاعياد</th>
                  <th scope="col">تاريخ العطل</th>
                  <th scope="col" >عدد الأيام</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>عيد المولد النبوي</td>
                  <td>
                    يوما 12 و 13 ربيع الأول 1445</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>ذكرى المسيرة الخضراء
                  </td>
                  <td>يوم الإثنين 6 نونبر 2023
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>عيد الاستقلال</td>
                  <td>
                    يوم السبت 18 نونبر 2023</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>فاتح السنة الميلادية</td>
                  <td>
                    يوم الإثنين فاتح يناير 2024
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>ذكرى تقديم عريضة الاستقلال</td>
                  <td>
                    يوم الخميس 11 يناير 2024
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    عطلة رأس السنة الأمازيغية
                  </td>
                  <td> ستحدد لاحقا
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>عطلة نهاية الفصل الأول
                  </td>
                  <td> من يوم الأحد 21 يناير 2024 إلى يوم الأحد 28 يناير 2024
                  </td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td> عيد الفطر
                  </td>
                  <td> من يوم 29 رمضان 1445 إلى يوم 3 أو 4 شوال 1445
                  </td>
                  <td>4/5</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    عطلة فصل الربيع وعيد
                    الشغل </td>
                  <td> من يوم الأحد 28 أبريل 2024 إلى يوم الأحد 5 أماي 2024
                  </td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td> عيد الأضحى</td>
                  <td> من يوم 8 ذو الحجة 1445
                    إلى يوم 11 ذو الحجة 1445
                  </td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
            <div className="signature">
              <img src={signature} alt="Signature" className="signature-image" />
                <img src={tampon} alt="Tampon" className="stamp" />
            </div>
          </div>
          
      );
    }
    export default vacance;
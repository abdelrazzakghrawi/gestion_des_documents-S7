import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ListeSecretaires = () => {
  const [secretaires, setSecretaires] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEtudiants = async () => {
      try {
        const result = await axios('http://localhost:8000/api/secretaires');
        setSecretaires(result.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des secretaires:", error);
      }
    };

    fetchEtudiants();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this secretaires?')) {
      try {
        await axios.delete(`http://localhost:8000/api/secretaires/${id}`);
  
        console.log('secretaires successfully deleted');
        window.location.reload();
        // Optionally, refresh the list or navigate away
      } catch (error) {
        console.error("Error during deletion:", error.response);
      }
    }
  };



  if (!secretaires) {
    return <div>Loading...</div>;
  }

  return (

    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />

      <a className="btn btn-primary btn-sm" href="/Secretaire/AjouterSecretaire">
        <i className="fas fa-folder"></i> Ajouter Secretaire
      </a>

      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th style={{ width: '1%' }}>
                  #
                </th>
              
                <th style={{ width: '10%' }}>
                  Cin
                </th>
                <th style={{ width: '20%' }}>
                  Nom Complet
                </th>
                <th style={{ width: '20%' }}>
                mobile number
                </th>
                <th style={{ width: '20%' }}>
                Email
                </th>
                <th style={{ width: '20%' }}>
                Addresse
                </th>
              
                <th style={{ width: '20%' }}>
                </th>
              </tr>
            </thead>
            <tbody>
              {secretaires.map(secretaire => (

                <tr key={secretaire.id}>
                  <td>
                  {secretaire.id}
                  </td>
               
                  <td>
                    {secretaire.cin}
                  </td>
                  <td>
                    <a>
                      {secretaire.name} {secretaire.surname}
                    </a>
                    <br />
                    <small>
                      {secretaire.datedenaissance}
                    </small>
                  </td>
                  <td>
                    <a>
                      {secretaire.mobile_number} 
                    </a>
                  </td>
                  
                  <td>
                    <a>
                      {secretaire.email} 
                    </a>
                  </td>
                  <td>
                   
                      {secretaire.address_line1} 
                   
                  </td>
                  
                
                  <td className="project-actions text-right">

                    <a className="btn btn-primary btn-sm" href={`/secretaire/${secretaire.id}`}>
                      <i className="fas fa-folder"></i> View
                    </a>

                    <a className="btn btn-info btn-sm" href={`/secretaire/edit/${secretaire.id}`}>
  <i className="fas fa-pencil-alt"></i> Edit
</a>

                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(secretaire.id)}>
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>


              )



              )}







            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

};

export default ListeSecretaires;

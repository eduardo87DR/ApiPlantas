import React, { useState, useEffect } from "react";
import axios from "axios";

function Album() {
  const [speciesList, setSpeciesList] = useState([]);
  const apiKey = "sk-ckMo6532a60f44aa82592";

  useEffect(() => {
    axios
      .get(`https://perenual.com/api/species-list?key=${apiKey}`)
      .then((response) => {
        // Actualiza el estado con los datos de la API
        setSpeciesList(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, []);

  return (
    <div>
      <main>
        {/* ... Resto del código del componente */}
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {speciesList.map((species) => (
                <div className="col" key={species.id}>
                  <div className="card shadow-sm">
                    <img
                      src={species.image_url}
                      alt={species.name}
                      width="100%"
                      height={225}
                    />
                    <div className="card-body">
                      <h3 className="card-title">{species.name}</h3>
                      <p className="card-text">{species.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Edit
                          </button>
                        </div>
                        <small className="text-body-secondary">
                          {species.duration} mins
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Album;

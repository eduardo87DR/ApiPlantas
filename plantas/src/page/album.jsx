import React, { useEffect, useState } from "react";
import axios from "axios";

function Album() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://perenual.com/api/species-list?key=sk-ckMo6532a60f44aa82592"
        );
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Plantas</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data.map((plant) => (
            <div className="col" key={plant.id}>
              <div className="card shadow-sm">
                {plant.default_image ? (
                  <img
                    src={plant.default_image.medium_url}
                    className="bd-placeholder-img card-img-top"
                    alt={plant.common_name}
                  />
                ) : (
                  <div className="placeholder-image">Imagen no disponible</div>
                )}
                <div className="card-body">
                  <h5 className="card-title">{plant.common_name}</h5>
                  <p className="card-text">
                    <strong>Nombre Científico:</strong> {plant.scientific_name[0]}
                    <br />
                    <strong>Ciclo:</strong> {plant.cycle}
                    <br />
                    <strong>Riego:</strong> {plant.watering}
                    <br />
                    <strong>Exposición al Sol:</strong> {plant.sunlight[0]}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Ver
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Album;
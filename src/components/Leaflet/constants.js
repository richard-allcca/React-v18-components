export const populationDensityData = {
  "Buenos Aires": 1200, // Densidad simulada
  "Córdoba": 800,
  "Santa Fe": 600,
  "Mendoza": 500,
  "Salta": 300,
  "Jujuy": 200,
  "La Rioja": 100,
  "San Juan": 50,
  // Agrega más provincias y datos simulados según necesites
};


export const argentinaGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Buenos Aires" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-60.0, -34.0],
            [-61.0, -34.0],
            [-61.0, -35.0],
            [-60.0, -35.0],
            [-60.0, -34.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Córdoba" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-64.0, -31.0],
            [-65.0, -31.0],
            [-65.0, -32.0],
            [-64.0, -32.0],
            [-64.0, -31.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Santa Fe" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-60.5, -31.5],
            [-61.5, -31.5],
            [-61.5, -32.5],
            [-60.5, -32.5],
            [-60.5, -31.5],
          ],
        ],
      },
    },
    // Agrega más provincias simuladas aquí...
  ],
};

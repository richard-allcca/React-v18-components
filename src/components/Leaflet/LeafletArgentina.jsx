// import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { argentinaGeoJson, populationDensityData } from './constants';


// const getColor = (density) => {
//   return density > 1000 ? '#800026' :
//          density > 500  ? '#BD0026' :
//          density > 200  ? '#E31A1C' :
//          density > 100  ? '#FC4E2A' :
//          density > 50   ? '#FD8D3C' :
//          density > 20   ? '#FEB24C' :
//          density > 10   ? '#FED976' :
//                           '#FFEDA0';
// };

// const style = (feature) => {
//   const density = populationDensityData[feature.properties.name];
//   return {
//     fillColor: getColor(density),
//     weight: 2,
//     opacity: 1,
//     color: 'white',
//     dashArray: '3',
//     fillOpacity: 0.7,
//   };
// };

// const MapComponent = () => {
//   return (
//     <MapContainer center={[-38.4161, -63.6167]} zoom={5} style={{ height: "100vh", width: "100%" }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <GeoJSON data={argentinaGeoJson} style={style} />
//     </MapContainer>
//   );
// };

// export default MapComponent;
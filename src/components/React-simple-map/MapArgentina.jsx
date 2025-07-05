import { useState } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";
import ButtonContainer from './children/ButtonContainer';
import { STYLES_MAP, ZOOM } from "./constants";
import { formatNumberDecimal } from "./utils";
// import { formatNumberDecimal } from "../utils/numberFormatter";

const MapArgentina = ({ data }) => {
  const { width, height, center, scale, currency, map } = data;

  const [ zoom, setZoom ] = useState(2);
  const [ tooltipContent, setTooltipContent ] = useState("");

  const handleZoomChange = zoom => setZoom(zoom);
  const handleZoomIn = () => handleZoomChange(zoom + ZOOM);
  const handleZoomOut = () => handleZoomChange(zoom - ZOOM);
  const handleResetZoom = () => setZoom(2);


  const handleMouseEnter = (geography) => {
    const geographyValue = `${currency} ${formatNumberDecimal(geography.properties.VALUE)}`;
    setTooltipContent(`${geography.properties.NAME} ${geographyValue}`);
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  const renderGeography = (geography, projection) => {
    return (
      <Geography
        key={ geography.properties.NAME }
        geography={ geography }
        projection={ projection }
        precision={ 0.5 }
        style={ {
          default: STYLES_MAP.default,
          hover: STYLES_MAP.hover,
          pressed: STYLES_MAP.pressed
        } }
        onMouseEnter={ () => handleMouseEnter(geography) }
        onMouseLeave={ handleMouseLeave }
      />
    );
  };

  // Al ser una función interna de <Geographies> recibe un objeto con las propiedades geographies y projection
  const renderGeographies = ({ geographies, projection }) =>
    Array.isArray(geographies) && geographies.map(geography =>
      renderGeography(geography, projection)
    );

  return (
    <>
      <ButtonContainer
        handleResetZoom={ handleResetZoom }
        handleZoomIn={ handleZoomIn }
        handleZoomOut={ handleZoomOut }
      />
      <hr />
      <ComposableMap
        projectionConfig={ { scale } }
        style={ {
          width: `${width}px`,
          height: `${height}px`
        } }
      >
        <ZoomableGroup zoom={ zoom } center={ center }>
          <Geographies geography={ map }>
            { renderGeographies }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <Tooltip>{ tooltipContent }</Tooltip>
    </>
  );
};

MapArgentina.propTypes = {
  data: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    center: PropTypes.arrayOf(PropTypes.number).isRequired,
    scale: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    map: PropTypes.object.isRequired
  }).isRequired
};

export default MapArgentina;
import { useContext } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import mapdata from "./featues.json";
import { GeoContext } from "./Context";
export default function Map() {
  const { activeGeo, handleClickMap } = useContext(GeoContext);

  const activeStyle = {
    default: { outline: "none" },
    hover: { outline: "none" },
    pressed: { outline: "none" },
  };
  const defaultStyle = {
    default: { outline: "none" },
    hover: { outline: "none", fill: "#C0C0C0" },
    pressed: { outline: "none" },
  };

  return (
    <>
      <div className="w-full xl:w-[60%] ">
        <ComposableMap width={800} height={550}>
          <Geographies geography={mapdata}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    tabIndex="-1"
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      activeGeo.toLowerCase() === geo.id.toLowerCase()
                        ? "darkblue"
                        : "lightblue"
                    }
                    onClick={() => handleClickMap(geo)}
                    style={
                      activeGeo === geo.id.toLowerCase()
                        ? activeStyle
                        : defaultStyle
                    }
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </>
  );
}

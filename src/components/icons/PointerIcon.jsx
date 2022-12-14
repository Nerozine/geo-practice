import React from "react";
import {DEFAULT_ICON_FILL_COLOR, DEFAULT_ICON_HEIGHT, DEFAULT_ICON_WIDTH} from "../../lib/constants";

export const PointerIcon = ({
                              width = DEFAULT_ICON_WIDTH,
                              height = DEFAULT_ICON_HEIGHT,
                              fill = DEFAULT_ICON_FILL_COLOR,
                              onClick
                            }) => {
  return (
    <svg width={width}
         height={height}
         fill={fill}
         onClick={onClick}
         version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"
         style={{
           enableBackground: "new 0 0 512 512",
         }}>
      <path style={{
        fill: "#999999",
      }} d="M87.084,192c-0.456-5.272-0.688-10.6-0.688-16C86.404,78.8,162.34,0,256.004,0s169.6,78.8,169.6,176
	c0,5.392-0.232,10.728-0.688,16h0.688c0,96.184-169.6,320-169.6,320s-169.6-223.288-169.6-320H87.084z M256.004,224
	c36.392,1.024,66.744-27.608,67.84-64c-1.096-36.392-31.448-65.024-67.84-64c-36.392-1.024-66.744,27.608-67.84,64
	C189.26,196.392,219.612,225.024,256.004,224z"/>
    </svg>
  );
}
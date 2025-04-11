import React from "react";

const DesignIcon = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="64" height="64" fill="url(#pattern0_2921_75)" />
      <defs>
        <pattern
          id="pattern0_2921_75"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2921_75" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2921_75"
          width="64"
          height="64"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default DesignIcon;

import React from "react";

const UploadIcon = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="100" height="100" fill="url(#pattern0_2921_76)" />
      <defs>
        <pattern
          id="pattern0_2921_76"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2921_76" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2921_76"
          width="84"
          height="84"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default UploadIcon;

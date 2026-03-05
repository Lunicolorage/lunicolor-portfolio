function VagueArt() {
  return (
    <svg
      viewBox="0 0 5760 200"
      preserveAspectRatio="xMinYMax meet"
      className="vagueArt"
      style={{
        position: "absolute",
        bottom: -2,
        left: 0,
        width: "5760px",
        height: "300px",
        pointerEvents: "none",
        animation: `waveScroll 19s linear infinite`,
      }}
    >
      <path
        d="
          M0,100
          C120,40 240,160 360,100
          C480,40 600,160 720,100
          C840,40 960,160 1080,100
          C1200,40 1320,160 1440,100
          C1560,40 1680,160 1800,100
          C1920,40 2040,160 2160,100
          C2280,40 2400,160 2520,100
          C2640,40 2760,160 2880,100
          L2880,200 L0,200 Z
          M2880,100
          C3000,40 3120,160 3240,100
          C3360,40 3480,160 3600,100
          C3720,40 3840,160 3960,100
          C4080,40 4200,160 4320,100
          C4440,40 4560,160 4680,100
          C4800,40 4920,160 5040,100
          C5160,40 5280,160 5400,100
          C5520,40 5640,160 5760,100
          L5760,200 L2880,200 Z
        "
        fill="white"
      />
    </svg>
  );
}

export default VagueArt
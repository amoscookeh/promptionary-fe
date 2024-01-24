const SquiggleDep = () => {
  return (
    <svg className="hidden">
      <filter id="squiggly-1">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.001"
          numOctaves="2"
        />
        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          in="SourceGraphic"
          scale="25"
        />
      </filter>

      <filter id="squiggly-2">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.0015"
          numOctaves="2"
        />
        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          in="SourceGraphic"
          scale="25"
        />
      </filter>

      <filter id="squiggly-3">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.002"
          numOctaves="2"
        />
        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          in="SourceGraphic"
          scale="25"
        />
      </filter>

      <filter id="squiggly-4">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.0025"
          numOctaves="2"
        />
        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          in="SourceGraphic"
          scale="25"
        />
      </filter>

      <filter id="squiggly-5">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.003"
          numOctaves="2"
        />
        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          in="SourceGraphic"
          scale="25"
        />
      </filter>
    </svg>
  );
};

export default SquiggleDep;

export default function LogoSVG() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      style={{ display: "block", margin: "0 auto" }}
    >
      {/* RAYOS AMARILLOS */}
      <polygon points="0,100 40,80 20,100 40,120" fill="#fff212" />
      <polygon points="200,100 160,80 180,100 160,120" fill="#fff212" />

      {/* CABEZA (forma central azul) */}
      <path
        d="M60,40 L80,20 L100,10 L120,20 L140,40 L150,70 L145,100 L150,130 L140,160 L120,180 L100,190 L80,180 L60,160 L50,130 L55,100 L50,70 Z"
        fill="#2f50ac"
        stroke="#000"
        strokeWidth="1"
      />

      {/* CUERNOS (gris claro) */}
      <polygon points="85,25 95,5 100,25" fill="#cbd5e1" />
      <polygon points="115,25 105,5 100,25" fill="#cbd5e1" />

      {/* OJOS blancos */}
      <ellipse cx="85" cy="90" rx="5" ry="8" fill="white" />
      <ellipse cx="115" cy="90" rx="5" ry="8" fill="white" />

      {/* NARIZ */}
      <polygon points="95,110 100,120 105,110" fill="#cbd5e1" />

      {/* OPCIONAL: ANIMACIÓN RAYO */}
      <defs>
        <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2f50ac" />
          <stop offset="50%" stopColor="#fff212" />
          <stop offset="100%" stopColor="#2f50ac" />
        </linearGradient>
      </defs>
      <style>
        {`
          svg:hover path {
            fill: url(#rayGradient);
            transition: fill 0.5s ease;
          }
        `}
      </style>
    </svg>
  );
}

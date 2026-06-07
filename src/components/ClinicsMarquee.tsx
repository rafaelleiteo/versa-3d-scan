const LOGOS = [
  { src: "/logocero.png", alt: "CERO" },
  { src: "/oralrad.png", alt: "ORAL RAD" },
  { src: "/cedt.png", alt: "CEDT" },
  { src: "/facenter.png", alt: "FACENTER" },
  { src: "/datax.png", alt: "DATA X" },
  { src: "/cerdo.png", alt: "CERDO" },
  { src: "/rorrj.png", alt: "RORRJ" },
  { src: "/inova.png", alt: "INOVA" },
  { src: "/ima.png", alt: "IMA" },
  { src: "/rr_imagem.png", alt: "RR IMAGEM" },
  { src: "/odontoz-rj.png", alt: "ODONTO-X RJ" },
  { src: "/odontoimagem45.png", alt: "ODONTO IMAGEM 45" },
];

export function ClinicsMarquee() {
  return (
    <section
      style={{
        background: "#FAFAF8",
        borderTop: "0.5px solid #E8DFC8",
        borderBottom: "0.5px solid #E8DFC8",
        padding: "26px 0 22px",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: 10,
          fontWeight: 600,
          color: "#A8893A",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: 18,
        }}
      >
        Clínicas Credenciadas em todo o Brasil
      </p>
      <div className="clinics-marquee-wrap">
        <div className="clinics-marquee-track">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <div key={i} className="clinics-marquee-item">
              <img src={l.src} alt={l.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .clinics-marquee-wrap {
          position: relative;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, #000 80px, #000 calc(100% - 80px), transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, #000 80px, #000 calc(100% - 80px), transparent);
        }
        .clinics-marquee-track {
          display: flex;
          gap: 56px;
          width: max-content;
          animation: clinicsScroll 32s linear infinite;
        }
        .clinics-marquee-wrap:hover .clinics-marquee-track {
          animation-play-state: paused;
        }
        .clinics-marquee-item img {
          max-height: 36px;
          max-width: 120px;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.45;
          transition: filter 0.3s ease, opacity 0.3s ease;
        }
        .clinics-marquee-item img:hover {
          filter: grayscale(0%);
          opacity: 1;
        }
        @keyframes clinicsScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

import { useEffect, useState } from 'react';

const MastercardLogo = ({ className }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>Mastercard</title>
    <path d="M11.343 18.031c.058.049.12.098.181.146-1.177.783-2.59 1.238-4.107 1.238C3.32 19.416 0 16.096 0 12c0-4.095 3.32-7.416 7.416-7.416 1.518 0 2.931.456 4.105 1.238-.06.051-.12.098-.165.15C9.176 6.44 7.925 5.233 6.307 5.233c-3.125 0-5.666 2.54-5.666 5.767 0 3.226 2.54 5.767 5.666 5.767 1.618 0 2.869-1.207 3.557-2.205z" fill="#FF5F00"/>
    <path d="M12.657 18.031c-.058.049-.12.098-.181.146 1.177.783 2.59 1.238 4.107 1.238C20.68 19.416 24 16.096 24 12c0-4.095-3.32-7.416-7.416-7.416-1.518 0-2.931.456-4.105 1.238.06.051.12.098.165.15 1.48 1.452 2.731 2.659 3.349 3.657 1.618 0 2.869-1.207 3.557-2.205.058.049.12.098.181.146-1.177.783-2.59 1.238-4.107 1.238C20.68 19.416 24 16.096 24 12c0-4.095-3.32-7.416-7.416-7.416-1.518 0-2.931.456-4.105 1.238.06.051.12.098.165.15 1.48 1.452 2.731 2.659 3.349 3.657z" fill="#EB001B"/>
    <path d="M12 6.174c-.096.075-.189.15-.28.231C10.156 7.764 9.169 9.765 9.169 12c0 2.236.987 4.236 2.551 5.595.09.08.185.158.28.232.096-.074.189-.152.28-.232 1.563-1.359 2.551-3.359 2.551-5.595 0-2.235-.988-4.236-2.551-5.595-.096-.074-.189-.152-.28-.231z" fill="#F79E1B"/>
  </svg>
);

const VisaLogo = ({ className, fill = '#1A1F71' }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill={fill}>
    <title>Visa</title>
    <path d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.904-1.284-3.057-3.395-3.057-1.145 0-2.005.269-2.564.504l.317 1.848c.41-.186 1.054-.406 1.729-.406 1.177 0 1.824.58 1.824 1.408 0 .616-.384.995-.994.995-.317 0-.616-.078-.869-.186l-.616 3.626c.422.125 1.145.245 1.868.245 2.137 0 3.684-.995 3.684-2.971zm3.625-1.284c-.094-1.574-1.316-2.589-3.387-2.589-2.03 0-3.427 1.015-3.516 2.589-.086.842.263 1.465.868 1.88-.545.363-.865.963-.746 1.723.205 1.332 1.425 2.204 3.394 2.204 2.313 0 3.782-1.22 3.891-3.142.055-.842-.195-1.364-.74-1.761.537-.379.846-.922.836-1.904m-3.362 4.247c-.996 0-1.533-.452-1.48-1.19.055-.738.623-1.19 1.619-1.19.996 0 1.532.452 1.479 1.19-.055.738-.623 1.19-1.618 1.19m.164-3.437c-.88 0-1.349-.363-1.309-.996.04-.623.547-.995 1.428-.995.88 0 1.348.372 1.308.995-.04.633-.546.996-1.427.996"/>
  </svg>
);

const PixLogo = ({ className, fill = '#32BCAD' }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill={fill}>
    <title>Pix</title>
    <path d="M5.283 18.36a3.505 3.505 0 0 0 2.493-1.032l3.6-3.6a.684.684 0 0 1 .946 0l3.613 3.613a3.504 3.504 0 0 0 2.493 1.032h.71l-4.56 4.56a3.647 3.647 0 0 1-5.156 0L4.85 18.36ZM18.428 5.627a3.505 3.505 0 0 0-2.493 1.032l-3.6 3.6a.684.684 0 0 1-.946 0L7.776 6.646a3.505 3.505 0 0 0-2.493-1.032H4.57l4.56-4.56a3.647 3.647 0 0 1 5.156 0l4.56 4.56h-.418ZM6.315 12c0 .345.14.676.39.917l4.294 4.294a1.298 1.298 0 0 0 1.834 0l4.294-4.294a1.305 1.305 0 0 0 0-1.834L12.833 6.79a1.298 1.298 0 0 0-1.834 0L6.705 11.083a1.305 1.305 0 0 0-.39.917"/>
  </svg>
);

// ====== CONFIGURAÇÃO DO VÍDEO ======
const VIDEO_ID = 'dQw4w9WgXcQ';

export default function LandingPageBR() {
  const [showCTA, setShowCTA] = useState(true);
  const [videoStarted, setVideoStarted] = useState(true);
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const STORAGE_KEY = 'oferta_expira_em';
    const DURACAO = 15 * 60;

    const agora = Math.floor(Date.now() / 1000);
    let expiraEm = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);

    if (!expiraEm || expiraEm <= agora) {
      expiraEm = agora + DURACAO;
      localStorage.setItem(STORAGE_KEY, expiraEm.toString());
    }

    const calcularRestante = () => {
      const agora = Math.floor(Date.now() / 1000);
      const restante = expiraEm - agora;
      if (restante <= 0) {
        expiraEm = Math.floor(Date.now() / 1000) + DURACAO;
        localStorage.setItem(STORAGE_KEY, expiraEm.toString());
        setTimeLeft(DURACAO);
      } else {
        setTimeLeft(restante);
      }
    };

    calcularRestante();
    const interval = setInterval(calcularRestante, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatarTempo = (segundos) => {
    const m = Math.floor(segundos / 60).toString().padStart(2, '0');
    const s = (segundos % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const stats = [
    ['37.642', 'Pessoas transformadas'],
    ['120', 'Dias de resultados'],
    ['98%', 'Satisfação real'],
  ];

  const pains = [
    'Você trabalha duro, mas o dinheiro nunca permanece.',
    'Ansiedade, medo e preocupação constante.',
    'Falta paz, direção e clareza na sua vida.',
    'Você já tentou de tudo, mas nada funciona.',
  ];

  const benefits = [
    {
      title: 'Prosperidade',
      desc: 'Aprenda princípios poderosos para destravar abundância e crescimento pessoal.',
    },
    {
      title: 'Proteção Espiritual',
      desc: 'Fortaleça sua energy e desenvolva mais clareza espiritual no dia a dia.',
    },
    {
      title: 'Transformação Pessoal',
      desc: 'Mude padrões emocionais e descubra uma nova direção para sua vida.',
    },
  ];

  const testimonials = [
    {
      name: 'Mariana Costa',
      image: '/assets/mariana.jpg',
      text: '"Depois que comecei a fazer a oração, minha vida financeira mudou completamente. Em menos de 2 semanas consegui fechar contratos que eu tentava há meses."',
    },
    {
      name: 'Carlos Eduardo',
      image: '/assets/carlos.jpg',
      text: '"Achei que era só mais uma promessa… mas senti paz, clareza e uma transformação absurda dentro da minha casa."',
    },
    {
      name: 'Fernanda Lima',
      image: '/assets/fernanda.jpg',
      text: '"Hoje eu faço essa oração todos os dias. Minha ansiedade diminuiu e comecei a prosperar novamente."',
    },
  ];

  useEffect(() => {
    let timer;

    if (videoStarted) {
      timer = setTimeout(() => {
        setShowCTA(true);
      }, 180000);
    }

    return () => clearTimeout(timer);
  }, [videoStarted]);

  useEffect(() => {
    if (document.getElementById('vturb-player-script')) {
      setVideoStarted(true);
      return;
    }

    const s = document.createElement('script');
    s.id = 'vturb-player-script';
    s.src = 'https://scripts.converteai.net/ddcd638e-6f98-44c3-b326-5ddb6879caf1/players/6a18ecf65045d459043ae0c1/v4/player.js';
    s.async = true;
    s.onload = () => setVideoStarted(true);
    document.head.appendChild(s);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F4EC] text-[#172033] overflow-x-hidden">
      {/* TOP BAR */}
      <div className="bg-[#07192E] text-white text-center py-3 text-sm font-semibold tracking-wide sticky top-0 z-50 shadow-md">
        ⚡ OFERTA ESPECIAL ENCERRA EM{' '}
        <span className="inline-block bg-red-600 text-white font-black px-2 py-0.5 rounded ml-1 tabular-nums animate-countdown">
          {formatarTempo(timeLeft)}
        </span>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-10 md:px-12 lg:px-20 bg-[#F8F4EC]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#E8C48B]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D8B07A]/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 mb-14 animate-fadeInUp">
          <div className="group flex items-center gap-2 rounded-full border border-[#D9C2A0] bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#172033]/80 backdrop-blur">
            <span className="text-[#C6862D] animate-pulse">★</span>
            <span>37.642 pessoas já transformaram suas vidas</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#7B7F89]">
            Visto em:
            <div className="flex items-center gap-2">
              {['🇧🇷', '🇺🇸', '🇲🇽', '🇪🇸'].map((flag, index) => (
                <span
                  key={index}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E7D7BF] bg-white text-base transition hover:-translate-y-0.5 hover:shadow-sm"
                >
                  {flag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
          <div className="animate-fadeInUp">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C6862D]">
              Uma oração antiga • um poder real
            </p>

            <h1 className="mt-5 font-serif text-[2.4rem] font-bold leading-[1.08] tracking-tight text-[#172033] md:text-[3.2rem] lg:text-[4rem] max-w-2xl">
              A oração esquecida que está transformando a vida{' '}
              <span className="italic gold-shimmer font-black">
                financeira e espiritual
              </span>{' '}
              de milhares de brasileiros
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#6B7280]">
              Antes de dormir, dedique alguns minutos a esta poderosa oração e abra as portas da prosperidade, paz e abundância que você sempre buscou.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="reveal rounded-3xl border border-[#D8B07A]/20 bg-white/80 px-5 py-4 text-center shadow-sm backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <p className="text-2xl font-bold tracking-tight text-[#172033] gold-shimmer">
                    {item[0]}
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#7B7F89]">
                    {item[1]}
                  </p>
                </div>
              ))}
            </div>

            {showCTA && (
              <div className="mt-8 animate-bounceIn">
                <a href="https://go.perfectpay.com.br/PPU38CQ9H61" target="_blank" rel="noopener noreferrer" className="group btn-premium inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#C6862D] to-[#B77927] px-8 py-4 text-white font-bold hover:shadow-lg transition">
                  <span>QUERO ACESSAR AGORA</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            )}

            <p className="mt-4 flex items-center gap-2 text-xs text-[#7B7F89]">
              <span className="text-[#C6862D]">🛡</span>
              Garantia de 30 dias • Acesso imediato • Pagamento 100% seguro
            </p>
          </div>

          {/* PLAYER DA VSL CONVERTEAI - 9:16 VERTICAL COM MOLDURA DE CELULAR PREMIUM */}
          <div className="relative reveal-right w-full max-w-[360px] sm:max-w-[380px] mx-auto flex flex-col items-center">
            
            {/* Moldura Externa do Celular */}
            <div className="relative w-full rounded-[38px] sm:rounded-[46px] p-2.5 sm:p-3 bg-gradient-to-b from-[#0e243a] to-[#040d16] border-[4px] border-[#C6862D]/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10 overflow-hidden">
              
              {/* Brilho reflexivo na tela (Diagonal Glass Effect) */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10 z-20 rounded-[28px] sm:rounded-[36px]" />
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 sm:w-28 sm:h-4.5 bg-black rounded-full z-30 flex items-center justify-end px-3">
                {/* Câmera Frontal */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#101f30] border border-[#2b3a4a]/40" />
              </div>

              {/* Tela do Celular (Onde fica o vídeo) */}
              <div className="w-full overflow-hidden rounded-[28px] sm:rounded-[36px] bg-black relative z-10 aspect-[9/16] shadow-inner">
                <vturb-smartplayer
                  id="vid-6a18ecf65045d459043ae0c1"
                  style={{ 
                    display: 'block', 
                    width: '100%', 
                    height: '100%',
                    position: 'relative'
                  }}
                ></vturb-smartplayer>
              </div>
            </div>

            {/* Rodapé com Validação Social */}
            <div className="w-full max-w-[360px] sm:max-w-[380px] flex items-center gap-4 px-5 py-4 bg-white/70 backdrop-blur rounded-[20px] mt-4 border border-[#D9C2A0]/20 shadow-sm">
              <div className="flex -space-x-3 shrink-0">
                {[
                  'https://randomuser.me/api/portraits/women/65.jpg',
                  'https://randomuser.me/api/portraits/men/22.jpg',
                  'https://randomuser.me/api/portraits/women/45.jpg',
                ].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="avatar"
                    className="h-9 w-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="text-sm leading-snug text-[#6B7280]">
                Junte-se a milhares de pessoas que já estão vivendo milagres em suas vidas todos os dias.
              </p>
            </div>

            {showCTA && (
              <div className="mt-6 w-full max-w-[360px] sm:max-w-[380px] rounded-2xl border border-[#D8B07A]/30 bg-white p-6 text-center shadow-lg backdrop-blur animate-bounceIn z-10 relative">
                <p className="text-sm uppercase tracking-[0.2em] text-[#B77927] font-bold mb-4 animate-pulse">
                  Seu acesso foi liberado
                </p>

                <a href="https://go.perfectpay.com.br/PPU38CQ9H61" target="_blank" rel="noopener noreferrer" className="group btn-premium inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#C6862D] to-[#B77927] px-8 py-4 text-white font-bold hover:shadow-lg transition">
                  <span>QUERO ACESSAR AGORA</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            )}

            {/* SPONSORS SECTION */}
            <div className="sponsors-block mt-6 w-full rounded-[24px] border border-[#D9C2A0]/20 bg-white/70 p-5 backdrop-blur shadow-md text-center reveal-scale animate-float-slow relative z-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#7B7F89] mb-4">
                Transmitido e Apoiado por
              </p>
              <div className="flex items-center justify-around gap-6 flex-wrap">
                <div className="flex flex-col items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                  <svg className="h-10 w-24" viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 8c-3-2-8-2-12 1-3-2-7-3-10-3C12 6 4 11 4 18c0 5 4 10 9 10 1-.2 1.5-.5 2-.8 3-1.5 5-4.5 5-7.7 0-3.5 2.5-6.5 6-7.5" stroke="#0073C2" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <path d="M26 12c3-1.5 7-1.5 10 0 4 2 8 2.5 12 1 1.5 1.5 3 2 4.5 2 2.5-.2 5-1.5 6-3" stroke="#0073C2" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <circle cx="24" cy="18" r="1.5" fill="#0073C2" />
                    <text x="56" y="25" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="800" fill="#0073C2" letterSpacing="0.2">Canção</text>
                    <text x="56" y="35" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="800" fill="#0073C2" letterSpacing="0.2">Nova</text>
                    <line x1="56" y1="39" x2="110" y2="39" stroke="#0073C2" strokeWidth="1.5" />
                    <text x="76" y="46" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="900" fill="#0073C2" letterSpacing="1">TV</text>
                  </svg>
                </div>

                <div className="flex flex-col items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                  <svg className="h-10 w-24" viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="22" r="17" fill="#F4C234" />
                    <path d="M20 7c0 0-8 15-9 22M20 7c0 0-4 16-5 23M20 7c0 0 0 17 0 25M20 7c0 0 4 16 5 23M20 7c0 0 8 15 9 22" stroke="#005BAB" strokeWidth="2.2" strokeLinecap="round" />
                    <text x="44" y="27" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="900" fill="#D49E10" letterSpacing="1.2">APARECIDA</text>
                  </svg>
                </div>

                <div className="flex flex-col items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                  <svg className="h-10 w-24" viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="goldStar" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFA600" />
                        <stop offset="100%" stopColor="#FFE054" />
                      </linearGradient>
                    </defs>
                    <path d="M20 5 L23 15 L32 12 L24 19 L28 29 L20 22 L12 29 L16 19 L8 12 L17 15 Z" fill="url(#goldStar)" />
                    <text x="40" y="23" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="900" fill="#0074B7" letterSpacing="0.8">REDE</text>
                    <text x="68" y="23" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="900" fill="#0074B7" letterSpacing="0.8">VIDA</text>
                    <text x="40" y="32" fontFamily="system-ui, sans-serif" fontSize="6.5" fontWeight="600" fill="#7B7F89" letterSpacing="1">A TV DA FAMÍLIA</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* VERIFIED SUPPORTERS */}
            <div className="sponsors-block mt-6 w-full rounded-[24px] border border-[#D9C2A0]/20 bg-white/70 p-5 backdrop-blur shadow-md text-left reveal-scale relative z-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#7B7F89] mb-4 text-center">
                Apoiadores Recomendados
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="group flex items-center gap-3 bg-white/60 hover:bg-white rounded-2xl p-2.5 border border-[#D9C2A0]/10 hover:border-[#C6862D]/30 shadow-sm hover:shadow-md transition">
                  <img
                    src="/assets/frei-gilson.jpg"
                    alt="Frei Gilson"
                    className="w-10 h-10 rounded-full object-cover border border-[#C6862D]/20 shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[12px] font-extrabold text-[#172033] leading-none flex items-center gap-1 min-w-0">
                      <span className="truncate">Frei Gilson</span>
                      <svg className="w-3.5 h-3.5 fill-[#0095F6] verified-badge shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </span>
                    <span className="text-[9px] text-[#7B7F89] mt-1 font-medium leading-none">Recomendado</span>
                  </div>
                </div>

                <div className="group flex items-center gap-3 bg-white/60 hover:bg-white rounded-2xl p-2.5 border border-[#D9C2A0]/10 hover:border-[#C6862D]/30 shadow-sm hover:shadow-md transition">
                  <img
                    src="/assets/fabio-de-melo.jpg"
                    alt="Padre Fábio de Melo"
                    className="w-10 h-10 rounded-full object-cover border border-[#C6862D]/20 shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-[#172033] leading-none flex items-center gap-1 min-w-0">
                      <span className="truncate">Pe. Fábio Melo</span>
                      <svg className="w-3.5 h-3.5 fill-[#0095F6] verified-badge shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </span>
                    <span className="text-[9px] text-[#7B7F89] mt-1 font-medium leading-none">Recomendado</span>
                  </div>
                </div>

                <div className="group flex items-center gap-3 bg-white/60 hover:bg-white rounded-2xl p-2.5 border border-[#D9C2A0]/10 hover:border-[#C6862D]/30 shadow-sm hover:shadow-md transition">
                  <img
                    src="/assets/marcelo-rossi.jpg"
                    alt="Padre Marcelo Rossi"
                    className="w-10 h-10 rounded-full object-cover border border-[#C6862D]/20 shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-[#172033] leading-none flex items-center gap-1 min-w-0">
                      <span className="truncate">Pe. M. Rossi</span>
                      <svg className="w-3.5 h-3.5 fill-[#0095F6] verified-badge shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </span>
                    <span className="text-[9px] text-[#7B7F89] mt-1 font-medium leading-none">Recomendado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section className="bg-[#F3EBDD] py-24 px-6 relative overflow-hidden section-glow">
        <div className="max-w-6xl mx-auto text-center">
          <div className="reveal text-[#C28A3D] uppercase tracking-[0.25em] text-xs mb-6 font-bold">
            Você se sente assim?
          </div>

          <h2 className="reveal text-4xl md:text-6xl font-black text-[#172033] leading-tight max-w-4xl mx-auto mb-16 font-serif">
            Você tenta de tudo... mas sente que nada realmente muda.
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {pains.map((item, index) => (
              <div
                key={index}
                className="reveal rounded-3xl border border-[#D8B07A]/10 bg-white/40 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:bg-white/80"
              >
                <div className="w-12 h-12 rounded-full border border-[#D8B07A] mx-auto mb-5 flex items-center justify-center text-[#C6862D] text-xl animate-float-slow">
                  ✦
                </div>
                <p className="text-[#5F6572] leading-relaxed text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MYSTERY SECTION */}
      <section className="py-24 px-6 bg-[#F8F4EC] relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="text-[#C28A3D] uppercase tracking-[0.25em] text-xs mb-4 font-bold">
              O segredo escondido
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8 text-[#172033] font-serif">
              Um Conhecimento Que Ficou Oculto Por Décadas
            </h2>

            <p className="text-[#5F6572] text-base leading-relaxed mb-6">
              Este material reúne ensinamentos raros que foram preservados ao longo do tempo para destravar caminhos e restabelecer a harmonia.
            </p>

            <p className="text-[#6B7280] text-base leading-relaxed">
              Muitos afirmam perceber mudanças profundas em prosperidade e clareza espiritual ao colocar estas palavras ancestrais em prática.
            </p>
          </div>

          <div className="reveal-right">
            <img
              src="/assets/arcanjo-miguel.jpg"
              alt="Arcanjo Miguel"
              className="rounded-[28px] shadow-2xl border border-[#E7D7BF] transition-all duration-500 hover:scale-[1.02] hover:shadow-amber-500/10"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-6 bg-[#07192E] text-white relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="reveal text-[#D8B07A] uppercase tracking-[0.25em] text-xs mb-4 font-bold">
            O que você vai descobrir
          </div>

          <h2 className="reveal text-4xl md:text-5xl font-black mb-16 font-serif">
            Benefícios Que Estão Impactando Milhares
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="reveal-scale bg-[#0E2744]/60 border border-[#C6862D]/20 rounded-3xl p-10 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#0E2744] hover:border-[#C6862D]/40"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#C6862D]/20 border border-[#C6862D]/30 text-[#F3D19C] flex items-center justify-center text-3xl font-black mx-auto mb-6 animate-float">
                  ✦
                </div>

                <h3 className="text-2xl font-black mb-4 text-[#F3D19C]">
                  {item.title}
                </h3>

                <p className="text-[#CBD5E1] leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-[#F8F4EC] relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="reveal text-[#C28A3D] uppercase tracking-[0.25em] text-xs mb-4 font-bold">
            Relatos reais
          </div>

          <h2 className="reveal text-4xl md:text-5xl font-black mb-16 text-[#172033] font-serif">
            Pessoas Que Aplicaram e Viram Resultados
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="reveal bg-white/90 border border-[#E7D7BF] rounded-3xl p-8 text-left shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#D8B07A]/50"
              >
                <div className="flex items-center gap-1 text-[#C6862D] text-lg mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-[#5F6572] text-[14px] leading-relaxed mb-8 italic">
                  {item.text}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#F3EBDD]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white ring-2 ring-[#D8B07A]/30"
                  />

                  <div>
                    <div className="text-[#172033] font-bold text-base">
                      {item.name}
                    </div>

                    <div className="flex items-center gap-1 mt-0.5 text-xs font-semibold uppercase tracking-wider text-[#B77927]">
                      <svg className="w-4 h-4 text-[#C6862D]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
                      </svg>
                      <span>Cliente Verificado</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="py-24 px-6 bg-[#07192E] text-white relative">
        <div className="max-w-4xl mx-auto text-center border border-[#C6862D]/20 rounded-[30px] px-4 py-12 sm:px-10 md:p-20 bg-[#0B213B]/80 backdrop-blur-md shadow-2xl reveal-scale">
          <div className="text-[#D8B07A] uppercase tracking-[0.25em] text-xs mb-4 font-bold">
            Oferta especial
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight font-serif">
            Receba Acesso Imediato Agora
          </h2>

          <p className="text-[#CBD5E1] text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Clique no botão abaixo e desbloqueie imediatamente o conteúdo completo do Manuscrito Sagrado com desconto especial.
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            <span className="text-gray-400 line-through text-lg sm:text-xl">
              R$197
            </span>

            <span className="text-[#F3D19C] text-4xl sm:text-5xl md:text-6xl font-black gold-shimmer animate-glow-text whitespace-nowrap">
              R$29,90
            </span>
          </div>

          {showCTA ? (
            <div className="animate-bounceIn">
              <a href="https://go.perfectpay.com.br/PPU38CQ9H61" target="_blank" rel="noopener noreferrer" className="group btn-premium inline-block bg-[#C6862D] hover:bg-[#B77927] text-white font-bold px-8 py-4 rounded-xl transition duration-300 hover:shadow-lg">
                LIBERAR MEU ACESSO
              </a>

              <div className="mt-12 flex flex-col items-center gap-6">
                <div className="bg-white rounded-3xl p-6 shadow-2xl border border-[#D8B07A]/20 max-w-md w-full">
                  <div className="flex items-center justify-center mb-4">
                    <img src="/assets/garantia-30-dias.jpg" alt="Garantia 30 Dias" className="h-28 w-28 object-contain transition duration-300 hover:scale-105" />
                  </div>

                  <h3 className="text-[#172033] text-2xl font-black mb-2">
                    Garantia Blindada de 30 Dias
                  </h3>

                  <p className="text-[#5F6572] leading-relaxed text-base">
                    Você terá 30 dias completos para acessar o conteúdo. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                  <div className="bg-white rounded-lg p-1.5 flex items-center justify-center h-9 w-14 shadow-md transition duration-300 hover:scale-105">
                    <MastercardLogo className="h-full w-full object-contain" />
                  </div>
                  <div className="bg-white rounded-lg p-1.5 flex items-center justify-center h-9 w-14 shadow-md transition duration-300 hover:scale-105">
                    <VisaLogo className="h-full w-full object-contain" fill="#1A1F71" />
                  </div>
                  <div className="bg-white rounded-lg p-1.5 flex items-center justify-center h-9 w-14 shadow-md transition duration-300 hover:scale-105">
                    <PixLogo className="h-full w-full object-contain" fill="#32BCAD" />
                  </div>
                </div>

                <div className="text-[#94A3B8] text-sm">
                  Pagamento 100% seguro • Garantia de 30 dias
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-lg mx-auto transition-all duration-300">
              <div className="flex justify-center mb-4 text-[#D8B07A] text-3xl animate-pulse">
                🔒
              </div>
              <h3 className="text-[#F3D19C] text-lg font-bold">Oferta Promocional Reservada</h3>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                Assista ao vídeo explicativo acima. O link de liberação com desconto será disponibilizado automaticamente em instantes aqui nesta seção.
              </p>
              <div className="mt-4 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="h-full countdown-bar rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1E293B]/60 py-16 px-6 bg-[#061321] text-[#CBD5E1] relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <div>
            <div className="text-2xl font-black text-white mb-4 font-serif tracking-wide">
              Manuscrito Sagrado
            </div>

            <p className="leading-relaxed text-sm text-[#94A3B8]">
              Um projeto desenvolvido para ajudar pessoas a encontrarem prosperidade, clareza espiritual e transformação pessoal.
            </p>
          </div>

          <div>
            <div className="text-lg font-bold text-white mb-4">
              Formas de pagamento
            </div>

            <div className="flex items-center gap-3 flex-wrap mt-2">
              <div className="bg-white rounded-lg p-1.5 flex items-center justify-center h-9 w-14 shadow-md transition duration-300 hover:scale-105">
                <MastercardLogo className="h-full w-full object-contain" />
              </div>
              <div className="bg-white rounded-lg p-1.5 flex items-center justify-center h-9 w-14 shadow-md transition duration-300 hover:scale-105">
                <VisaLogo className="h-full w-full object-contain" fill="#1A1F71" />
              </div>
              <div className="bg-white rounded-lg p-1.5 flex items-center justify-center h-9 w-14 shadow-md transition duration-300 hover:scale-105">
                <PixLogo className="h-full w-full object-contain" fill="#32BCAD" />
              </div>
            </div>
          </div>

          <div>
            <div className="text-lg font-bold text-white mb-4">
              Suporte
            </div>

            <p className="text-[#94A3B8] text-sm leading-relaxed">
              suporte@manusescritosagrado.com
            </p>

            <p className="mt-4 text-xs text-[#64748B]">
              Atendimento em horário comercial.
            </p>
          </div>
        </div>

        <div className="border-t border-[#1E293B]/40 mt-12 pt-8 text-center text-sm text-[#64748B]">
          © 2026 Manuscrito Sagrado • Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

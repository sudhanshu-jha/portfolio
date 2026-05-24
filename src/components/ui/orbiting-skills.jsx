import React, { useEffect, useState, memo } from 'react';

const iconComponents = {
  javascript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E"/>
        <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#323330"/>
      </svg>
    ),
    color: '#F7DF1E',
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
        </g>
      </svg>
    ),
    color: '#61DAFB',
  },
  node: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247zm2.717-6.993c-3.849 0-4.654-1.766-4.654-3.246 0-.14.114-.253.256-.253h1.136c.127 0 .232.091.252.215.173 1.164.686 1.752 3.01 1.752 1.852 0 2.639-.419 2.639-1.401 0-.566-.224-1.03-3.099-1.249-2.404-.184-3.89-.768-3.89-2.689 0-1.771 1.491-2.825 3.991-2.825 2.808 0 4.199.975 4.377 3.068.007.072-.019.141-.065.193-.047.049-.111.077-.178.077h-1.14c-.119 0-.225-.083-.248-.196-.276-1.224-.944-1.616-2.746-1.616-2.023 0-2.259.705-2.259 1.234 0 .641.278.827 3.006 1.19 2.7.359 3.982.866 3.982 2.771 0 1.922-1.603 3.024-4.399 3.024z" fill="#339933"/>
      </svg>
    ),
    color: '#339933',
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/>
      </svg>
    ),
    color: '#06B6D4',
  },
  python: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.031v-2.864s-.109-3.403 3.347-3.403h5.769s3.24.052 3.24-3.131V3.129S18.28 0 11.914 0zm-3.24 1.814a1.048 1.048 0 1 1 0 2.096 1.048 1.048 0 0 1 0-2.096z" fill="#3776AB"/>
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.031v2.864s.109 3.403-3.347 3.403h-5.769s-3.24-.052-3.24 3.131v5.404S5.72 24 12.086 24zm3.24-1.814a1.048 1.048 0 1 1 0-2.096 1.048 1.048 0 0 1 0 2.096z" fill="#FFD43B"/>
      </svg>
    ),
    color: '#3776AB',
  },
  fastapi: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0C5.375 0 0 5.375 0 12c0 6.626 5.375 12 12 12 6.626 0 12-5.374 12-12 0-6.625-5.374-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z" fill="#009688"/>
      </svg>
    ),
    color: '#009688',
  },
  ml: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="3"  cy="6"  r="2" fill="#FF6D00"/>
        <circle cx="3"  cy="12" r="2" fill="#FF6D00"/>
        <circle cx="3"  cy="18" r="2" fill="#FF6D00"/>
        <circle cx="12" cy="9"  r="2" fill="#FF6D00"/>
        <circle cx="12" cy="15" r="2" fill="#FF6D00"/>
        <circle cx="21" cy="12" r="2" fill="#FF6D00"/>
        <line x1="5"  y1="6"  x2="10" y2="9"  stroke="#FF6D00" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="5"  y1="12" x2="10" y2="9"  stroke="#FF6D00" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="5"  y1="18" x2="10" y2="9"  stroke="#FF6D00" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="5"  y1="6"  x2="10" y2="15" stroke="#FF6D00" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="5"  y1="12" x2="10" y2="15" stroke="#FF6D00" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="5"  y1="18" x2="10" y2="15" stroke="#FF6D00" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="14" y1="9"  x2="19" y2="12" stroke="#FF6D00" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="14" y1="15" x2="19" y2="12" stroke="#FF6D00" strokeWidth="0.8" strokeOpacity="0.6"/>
      </svg>
    ),
    color: '#FF6D00',
  },
  mcp: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="12" cy="12" r="3"   fill="#CC785C"/>
        <circle cx="4"  cy="6"  r="2"   fill="#CC785C" fillOpacity="0.8"/>
        <circle cx="20" cy="6"  r="2"   fill="#CC785C" fillOpacity="0.8"/>
        <circle cx="4"  cy="18" r="2"   fill="#CC785C" fillOpacity="0.8"/>
        <circle cx="20" cy="18" r="2"   fill="#CC785C" fillOpacity="0.8"/>
        <line x1="6"  y1="7"  x2="10" y2="11" stroke="#CC785C" strokeWidth="1" strokeOpacity="0.7"/>
        <line x1="18" y1="7"  x2="14" y2="11" stroke="#CC785C" strokeWidth="1" strokeOpacity="0.7"/>
        <line x1="6"  y1="17" x2="10" y2="13" stroke="#CC785C" strokeWidth="1" strokeOpacity="0.7"/>
        <line x1="18" y1="17" x2="14" y2="13" stroke="#CC785C" strokeWidth="1" strokeOpacity="0.7"/>
      </svg>
    ),
    color: '#CC785C',
  },
};

const skillsConfig = [
  { id: 'javascript', orbitRadius: 100, size: 44, speed: 1,    iconType: 'javascript', phaseShift: 0,               glowColor: 'cyan',   label: 'JavaScript' },
  { id: 'react',      orbitRadius: 180, size: 50, speed: -0.6, iconType: 'react',      phaseShift: 0,               glowColor: 'purple', label: 'React' },
  { id: 'node',       orbitRadius: 180, size: 45, speed: -0.6, iconType: 'node',       phaseShift: (2 * Math.PI) / 3, glowColor: 'purple', label: 'Node.js' },
  { id: 'tailwind',   orbitRadius: 180, size: 40, speed: -0.6, iconType: 'tailwind',   phaseShift: (4 * Math.PI) / 3, glowColor: 'purple', label: 'Tailwind CSS' },
  { id: 'python',  orbitRadius: 240, size: 48, speed: 0.35, iconType: 'python',  phaseShift: 0,                  glowColor: 'green',  label: 'Python' },
  { id: 'ml',      orbitRadius: 240, size: 44, speed: 0.35, iconType: 'ml',      phaseShift: Math.PI / 2,        glowColor: 'green',  label: 'Machine Learning' },
  { id: 'fastapi', orbitRadius: 240, size: 44, speed: 0.35, iconType: 'fastapi', phaseShift: Math.PI,            glowColor: 'green',  label: 'FastAPI' },
  { id: 'mcp',     orbitRadius: 240, size: 44, speed: 0.35, iconType: 'mcp',     phaseShift: (3 * Math.PI) / 2, glowColor: 'green',  label: 'MCP' },
];

const SkillIcon = memo(({ type }) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

const OrbitingSkill = memo(({ config, angle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;
  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg'}`}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined,
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }) => {
  const colors = {
    cyan:   { primary: 'rgba(6,182,212,0.4)',   secondary: 'rgba(6,182,212,0.2)',   border: 'rgba(6,182,212,0.3)' },
    purple: { primary: 'rgba(147,51,234,0.4)',  secondary: 'rgba(147,51,234,0.2)',  border: 'rgba(147,51,234,0.3)' },
    green:  { primary: 'rgba(0,150,136,0.4)',   secondary: 'rgba(0,150,136,0.2)',   border: 'rgba(0,150,136,0.3)' },
  }[glowColor] || { primary: 'rgba(6,182,212,0.4)', secondary: 'rgba(6,182,212,0.2)', border: 'rgba(6,182,212,0.3)' };

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
    >
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animationDelay: `${animationDelay}s`,
        }}
      />
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: `1px solid ${colors.border}`, boxShadow: `inset 0 0 20px ${colors.secondary}` }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

const orbitConfigs = [
  { radius: 100, glowColor: 'cyan',   delay: 0   },
  { radius: 180, glowColor: 'purple', delay: 1.5 },
  { radius: 240, glowColor: 'green',  delay: 3   },
];

export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    let animId;
    let lastTime = performance.now();
    const animate = (now) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      setTime((t) => t + delta);
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  return (
    <div className="w-full flex items-center justify-center overflow-hidden">
      <div
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[560px] md:h-[560px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Central code icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#orbitGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
        </div>

        {orbitConfigs.map((cfg) => (
          <GlowingOrbitPath key={cfg.radius} radius={cfg.radius} glowColor={cfg.glowColor} animationDelay={cfg.delay} />
        ))}

        {skillsConfig.map((config) => (
          <OrbitingSkill
            key={config.id}
            config={config}
            angle={time * config.speed + config.phaseShift}
          />
        ))}
      </div>
    </div>
  );
}

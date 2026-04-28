import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, ExternalLink, Layout, Code, Zap, Database, ShoppingCart, 
  Video, Palette, Smartphone, Target, Film, Share2, PenTool, 
  Shield, MessageCircle, ChevronRight
} from 'lucide-react';

// --- DATA ---
const WHATSAPP_LINK = "https://wa.me/923147600260";
const EMAIL_ADDRESS = "muhhuzaifa6090@gmail.com";

const SKILLS = [
  { name: "HTML5 / CSS3", Icon: Layout, level: "95%" },
  { name: "JavaScript", Icon: Code, level: "90%" },
  { name: "React JS", Icon: Zap, level: "85%" },
  { name: "WordPress", Icon: Database, level: "98%" },
  { name: "Shopify", Icon: ShoppingCart, level: "95%" },
  { name: "Video Editing", Icon: Video, level: "88%" },
  { name: "Canva Pro", Icon: Palette, level: "92%" }
];

const PROJECTS = [
  { id: 1, title: "Canada Wheels", description: "High-performance e-commerce platform for automotive wheels and accessories.", tags: ["Shopify", "E-commerce"], link: "https://canadawheels.com", gradient: "from-blue-600 to-cyan-500", Icon: ShoppingCart },
  { id: 2, title: "Electric House", description: "Modern digital presence for electrical services and products.", tags: ["HTML/CSS", "Bootstrap"], link: "https://electrichouse.net", gradient: "from-amber-500 to-orange-600", Icon: Zap },
  { id: 3, title: "Zartaj", description: "Elegant online retail platform with a focus on user experience.", tags: ["WordPress", "CMS"], link: "https://zartaj.com.pk", gradient: "from-purple-600 to-pink-500", Icon: Layout },
  { id: 4, title: "Zainulhaq Foundation", description: "Digital platform for a non-profit foundation dedicated to social welfare and healthcare support.", tags: ["WordPress", "Non-Profit"], link: "https://zainulhaqfoundation.org", gradient: "from-emerald-500 to-teal-600", Icon: Shield }
];

const EXPERIENCE = [
  {
    period: "2021 - PRESENT",
    role: "Lead Web & E-commerce Developer",
    company: "Freelance / Self-Employed",
    desc: "Architected 30+ high-conversion stores. Specialized in custom Shopify themes and WordPress optimization.",
    skills: ["React", "Liquid", "SEO"]
  },
  {
    period: "2023 - 2024",
    role: "Video Editor & Digital Marketer",
    company: "Haq Orthopaedic Hospital",
    desc: "Managed full-scale digital presence and produced surgical/promotional video content for hospital growth.",
    skills: ["Premiere Pro", "Social Ads", "Canva"]
  }
];

const SERVICES = [
  { title: "Web Development", desc: "Bespoke, high-performance websites built with the latest React and Tailwind frameworks.", icon: Layout, color: "from-blue-500 to-cyan-400" },
  { title: "E-commerce Mastery", desc: "End-to-end Shopify and WordPress store development designed to convert visitors.", icon: ShoppingCart, color: "from-cyan-500 to-blue-600" },
  { title: "Visual Storytelling", desc: "Professional video editing and high-end graphic design that captures your brand's voice.", icon: Video, color: "from-indigo-500 to-blue-500" },
  { title: "Digital Growth", desc: "Strategic social media marketing and SEO optimization to scale your business presence.", icon: Target, color: "from-[#00aaff] to-cyan-500" }
];

const MARQUEE_ITEMS = [
  { name: "WordPress", Icon: Database },
  { name: "Shopify", Icon: ShoppingCart },
  { name: "Canva Pro", Icon: Palette },
  { name: "Video Editing", Icon: Film },
  { name: "Meta Ads", Icon: Target },
  { name: "Social Media", Icon: Share2 },
  { name: "UI/UX Design", Icon: PenTool },
  { name: "Bootstrap", Icon: Layout }
];

// --- GLOBE COMPONENT ---
const DigitalGlobe = () => {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const skillsToDisplay = SKILLS.slice(0, 7);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight || 500;
    };
    window.addEventListener('resize', resize);
    resize();

    const points = [];
    for (let i = 0; i < 4000; i++) {
      const y = 1 - (i / 3999) * 2;
      const rAtY = Math.sqrt(1 - y * y);
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;
      const x = Math.cos(theta) * rAtY;
      const z = Math.sin(theta) * rAtY;
      const noise = (Math.sin(x * 5) * Math.cos(y * 5) + Math.sin(z * 4) * Math.cos(x * 3));
      const isContinent = noise > 0.1;
      points.push({ x, y, z, isContinent });
    }

    const rings = [
      { y: 0.5, r: 1.2, speed: 0.002, opacity: 0.3 },
      { y: 0.2, r: 1.4, speed: -0.0015, opacity: 0.5 },
      { y: -0.1, r: 1.5, speed: 0.0025, opacity: 0.4 },
      { y: -0.4, r: 1.3, speed: -0.001, opacity: 0.2 }
    ];

    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += isHovered ? 0.008 : 0.003;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const globeRadius = Math.min(canvas.width, canvas.height) * 0.38;

      const project = (x, y, z) => {
        let x1 = x * Math.cos(time) - z * Math.sin(time);
        let z1 = x * Math.sin(time) + z * Math.cos(time);
        let y2 = y * Math.cos(0.3) - z1 * Math.sin(0.3);
        let z2 = y * Math.sin(0.3) + z1 * Math.cos(0.3);
        const pS = 700 / (700 + z2 * globeRadius);
        return { sx: centerX + x1 * globeRadius * pS, sy: centerY + y2 * globeRadius * pS, z: z2 };
      };

      rings.forEach(ring => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 170, 255, ${ring.opacity * 0.2})`;
        for(let i=0; i<=100; i++) {
          const angle = (i/100) * Math.PI * 2 + (time * ring.speed * 50);
          const rBase = Math.sqrt(Math.max(0, 1 - ring.y * ring.y)) * ring.r;
          const p = project(Math.cos(angle) * rBase, ring.y, Math.sin(angle) * rBase);
          if(p.z > 0) { if(i === 0) ctx.moveTo(p.sx, p.sy); else ctx.lineTo(p.sx, p.sy); }
          else { ctx.stroke(); ctx.beginPath(); }
        }
        ctx.stroke();
      });

      const rotated = points.map(p => ({...p, ...project(p.x, p.y, p.z)})).sort((a,b) => b.z - a.z);
      rotated.forEach(p => {
        const opacity = Math.max(0.1, 1 - ((p.z + 1) / 2));
        ctx.fillStyle = p.isContinent ? `rgba(0, 170, 255, ${opacity * 1.5})` : `rgba(0, 100, 255, ${opacity * 0.2})`;
        ctx.fillRect(p.sx, p.sy, p.isContinent ? 1.6 : 0.8, p.isContinent ? 1.6 : 0.8);
      });

      rings.forEach(ring => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 170, 255, ${ring.opacity})`;
        for(let i=0; i<=100; i++) {
          const angle = (i/100) * Math.PI * 2 + (time * ring.speed * 50);
          const rBase = Math.sqrt(Math.max(0, 1 - ring.y * ring.y)) * ring.r;
          const p = project(Math.cos(angle) * rBase, ring.y, Math.sin(angle) * rBase);
          if(p.z <= 0) { if(i === 0) ctx.moveTo(p.sx, p.sy); else ctx.lineTo(p.sx, p.sy); }
          else { ctx.stroke(); ctx.beginPath(); }
        }
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => { cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', resize); };
  }, [isHovered]);

  return (
    <div className="w-full h-[550px] relative flex items-center justify-center">
      <canvas ref={canvasRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-full h-full cursor-pointer" />
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        {skillsToDisplay.map((skill, i) => {
          const a = (i / skillsToDisplay.length) * Math.PI * 2 - Math.PI/2;
          const x = Math.cos(a) * 230;
          const y = Math.sin(a) * 180;
          return (
            <div key={i} className="absolute p-3 bg-slate-900/80 border border-cyan-500 rounded-full text-cyan-400 backdrop-blur-md shadow-[0_0_20px_rgba(0,170,255,0.4)]" style={{ transform: `translate(${x}px, ${y}px)` }}>
              <skill.Icon size={22} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 overflow-x-hidden selection:bg-cyan-500/30">
      <nav className="flex justify-between items-center mb-20 max-w-7xl mx-auto">
        <div className="text-2xl font-black flex items-center gap-2">
           <div className="w-10 h-10 bg-[#00aaff] rounded-lg flex items-center justify-center text-white text-sm italic">MH</div>
           Huzaifa<span className="text-[#00aaff]">.</span>
        </div>
        <div className="hidden md:flex gap-10 text-slate-400 text-sm font-bold uppercase tracking-widest">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
        <div className="text-left">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter">Hey, I'm <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00aaff] to-blue-600">Huzaifa</span></h1>
          <p className="text-slate-400 text-xl mb-10 max-w-lg leading-relaxed font-medium">Expert Web Developer & Digital Strategist. Building scalable e-commerce solutions for global brands.</p>
          <div className="flex flex-wrap gap-4">
             <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-white text-black px-10 py-5 rounded-full font-black text-lg flex items-center gap-2 hover:scale-105 transition-transform"><MessageCircle size={20}/> Hire Me</a>
             <a href={`mailto:${EMAIL_ADDRESS}`} className="border border-slate-700 text-white px-10 py-5 rounded-full font-black text-lg flex items-center gap-2 hover:bg-white/5 transition-all"><Mail size={20}/> Email Me</a>
          </div>
        </div>
        <DigitalGlobe />
      </div>

      <section id="projects" className="max-w-7xl mx-auto py-24 border-t border-slate-900">
        <h2 className="text-5xl font-black mb-16 text-left tracking-tighter">Featured <span className="text-[#00aaff]">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-10 hover:border-[#00aaff]/50 transition-all group flex flex-col">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-8`}><project.Icon className="text-white" size={32} /></div>
              <h3 className="text-3xl font-black mb-4 group-hover:text-[#00aaff] transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-md mb-8 leading-relaxed font-medium">{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#00aaff] font-black text-md uppercase tracking-widest mt-auto">Visit <ExternalLink size={18} /></a>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="max-w-7xl mx-auto py-24 border-t border-slate-900">
        <h2 className="text-5xl font-black mb-12">Professional <span className="text-[#00aaff]">Journey</span></h2>
        <div className="lg:col-span-7 space-y-8">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-2xl relative overflow-hidden group">
               <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#00aaff] to-blue-600"></div>
              <span className="text-[#00aaff] text-sm font-bold block mb-2">{exp.period}</span>
              <h3 className="text-2xl font-black">{exp.role}</h3>
              <p className="text-slate-400 mb-4">{exp.company}</p>
              <p className="text-slate-500">{exp.desc}</p>
              <div className="flex gap-2 mt-4">
                {exp.skills.map(s => <span key={s} className="text-[10px] uppercase font-bold border border-slate-800 px-2 py-1 rounded text-slate-500">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto py-24 border-t border-slate-900">
        <h2 className="text-5xl font-black mb-16 tracking-tighter">Expert <span className="text-[#00aaff]">Solutions</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, idx) => (
            <div key={idx} className="bg-slate-900/30 border border-slate-800 p-8 rounded-[2rem] hover:bg-slate-900/50 transition-all group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}><s.icon className="text-white" size={28} /></div>
              <h3 className="text-xl font-black mb-4">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-32 pt-12 border-t border-slate-900 text-center">
        <div className="flex justify-center gap-6 mb-8 text-slate-400">
           <a href={WHATSAPP_LINK} className="hover:text-[#00aaff] transition-colors"><MessageCircle size={30}/></a>
           <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-[#00aaff] transition-colors"><Mail size={30}/></a>
        </div>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">&copy; {new Date().getFullYear()} MUHAMMAD HUZAIFA</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 35s linear infinite; }
      `}} />
      <div className="w-full py-12 border-t border-slate-900 overflow-hidden flex whitespace-nowrap animate-marquee">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 px-12 opacity-30 hover:opacity-100 transition-opacity cursor-default group">
            <item.Icon className="text-[#00aaff] group-hover:scale-125 transition-transform" size={24} />
            <span className="text-3xl font-black uppercase tracking-widest leading-none">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
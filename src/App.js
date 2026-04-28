import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, Mail, ExternalLink, ChevronDown, Menu, X, Code, Palette,
  ShoppingCart, Monitor, Smartphone, Video, Database, Layout, Zap,
  Briefcase, Calendar, ChevronRight, Terminal as TerminalIcon, Command, Globe,
  MessageCircle, Send, Award, CheckCircle2, Star, Rocket, Target, Sparkles, Layers,
  Cpu, Activity, Radio, Workflow, Film, Share2, MousePointer2, PenTool, Shield
} from 'lucide-react';

// --- DATA ---
const MY_NAME = "Muhammad Huzaifa";
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
  { id: 3, title: "Zartaj", description: "Elegant online retail platform with a focus on user experience.", tags: ["WordPress", "CMS"], link: "https://zartaj.com.pk", gradient: "from-purple-600 to-pink-500", Icon: Monitor },
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
  {
    title: "Web Development",
    desc: "Bespoke, high-performance websites built with the latest React and Tailwind frameworks for maximum speed and SEO.",
    icon: Layout,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "E-commerce Mastery",
    desc: "End-to-end Shopify and WordPress store development designed to convert visitors into loyal customers.",
    icon: ShoppingCart,
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Visual Storytelling",
    desc: "Professional video editing and high-end graphic design that captures your brand's unique voice.",
    icon: Video,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Digital Growth",
    desc: "Strategic social media marketing and SEO optimization to scale your business presence globally.",
    icon: Target,
    color: "from-[#00aaff] to-cyan-500"
  }
];

const MARQUEE_ITEMS = [
  { name: "WordPress", Icon: Database },
  { name: "Shopify", Icon: ShoppingCart },
  { name: "Canva Pro", Icon: Palette },
  { name: "Video Editing", Icon: Film },
  { name: "Meta Ads", Icon: Target },
  { name: "Social Media", Icon: Share2 },
  { name: "UI/UX Design", Icon: PenTool },
  { name: "Bootstrap", Icon: Layout },
  { name: "E-commerce", Icon: ShoppingCart },
  { name: "Graphics", Icon: Monitor }
];

// --- REALISTIC FUTURE GLOBE COMPONENT ---
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

      // Back Rings
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

      // Particles
      const rotated = points.map(p => ({...p, ...project(p.x, p.y, p.z)})).sort((a,b) => b.z - a.z);
      rotated.forEach(p => {
        const opacity = Math.max(0.1, 1 - ((p.z + 1) / 2));
        ctx.fillStyle = p.isContinent ? `rgba(0, 170, 255, ${opacity * 1.5})` : `rgba(0, 100, 255, ${opacity * 0.2})`;
        ctx.fillRect(p.sx, p.sy, p.isContinent ? 1.6 : 0.8, p.isContinent ? 1.6 : 0.8);
      });

      // Front Rings
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

// --- ATTRACTIVE EXPERIENCE HUB ---
const ExperienceHub = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left: Journey Timeline */}
      <div className="lg:col-span-7 space-y-8">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative pl-8 group">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 group-last:bg-transparent"></div>
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#00aaff] shadow-[0_0_10px_#00aaff]"></div>
            
            <div className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-2xl hover:border-[#00aaff]/40 transition-all backdrop-blur-sm">
              <span className="text-[10px] font-black text-[#00aaff] tracking-[0.2em] mb-2 block">{exp.period}</span>
              <h3 className="text-xl font-black text-white mb-1">{exp.role}</h3>
              <p className="text-slate-400 text-sm font-bold mb-4">{exp.company}</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{exp.desc}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map(s => (
                  <span key={s} className="text-[9px] border border-slate-800 px-2 py-1 rounded-md text-slate-400 uppercase font-bold tracking-wider">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Technical Proficiency HUD */}
      <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00aaff]/10 rounded-full blur-[60px]"></div>
        <h3 className="text-xl font-black mb-8 flex items-center gap-2">
          <Award className="text-[#00aaff]" size={20} />
          Technical Stack
        </h3>
        
        <div className="space-y-6">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                <span className="flex items-center gap-2"><skill.Icon size={14} className="text-[#00aaff]" /> {skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#00aaff] to-blue-600 rounded-full transition-all duration-1000"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white">3+</span>
              <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Years Experience</span>
            </div>
            <div className="flex flex-col items-end text-right">
              <span className="text-2xl font-black text-[#00aaff]">20+</span>
              <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Global Projects</span>
            </div>
        </div>
      </div>
    </div>
  );
};

// --- ATTRACTIVE SERVICES HUB ---
const ServicesSection = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto py-24 border-t border-slate-900">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black tracking-tighter mb-4">Specialized <span className="text-[#00aaff]">Solutions</span></h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg italic">"I don't just build websites; I create digital engines for business growth."</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="bg-slate-900/30 border border-slate-800 p-8 rounded-[2rem] hover:bg-slate-900/50 hover:border-[#00aaff]/30 transition-all group relative">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
              <service.icon className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-black text-white mb-4">{service.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
              {service.desc}
            </p>
            <div className="flex items-center gap-2 text-[#00aaff] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Learn More <ChevronRight size={12} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-cyan-500/10 p-12 rounded-[3rem] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00aaff]/5 to-transparent opacity-50"></div>
        <div className="relative z-10">
          <Sparkles className="text-[#00aaff] mx-auto mb-6" size={40} />
          <h3 className="text-4xl font-black text-white mb-6 tracking-tighter">Ready to elevate your digital presence?</h3>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto font-medium">
            Join the list of global clients who transformed their vision into high-converting digital realities.
          </p>
          <div className="flex justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-[#00aaff] text-white px-10 py-4 rounded-full font-black hover:bg-[#00aaff]/90 transition-colors shadow-[0_0_20px_rgba(0,170,255,0.3)]">
              Start a Project
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="bg-white/5 border border-slate-700 text-white px-10 py-4 rounded-full font-black hover:bg-white/10 transition-all">
              Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- UPDATED INFINITE MARQUEE WITH YOUR SPECIFIC EXPERIENCE ---
const InfiniteMarquee = () => {
  return (
    <section className="w-full py-24 bg-[#020617] border-t border-slate-900 overflow-hidden relative">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 35s linear infinite; }
      `}} />

      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10"></div>

      <div className="flex flex-col gap-12">
        {/* Row 1: Your Tools */}
        <div className="flex whitespace-nowrap animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 px-12 group cursor-default">
              <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800 group-hover:border-[#00aaff]/50 transition-all group-hover:scale-110">
                <item.Icon className="text-[#00aaff]/70 group-hover:text-[#00aaff]" size={28} />
              </div>
              <span className="text-4xl font-black text-slate-800 group-hover:text-slate-200 transition-colors uppercase tracking-widest leading-none">
                {item.name}
              </span>
              <div className="w-2 h-2 rounded-full bg-slate-800 mx-4"></div>
            </div>
          ))}
        </div>

        {/* Row 2: Your Core Services (Reverse) */}
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {[...MARQUEE_ITEMS.reverse(), ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 px-12 group cursor-default">
              <span className="text-4xl font-black text-slate-800 group-hover:text-slate-200 transition-colors uppercase tracking-widest leading-none">
                {item.name}
              </span>
              <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800 group-hover:border-[#00aaff]/50 transition-all group-hover:scale-110">
                <item.Icon className="text-[#00aaff]/70 group-hover:text-[#00aaff]" size={28} />
              </div>
              <div className="w-2 h-2 rounded-full bg-slate-800 mx-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 overflow-x-hidden selection:bg-cyan-500/30">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center mb-20 max-w-7xl mx-auto">
        <div className="text-2xl font-black flex items-center gap-2">
           <div className="w-10 h-10 bg-[#00aaff] rounded-lg flex items-center justify-center text-white text-sm italic">MH</div>
           Huzaifa<span className="text-[#00aaff]">.</span>
        </div>
        <div className="hidden md:flex gap-10 text-slate-400 text-sm font-bold uppercase tracking-widest">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* HERO */}
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

      {/* PROJECTS grid */}
      <section id="projects" className="max-w-7xl mx-auto py-24 border-t border-slate-900">
        <h2 className="text-5xl font-black mb-16 text-left tracking-tighter">Featured <span className="text-[#00aaff]">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-10 hover:border-[#00aaff]/50 transition-all group">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-8`}><project.Icon className="text-white" size={32} /></div>
              <h3 className="text-3xl font-black mb-4 group-hover:text-[#00aaff] transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-md mb-8 leading-relaxed font-medium">{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#00aaff] font-black text-md uppercase tracking-widest mt-auto">Visit <ExternalLink size={18} /></a>
            </div>
          ))}
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE HUB */}
      <section id="experience" className="max-w-7xl mx-auto py-24 border-t border-slate-900">
        <div className="mb-16">
          <h2 className="text-5xl font-black tracking-tighter text-left mb-4">Professional <span className="text-[#00aaff]">Journey</span></h2>
          <p className="text-slate-500 max-w-xl text-lg">My roadmap through technology and creative media over the last 3 years.</p>
        </div>
        <ExperienceHub />
      </section>

      {/* SERVICES SECTION */}
      <ServicesSection />

      {/* INFINITE MARQUEE WITH UPDATED EXPERIENCE ITEMS */}
      <InfiniteMarquee />

      {/* FOOTER */}
      <footer id="contact" className="mt-32 pt-12 border-t border-slate-900 text-center">
        <div className="flex justify-center gap-6 mb-8 text-slate-400">
           <a href={WHATSAPP_LINK} className="hover:text-[#00aaff] transition-colors"><MessageCircle size={30}/></a>
           <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-[#00aaff] transition-colors"><Mail size={30}/></a>
        </div>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">&copy; {new Date().getFullYear()} MUHAMMAD HUZAIFA | +923147600260</p>
      </footer>
    </div>
  );
}
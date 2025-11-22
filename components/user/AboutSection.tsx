"use client";

import { ABOUT_DATA, USER_DATA } from "@/lib/data";
import {
  Award,
  Building,
  Heart,
  Projector,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useRef, useState } from "react";
import TransitionLink from "../ui/TransitionLink";

const stats = [
  { number: "2+", label: "Program languages", icon: Award },
  { number: "12+", label: "Completed projects", icon: Building },
  { number: "2+", label: "Work experience", icon: Projector },
  { number: "6h/Day", label: "Self learning hours", icon: Shield },
];

const values = [
  {
    icon: Target,
    title: "Tầm nhìn",
    description:
      "Trở thành công ty phát triển bất động sản hàng đầu Việt Nam, mang đến những sản phẩm chất lượng cao và dịch vụ tận tâm.",
  },
  {
    icon: Heart,
    title: "Sứ mệnh",
    description:
      "Tạo ra những không gian sống lý tưởng, nâng cao chất lượng cuộc sống và góp phần phát triển đô thị bền vững.",
  },
  {
    icon: Shield,
    title: "Giá trị cốt lõi",
    description:
      "Uy tín - Chất lượng - Minh bạch - Đổi mới. Chúng tôi cam kết mang đến sự tin cậy và giá trị bền vững cho khách hàng.",
  },
];

export default function AboutSection() {
  const sphereRef = useRef<HTMLDivElement | null>(null);
  const dragStartX = useRef<number>(0);
  const rotationStart = useRef<number>(0);
  const animRef = useRef<number | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture((e as any).pointerId);
    setIsDragging(true);
    dragStartX.current = e.clientX;
    rotationStart.current = rotation;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX.current;
    setRotation(rotationStart.current + dx * 0.3);
  };

  const stopDrag = (e?: React.PointerEvent) => {
    setIsDragging(false);
    try {
      if (e && (e.target as Element).hasPointerCapture((e as any).pointerId)) {
        (e.target as Element).releasePointerCapture((e as any).pointerId);
      }
    } catch {}
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="pt-6 lg:pt-0">
                <p className="text-sm text-slate-600 mb-4">
                  👋 Hi there, I&apos;m{" "}
                  <span className="font-semibold text-slate-900">
                    {ABOUT_DATA.personal.name}
                  </span>
                </p>

                <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
                  <span className="text-primary/80">FullStack</span>
                  <span className="ml-4 text-primary">Developer</span>
                </h1>

                <p className="text-slate-600 max-w-xl leading-relaxed mb-6">
                  {ABOUT_DATA.summary ||
                    "I specialize in creating beautiful websites, captivating landing pages, and user-friendly mobile apps."}
                </p>

                <div className="flex items-center gap-4">
                  <TransitionLink href="/booking" className="btn-primary">
                    Contact Me
                  </TransitionLink>
                  <TransitionLink href="/project/all" className="btn-secondary">
                    View Works
                  </TransitionLink>
                </div>
              </div>

              <div className="flex justify-center lg:justify-center">
                <div className="w-full max-w-lg rounded-xl flex items-center justify-start">
                  <div
                    style={{ width: 360, height: 320, perspective: 900 }}
                    className="relative"
                  >
                    <style>{`
                      .desk { width:100%; height:100%; display:flex; align-items:flex-end; justify-content:center; }
                      .desk-surface { width:320px; height:18px; background:linear-gradient(90deg,#8b5e34,#c6863e); border-radius:8px; box-shadow: 0 8px 18px rgba(11,10,9,0.15); transform: translateY(24px); }
                      .laptop { width:200px; height:120px; position: absolute; left:50%; top:44%; transform: translate(-50%,-50%); display:flex; flex-direction:column; align-items:center; }
                      .laptop-base { width:220px; height:18px; background:linear-gradient(90deg,#111827,#0b1220); border-radius:6px; transform: translateY(54px); box-shadow: 0 10px 24px rgba(2,6,23,0.45); }
                      .screen { width:200px; height:120px; background: linear-gradient(180deg,#0f172a,#020617); border-radius:8px; display:flex; align-items:center; justify-content:center; color: #e6eef8; font-weight:700; box-shadow: inset 0 2px 8px rgba(255,255,255,0.02); overflow:hidden; }
                      .keyboard { width:160px; height:8px; background:linear-gradient(90deg,#0b1220,#111827); border-radius:4px; transform: translateY(36px); opacity:0.9 }
                      .floating { position:absolute; left:50%; top:48%; width:320px; height:220px; pointer-events:none; }
                      .label { position:absolute; transform-origin:center; display:flex; align-items:center; justify-content:center; color:#071233; font-weight:700; border-radius:9999px; padding:8px 12px; font-size:13px; box-shadow: 0 6px 18px rgba(2,6,23,0.18); }
                      @keyframes bob { 0% { transform: translateY(0px) } 50% { transform: translateY(-8px) } 100% { transform: translateY(0px) } }
                    `}</style>

                    <div
                      ref={sphereRef}
                      className="relative"
                      style={{
                        width: 360,
                        height: 320,
                        transform: `rotateX(6deg) rotateY(${rotation}deg)`,
                        transition: isDragging
                          ? "none"
                          : "transform 160ms linear",
                        cursor: isDragging ? "grabbing" : "grab",
                      }}
                      onPointerDown={handlePointerDown}
                      onPointerMove={handlePointerMove}
                      onPointerUp={stopDrag}
                      onPointerLeave={stopDrag}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div className="desk" aria-hidden>
                        <div className="desk-surface" />
                      </div>

                      <div className="laptop" aria-hidden>
                        <div className="screen">
                          <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: 20, color: "#fff" }}>
                              My Workspace
                            </div>
                            <div
                              style={{
                                fontSize: 12,
                                color: "rgba(255,255,255,0.7)",
                              }}
                            >
                              Code & Design
                            </div>
                          </div>
                        </div>
                        <div className="keyboard" />
                        <div className="laptop-base" />
                      </div>

                      <div className="floating" aria-hidden>
                        {(() => {
                          const techs = [
                            "TypeScript",
                            "React",
                            "Next.js",
                            "Node.js",
                            "Docker",
                            "Kubernetes",
                            "Java",
                            "Android",
                            "iOS",
                            "Postgres",
                          ];
                          const n = techs.length;
                          const cx = 160;
                          const cy = 110;
                          const rx = 120;
                          const ry = 72;
                          return techs.map((t, i) => {
                            const angle =
                              (i / n) * Math.PI * 2 +
                              (rotation * Math.PI) / 180;
                            const x = cx + Math.cos(angle) * rx;
                            const y = cy + Math.sin(angle) * ry;
                            const depth = Math.sin(angle);
                            const scale = 0.85 + (depth + 1) * 0.18;
                            const hue = Math.round(((i / n) * 360 + 150) % 360);
                            return (
                              <div
                                key={t}
                                className="label"
                                style={{
                                  left: x,
                                  top: y,
                                  transform: `translate(-50%, -50%) scale(${scale})`,
                                  background: `linear-gradient(135deg, hsl(${hue}deg 70% 64%), hsl(${
                                    (hue + 40) % 360
                                  }deg 65% 55%))`,
                                  animation: `bob ${4 + (i % 3)}s ease-in-out ${
                                    i * 80
                                  }ms infinite`,
                                }}
                              >
                                {t}
                              </div>
                            );
                          });
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 mt-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-dark" />
              </div>
              <div className="text-3xl font-bold text-light mb-2">
                {stat.number}
              </div>
              <div className="text-light">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          <div className="animate-slide-in-left">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/90 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Journey & Experience
                </h3>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border-l-4 border-primary shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Outstanding Achievements
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    With over 2 years of experience develop system for F&B,
                    Intergrate third system and optimize application logic and
                    bussiness logic
                    <strong className="text-slate-900">
                      {" "}
                      A daily basic , I happy when I can self learning something
                      such as new technology, framework, library.
                    </strong>{" "}
                    My goal is to become lead of architecture for large system
                    and engineer team.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-slate-200 hover:border-primary transition-colors group">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Building className="w-12 h-4 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-900 mb-1">
                          Contributor F&B Chain purchasing system to optimize
                          sales product everyday to control stock and reduce
                          loss inventory when purchasing. Optimize business
                          process to order from purchasing department.
                        </h5>
                        <p className="text-sm text-gray-600">
                          Americano Chain (F&B)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-slate-200 hover:border-primary transition-colors group">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Award className="w-12 h-4 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-900 mb-1">
                          Contributor Pickelball booking system for sport center
                          to manage
                        </h5>
                        <p className="text-sm text-gray-600">
                          * Implemented booking logic for system. Optimize UX/UI
                          for mobile app using flutter and web app using ReactJS
                        </p>
                        <p className="text-sm text-gray-600">
                          * Integrate third-party services including Payoo(For
                          payment), Sepay,
                        </p>
                        <p className="text-sm text-gray-600">
                          * Caching frequently accessed data using Redis and
                          in-memory cache.
                        </p>
                        <p className="text-sm text-gray-600">
                          * Collaborated in Agile/Scrum workflows, contributing
                          to sprint planning, requirement analysis, and release.
                        </p>
                        <p className="text-sm text-gray-600">
                          D-Holding (TTC Group)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-slate-200 hover:border-primary transition-colors group">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-12 h-4 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-900 mb-1">
                          Contributor Mes (Manufacturing Execution System) to
                          manage production line, track work in progress,
                          monitor equipment status, and ensure product quality
                          in real time.
                        </h5>
                        <p className="text-sm text-gray-600">
                          Vinhomes, Landmark 81, Metropole, Sunwah Pearl, Khang
                          Điền
                        </p>
                        <p className="text-sm text-gray-600">
                          Outsourcing for Masan Group
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary to-primary/90 p-6 rounded-xl text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6" />
                    <h4 className="font-bold text-lg">My goal</h4>
                  </div>
                  <p className="text-sm leading-relaxed">
                    "Lead my self and keep learning new techonology every day
                    to, beside that I want to listen to other people’s stories
                    and learn meaningful lessons from them. I keen of it"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={USER_DATA.avatar || "/hero-bg.jpg"}
                  alt={ABOUT_DATA.personal.name}
                  className="w-full h-[100%] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Trần Hữu Tài</h4>
                      <p className="text-yellow-300 font-medium">
                        +2 years as FullStack Developer
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm text-gray-200 mb-2">
                      📍 Current Address:
                    </p>
                    <p className="font-medium">{USER_DATA.address}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">2+</div>
                  <div className="text-xs text-gray-600">Year experience</div>
                </div>
              </div>
              <div className="absolute top-1/2 -left-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100 transform -translate-y-1/2 animate-float-delay">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">12+</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
<div className="text-2xl font-bold text-slate-900">50+</div>;

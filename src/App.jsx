import { useEffect, useState } from 'react';

function RollingCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 1800;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(eased * value);
      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  return <span>{count}{suffix}</span>;
}

export default function SeemaWebsite() {
  const stats = [
    { value: 250, suffix: '+', label: 'orders delivered' },
    { value: 5, suffix: '', label: 'event gifts sponsored' },
    { value: 25, suffix: '+', label: 'repeated clients' },
  ];

  const proudWorks = [
    {
      title: 'Luxury Plant Gift Hamper',
      desc: 'Curated botanical gifting with custom tags and premium wrapping.',
      img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Custom Wedding Print Suite',
      desc: 'Elegant invitations, menu cards, labels, and keepsakes.',
      img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Kids Activity Workbook',
      desc: 'Interactive premium printables and language learning books.',
      img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const plants = [
    {
      name: 'Desk Plant Gift Box',
      price: '₹499',
      desc: 'Minimal desk plant with custom message tag and premium wrap.',
      img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const prints = [
    {
      name: 'Premium Certificate Set',
      price: '₹299',
      desc: 'Luxury textured certificates, stickers, and ID card prints.',
      img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const [currentWork, setCurrentWork] = useState(0);
  const [currentPlant, setCurrentPlant] = useState(0);
  const [currentPrint, setCurrentPrint] = useState(0);

  const wa = '919999999999';

  useEffect(() => {
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    // Upload your favicon image as /public/favicon.png
    link.href = '/favicon.png';
  }, []);
  const openWA = (text) =>
    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(text)}`, '_blank');

  return (
    <div className="min-h-screen bg-white text-[#18392B] scroll-smooth">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#18392B]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 text-2xl font-serif tracking-wide">
            <img src="/logo.png" alt="Seema Plants & Prints logo" className="w-10 h-10 object-contain" />
            <span>SEEMA PLANTS & PRINTS</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#home">Home</a>
            <a href="#works">Proud Works</a>
            <a href="#plants">Plants</a>
            <a href="#prints">Prints</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#d8a7b1] mb-4">Botanical luxury meets bespoke print</p>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">Crafting gifts, greens & gorgeous prints.</h1>
          <p className="mt-6 text-lg text-[#18392B]/70 max-w-xl">A premium one-stop studio for plants, custom gifting, elegant printables, books, and heartfelt keepsakes.</p>
        </div>
        <div className="rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(24,57,43,0.18)]">
          <img src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1200&auto=format&fit=crop" className="w-full h-[500px] object-cover" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(24,57,43,0.12)] border border-[#18392B]/5 hover:-translate-y-1 transition">
            <div className="text-5xl font-bold text-[#18392B]"><RollingCounter value={s.value} suffix={s.suffix} /></div>
            <div className="mt-2 text-[#d8a7b1]">{s.label}</div>
          </div>
        ))}
      </section>

      <section id="works" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-serif">Our Proud Works</h2>
          <div className="flex gap-3">
            <button aria-label="Previous work" onClick={() => setCurrentWork((prev) => (prev === 0 ? proudWorks.length - 1 : prev - 1))} className="w-12 h-12 rounded-full border border-[#18392B]/20 shadow-md">←</button>
            <button aria-label="Next work" onClick={() => setCurrentWork((prev) => (prev + 1) % proudWorks.length)} className="w-12 h-12 rounded-full border border-[#18392B]/20 shadow-md">→</button>
          </div>
        </div>
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_25px_70px_rgba(24,57,43,0.14)] grid md:grid-cols-2">
          <img src={proudWorks[currentWork].img} className="h-[420px] w-full object-cover" />
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold">{proudWorks[currentWork].title}</h3>
            <p className="mt-4 text-lg text-[#18392B]/70">{proudWorks[currentWork].desc}</p>
          </div>
        </div>
      </section>

      <section id="plants" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-serif">Plants</h2>
          <div className="flex gap-3">
            <button aria-label="Previous plant" onClick={() => setCurrentPlant((prev) => (prev === 0 ? plants.length - 1 : prev - 1))} className="w-12 h-12 rounded-full border border-[#18392B]/20 shadow-md">←</button>
            <button aria-label="Next plant" onClick={() => setCurrentPlant((prev) => (prev + 1) % plants.length)} className="w-12 h-12 rounded-full border border-[#18392B]/20 shadow-md">→</button>
          </div>
        </div>
        <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_30px_80px_rgba(24,57,43,0.16)] grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-[1.5rem] overflow-hidden shadow-[0_20px_50px_rgba(24,57,43,0.12)]">
            <img src={plants[currentPlant].img} className="w-full h-[380px] object-cover" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a7b1] mb-3">Premium collection</p>
            <h3 className="text-4xl font-serif">{plants[currentPlant].name}</h3>
            <div className="text-3xl mt-4 font-semibold">{plants[currentPlant].price}</div>
            <p className="mt-4 text-[#18392B]/70 text-lg">{plants[currentPlant].desc}</p>
            <div className="mt-8 flex gap-4">
              <button onClick={() => openWA(`Hi, I want to enquire about ${plants[currentPlant].name}.`)} className="px-6 py-3 rounded-full border border-[#18392B] text-[#18392B] shadow-lg">Enquire</button>
              <button onClick={() => openWA(`Hi, I want to order ${plants[currentPlant].name}.`)} className="px-6 py-3 rounded-full bg-[#18392B] text-white shadow-lg">Order</button>
            </div>
          </div>
        </div>
      </section>

      <section id="prints" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-serif">Prints</h2>
          <div className="flex gap-3">
            <button aria-label="Previous print" onClick={() => setCurrentPrint((prev) => (prev === 0 ? prints.length - 1 : prev - 1))} className="w-12 h-12 rounded-full border border-[#18392B]/20 shadow-md">←</button>
            <button aria-label="Next print" onClick={() => setCurrentPrint((prev) => (prev + 1) % prints.length)} className="w-12 h-12 rounded-full border border-[#18392B]/20 shadow-md">→</button>
          </div>
        </div>
        <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_30px_80px_rgba(24,57,43,0.16)] grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-[1.5rem] overflow-hidden shadow-[0_20px_50px_rgba(24,57,43,0.12)]">
            <img src={prints[currentPrint].img} className="w-full h-[380px] object-cover" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a7b1] mb-3">Premium collection</p>
            <h3 className="text-4xl font-serif">{prints[currentPrint].name}</h3>
            <div className="text-3xl mt-4 font-semibold">{prints[currentPrint].price}</div>
            <p className="mt-4 text-[#18392B]/70 text-lg">{prints[currentPrint].desc}</p>
            <div className="mt-8 flex gap-4">
              <button onClick={() => openWA(`Hi, I want to enquire about ${prints[currentPrint].name}.`)} className="px-6 py-3 rounded-full border border-[#18392B] text-[#18392B] shadow-lg">Enquire</button>
              <button onClick={() => openWA(`Hi, I want to order ${prints[currentPrint].name}.`)} className="px-6 py-3 rounded-full bg-[#18392B] text-white shadow-lg">Order</button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-serif mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {['Absolutely premium finishing and packaging.', 'The plant gifts looked elegant and heartfelt.'].map((t, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(24,57,43,0.12)] text-lg italic">“{t}”</div>
          ))}
        </div>
      </section>

      <footer id="contact" className="max-w-7xl mx-auto px-6 py-16 border-t border-[#18392B]/10">
        <div className="text-3xl font-serif italic">Let’s grow together</div>
        <div className="mt-6 space-y-2 text-[#18392B]/70 text-lg">
          <p>📸 Instagram: @seemaplantsandprints</p>
          <p>📞 Phone: +91 99999 99999</p>
          <p>✉️ Email: seemaplantsandprints@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

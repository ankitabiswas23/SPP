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
  const asset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

  const stats = [
    { value: 250, suffix: '+', label: 'orders delivered' },
    { value: 5, suffix: '', label: 'event gifts sponsored' },
    { value: 25, suffix: '+', label: 'repeated clients' },
  ];

  const proudWorks = [
    {
      title: 'Luxury Plant Gift Hamper',
      desc: 'Curated botanical gifting with custom tags and premium wrapping.',
      img: asset('work1.jpg'),
    },
    {
      title: 'Custom Wedding Print Suite',
      desc: 'Elegant invitations, menu cards, labels, and keepsakes.',
      img: asset('work2.jpg'),
    },
    {
      title: 'Kids Activity Workbook',
      desc: 'Interactive premium printables and language learning books.',
      img: asset('work3.jpg'),
    },
  ];

  const plants = [
    {
      name: 'Desk Plant Gift Box',
      price: '₹499',
      desc: 'Minimal desk plant with custom message tag and premium wrap.',
      img: asset('plant1.jpg'),
    },
  ];

  const prints = [
    {
      name: 'Premium Certificate Set',
      price: '₹299',
      desc: 'Luxury textured certificates, stickers, and ID card prints.',
      img: asset('print1.jpg'),
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
    link.href = asset('favicon.png');
  }, []);

  const openWA = (text) =>
    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(text)}`, '_blank');

  return (
    <div className="min-h-screen bg-white text-[#18392B]">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#18392B]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 text-2xl font-serif tracking-wide">
            <img
              src={asset('logo.png')}
              alt="Seema Plants & Prints logo"
              className="w-10 h-10 object-contain"
            />
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
          <p className="uppercase tracking-[0.3em] text-sm text-[#d8a7b1] mb-4">
            Botanical luxury meets bespoke print
          </p>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            Crafting gifts, greens & gorgeous prints.
          </h1>
          <p className="mt-6 text-lg text-[#18392B]/70 max-w-xl">
            A premium one-stop studio for plants, custom gifting, elegant printables,
            books, and heartfelt keepsakes.
          </p>
        </div>

        <div className="rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(24,57,43,0.18)]">
          <img
            src={asset('hero.jpg')}
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(24,57,43,0.12)] border border-[#18392B]/5 hover:-translate-y-1 transition">
            <div className="text-5xl font-bold text-[#18392B]">
              <RollingCounter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-[#d8a7b1]">{s.label}</div>
          </div>
        ))}
      </section>

      <section id="works" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-serif">Our Proud Works</h2>
          <div className="flex gap-3">
            <button onClick={() => setCurrentWork((prev) => (prev === 0 ? proudWorks.length - 1 : prev - 1))}>←</button>
            <button onClick={() => setCurrentWork((prev) => (prev + 1) % proudWorks.length)}>→</button>
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
        <div className="bg-white rounded-[2rem] p-8 shadow-[0_30px_80px_rgba(24,57,43,0.16)] grid md:grid-cols-2 gap-8 items-center">
          <img src={plants[currentPlant].img} className="w-full h-[380px] object-cover rounded-[1.5rem]" />
          <div>
            <h3 className="text-4xl font-serif">{plants[currentPlant].name}</h3>
            <div className="text-3xl mt-4 font-semibold">{plants[currentPlant].price}</div>
            <p className="mt-4">{plants[currentPlant].desc}</p>
          </div>
        </div>
      </section>

      <section id="prints" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-[2rem] p-8 shadow-[0_30px_80px_rgba(24,57,43,0.16)] grid md:grid-cols-2 gap-8 items-center">
          <img src={prints[currentPrint].img} className="w-full h-[380px] object-cover rounded-[1.5rem]" />
          <div>
            <h3 className="text-4xl font-serif">{prints[currentPrint].name}</h3>
            <div className="text-3xl mt-4 font-semibold">{prints[currentPrint].price}</div>
            <p className="mt-4">{prints[currentPrint].desc}</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="max-w-7xl mx-auto px-6 py-16 border-t border-[#18392B]/10">
        <div className="text-3xl font-serif italic">Let’s grow together</div>
      </footer>
    </div>
  );
}
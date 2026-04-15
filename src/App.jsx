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
      title: 'A Green Tribute to Our Roots',
      desc: `We are deeply proud to have designed and delivered customized indoor plant arrangements that celebrate sustainability and thoughtful gifting, specially curated for a prestigious program at Adamas University.

This project holds a uniquely personal meaning for us, as one of our co-founders is a current student of the university. Being able to serve the very institution that has shaped our journey fills us with gratitude, pride, and a sense of belonging.

To create for our place of inception is more than work for us — it is a heartfelt return.`,
      img: asset('work1.jpg'),
    },
    {
      title: 'Crafting Warmth for ICISII 2025',
      desc: `We were honoured to contribute to the welcoming spirit of ICISII 2025 through our handcrafted botanical souvenirs.

Each piece was thoughtfully created to bring together elegance, memory, and sustainability, setting a warm and distinguished tone for the event. It was a privilege to let our work become a part of such a meaningful gathering.

Once again, serving our place of inception remains one of our greatest honours.`,
      img: asset('work2.jpg'),
    },
    {
      title: 'Honoured Sponsor — QADAM 2.0',
      desc: `At SEEMA PLANTS & PRINTS, we believe that to return is to honour the trust once placed in us and to preserve the spirit of gratitude.

With immense appreciation, we proudly sponsored a handcrafted and thoughtfully designed celebration cake for QADAM 2.0, the Literary Fest hosted by the English Department at Adamas University.

This gesture was our way of giving back with warmth, elegance, and heartfelt respect.`,
      img: asset('work3.jpg'),
    },
  ];

  const plants = [
    {
      name: 'Ivory Hexa Serenity',
      price: '₹499',
      desc: `A refined statement in minimal botanical luxury, Ivory Hexa Serenity features a premium Hahnii Snake Plant gracefully placed in a hexagonal white ceramic pot.

Known for its compact rosette foliage and structured elegance, the Hahnii variety brings a sense of calm sophistication to desks, bedside tables, workspaces, and curated gifting arrangements. The geometric ceramic vessel adds a contemporary architectural touch, making it a timeless décor piece for both modern homes and professional spaces.

Low-maintenance yet visually striking, this arrangement is perfect for those who appreciate clean aesthetics, air-purifying greenery, and understated elegance.`,
      img: asset('plant1.jpg'),
    },
  ];

  const prints = [
    {
      name: 'Signature Cork Mug',
      price: '₹299',
      desc: `A seamless blend of utility, elegance, and personalization, the Signature Cork Mug is crafted from premium-quality ceramic and designed for everyday sophistication.

Its standout feature is the innovative detachable cork coaster base, thoughtfully integrated to protect surfaces while adding a warm tactile finish. The cork layer can be easily removed, offering both convenience and design flexibility.

The mug body is fully customizable with logos, names, event branding, or company identities, making it ideal for corporate gifting, brand promotions, event souvenirs, and premium personalized keepsakes.

Designed to feel elevated yet practical, this piece reflects the kind of innovation that turns an everyday essential into a memorable brand experience.`,
      img: asset('print1.jpg'),
    },
  ];

  const [currentWork, setCurrentWork] = useState(0);
  const [currentPlant] = useState(0);
  const [currentPrint] = useState(0);

  const wa = '919123708284';

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
          <img src={asset('hero.jpg')} className="w-full h-[500px] object-cover" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(24,57,43,0.12)] border border-[#18392B]/5">
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
          <img src={proudWorks[currentWork].img} className="h-[500px] w-full object-cover" />
          <div className="p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold">{proudWorks[currentWork].title}</h3>
            <p className="mt-4 whitespace-pre-line leading-8 text-lg text-[#18392B]/80">
              {proudWorks[currentWork].desc}
            </p>
          </div>
        </div>
      </section>

      <section id="plants" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-[2rem] p-8 shadow-[0_30px_80px_rgba(24,57,43,0.16)] grid md:grid-cols-2 gap-8 items-center">
          <img src={plants[currentPlant].img} className="w-full h-[500px] object-cover rounded-[1.5rem]" />
          <div>
            <h3 className="text-4xl font-serif">{plants[currentPlant].name}</h3>
            <div className="text-3xl mt-4 font-semibold">{plants[currentPlant].price}</div>
            <p className="mt-4 whitespace-pre-line leading-8 text-lg text-[#18392B]/80">
              {plants[currentPlant].desc}
            </p>
            <div className="mt-6 flex gap-4">
              <button onClick={() => openWA(`Hi, I want to order ${plants[currentPlant].name}`)} className="px-6 py-3 rounded-full bg-[#18392B] text-white">
                Order Now
              </button>
              <button onClick={() => openWA(`Hi, I want to enquire about ${plants[currentPlant].name}`)} className="px-6 py-3 rounded-full border border-[#18392B]">
                Enquire
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="prints" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-[2rem] p-8 shadow-[0_30px_80px_rgba(24,57,43,0.16)] grid md:grid-cols-2 gap-8 items-center">
          <img src={prints[currentPrint].img} className="w-full h-[500px] object-cover rounded-[1.5rem]" />
          <div>
            <h3 className="text-4xl font-serif">{prints[currentPrint].name}</h3>
            <div className="text-3xl mt-4 font-semibold">{prints[currentPrint].price}</div>
            <p className="mt-4 whitespace-pre-line leading-8 text-lg text-[#18392B]/80">
              {prints[currentPrint].desc}
            </p>
            <div className="mt-6 flex gap-4">
              <button onClick={() => openWA(`Hi, I want to order ${prints[currentPrint].name}`)} className="px-6 py-3 rounded-full bg-[#18392B] text-white">
                Order Now
              </button>
              <button onClick={() => openWA(`Hi, I want to enquire about ${prints[currentPrint].name}`)} className="px-6 py-3 rounded-full border border-[#18392B]">
                Enquire
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="max-w-7xl mx-auto px-6 py-16 border-t border-[#18392B]/10">
        <div className="text-3xl font-serif tracking-[0.2em] text-center mb-8">
          LET’S GROW TOGETHER
        </div>
        <div className="space-y-3 text-lg text-center">
          <p>Mobile: +91 9123708284</p>
          <p>Email: @seemaplantsandprints</p>
        
        </div>
      </footer>
    </div>
  );
}
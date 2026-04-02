import React, { useState } from 'react';
import './MCIMovers.css';

// ── DATA ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: '🏠', num: '01', title: 'Residential Moving', desc: 'Local and interstate home moves handled with full care. We protect your furniture, pack your fragile items, and deliver everything intact.' },
  { icon: '🏢', num: '02', title: 'Commercial Relocation', desc: 'Minimize downtime with our precision office and commercial moves. We work around your schedule to keep your business running.' },
  { icon: '🚚', num: '03', title: 'Long-Distance Moving', desc: 'Coast-to-coast relocations with real-time tracking, guaranteed delivery windows, and full cargo insurance coverage.' },
  { icon: '📦', num: '04', title: 'Packing & Unpacking', desc: 'Professional packers using premium materials. We pack, label, load, unload, and unpack — all you do is walk into your new space.' },
  { icon: '🏪', num: '05', title: 'Storage Solutions', desc: 'Climate-controlled, 24/7 monitored storage facilities for short and long-term needs. Flexible plans with easy access.' },
  { icon: '🎹', num: '06', title: 'Specialty & Fragile Items', desc: 'Grand pianos, antiques, artwork, wine collections — we have the equipment and expertise for items that require extra attention.' },
];

const STEPS = [
  { num: '01', title: 'Request a Free Quote', desc: "Fill out our quick form or call us. We'll provide a transparent, no-surprise estimate based on your exact needs within 2 hours." },
  { num: '02', title: 'Custom Moving Plan', desc: 'Our move coordinator designs a tailored logistics plan — timeline, crew size, truck allocation, packing materials, and route optimization.' },
  { num: '03', title: 'Moving Day Execution', desc: 'Our uniformed, background-checked team arrives on time, handles every item with care, and keeps you updated every step of the way.' },
  { num: '04', title: 'Settled & Satisfied', desc: "We don't leave until everything is placed exactly where you want it. Our post-move support ensures you're 100% satisfied." },
];

const TESTIMONIALS = [
  { initials: 'JM', name: 'James Merritt', role: 'Residential Move · Dallas → Austin', text: "MCI Movers made our cross-state move completely stress-free. They arrived on time, packed everything perfectly, and nothing was damaged. Best money I've ever spent on a move." },
  { initials: 'SR', name: 'Sandra Reyes', role: 'Office Relocation · Houston CBD', text: 'We relocated our entire 40-person office over a weekend. MCI had us up and running Monday morning. The coordination was flawless. Highly recommend for any corporate move.' },
  { initials: 'LK', name: 'Linda Kowalski', role: 'Specialty Move · Piano Transport', text: "They moved my baby grand piano without a scratch. I was incredibly anxious about it, but the team handled it with expertise and care. I'll never use another moving company." },
];

const MARQUEE_ITEMS = [
  'Residential Moving', 'Commercial Relocation', 'Long-Distance Moving',
  'Packing & Unpacking', 'Storage Solutions', 'Piano & Specialty Items',
  'Office Moving', 'International Shipping', 'Furniture Assembly', 'Senior Moving',
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function MCIMovers() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    from: '', to: '', moveType: 'Residential', date: '', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* NAV */}
      <nav className="mci-nav">
        <a href="#home" className="mci-logo">MCI <span>MOVERS</span></a>
        <ul className="mci-nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#coverage">Coverage</a></li>
          <li><a href="#testimonials">Reviews</a></li>
        </ul>
        <a href="#quote" className="mci-nav-cta">Free Quote</a>
      </nav>

      {/* HERO */}
      <section className="mci-hero" id="home">
        <div className="mci-hero-bg" />
        <div className="mci-grid-lines" />
        <div className="mci-hero-content">
          <div className="mci-hero-tag">Licensed &amp; Insured Movers</div>
          <h1>WE MOVE<br /><em>YOUR WORLD</em><br />FORWARD.</h1>
          <p className="mci-hero-sub">
            MCI Movers delivers seamless, white-glove relocation services — residential, commercial,
            long-distance, and everything in between. Your belongings. Our responsibility.
          </p>
          <div className="mci-hero-btns">
            <a href="#quote" className="mci-btn-primary">Get a Free Quote</a>
            <a href="#services" className="mci-btn-outline">Explore Services</a>
          </div>
        </div>
        <div className="mci-hero-stats">
          <div className="mci-stat"><div className="mci-stat-num">15K+</div><div className="mci-stat-label">Moves Completed</div></div>
          <div className="mci-stat"><div className="mci-stat-num">98%</div><div className="mci-stat-label">Satisfaction Rate</div></div>
          <div className="mci-stat"><div className="mci-stat-num">12+</div><div className="mci-stat-label">Years of Service</div></div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="mci-marquee-wrap">
        <div className="mci-marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="mci-marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="mci-services" id="services">
        <div className="mci-services-head">
          <div className="mci-section-label">What We Do</div>
          <h2 className="mci-section-title">COMPREHENSIVE<br />MOVING SERVICES</h2>
          <p>From a single room to a full corporate campus — MCI Movers handles every move with military-grade planning and care.</p>
        </div>
        <div className="mci-services-grid">
          {SERVICES.map((s) => (
            <div key={s.num} className="mci-service-card">
              <span className="mci-service-icon">{s.icon}</span>
              <span className="mci-service-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mci-process" id="process">
        <div className="mci-process-inner">
          <div className="mci-process-steps">
            <div className="mci-section-label">How It Works</div>
            <h2 className="mci-section-title" style={{ marginBottom: '2.5rem' }}>FOUR STEPS<br />TO YOUR<br />NEW HOME.</h2>
            {STEPS.map((s) => (
              <div key={s.num} className="mci-step">
                <div className="mci-step-num">{s.num}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mci-process-visual">
            <div className="mci-corner-deco mci-tl" />
            <div className="mci-corner-deco mci-tr" />
            <div className="mci-corner-deco mci-bl" />
            <div className="mci-corner-deco mci-br" />
            <div className="mci-truck-anim">🚛</div>
            <div className="mci-road" />
            <div className="mci-process-visual-label">MCI Fleet — Always On The Move</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mci-testimonials" id="testimonials">
        <div className="mci-test-head">
          <div className="mci-section-label">Client Reviews</div>
          <h2 className="mci-section-title">WHAT OUR<br />CLIENTS SAY</h2>
          <p>Thousands of families and businesses have trusted MCI Movers. Here's what they have to say.</p>
        </div>
        <div className="mci-test-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="mci-test-card">
              <div className="mci-test-quote">"</div>
              <div className="mci-stars">★★★★★</div>
              <p>{t.text}</p>
              <div className="mci-test-author">
                <div className="mci-test-avatar">{t.initials}</div>
                <div>
                  <div className="mci-test-name">{t.name}</div>
                  <div className="mci-test-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COVERAGE */}
      <section className="mci-coverage" id="coverage">
        <div className="mci-coverage-inner">
          <div className="mci-coverage-content">
            <div className="mci-section-label">Service Area</div>
            <h2 className="mci-section-title">NATIONWIDE<br />COVERAGE.</h2>
            <p>From local neighborhood moves to full cross-country relocations, MCI Movers operates across all 50 states with a fleet of over 80 vehicles and 300+ trained professionals.</p>
            <div className="mci-coverage-features">
              {[
                { icon: '🗺️', title: 'Local & Regional Moves', desc: 'Same-day and next-day availability for moves within your metro area.' },
                { icon: '🛣️', title: 'Interstate Moving', desc: 'Fully licensed USDOT carrier. Real-time GPS tracking on every long-haul move.' },
                { icon: '✈️', title: 'International Shipping', desc: 'Door-to-door international moving with customs clearance assistance.' },
              ].map((f) => (
                <div key={f.title} className="mci-feat">
                  <div className="mci-feat-icon">{f.icon}</div>
                  <div className="mci-feat-text">
                    <h5>{f.title}</h5>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mci-coverage-map">
            <div className="mci-corner-deco mci-tl" />
            <div className="mci-corner-deco mci-tr" />
            <div className="mci-corner-deco mci-bl" />
            <div className="mci-corner-deco mci-br" />
            <div className="mci-map-pulse" />
            <div className="mci-map-pulse" />
            <div className="mci-map-pulse" />
            <div className="mci-map-center">🌐</div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section className="mci-quote-section" id="quote">
        <div className="mci-quote-inner">
          <div className="mci-quote-info">
            <div className="mci-section-label">Get Started</div>
            <h2 className="mci-section-title">GET YOUR<br />FREE QUOTE<br />TODAY.</h2>
            <p>No obligations. No hidden fees. Just a fast, accurate estimate tailored to your move — delivered within 2 hours.</p>
            <div className="mci-quote-promises">
              {['Transparent, all-inclusive pricing', 'No surprise charges on moving day', 'Licensed, insured & bonded crew', 'Dedicated move coordinator assigned', '100% satisfaction guarantee'].map((p) => (
                <div key={p} className="mci-promise">{p}</div>
              ))}
            </div>
          </div>
          <div className="mci-quote-form">
            <div className="mci-form-title">Request a Quote</div>
            {submitted ? (
              <div className="mci-form-success">
                <div className="mci-form-success-icon">✓</div>
                <h3>Thank you!</h3>
                <p>An MCI coordinator will contact you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mci-form-row">
                  <div className="mci-form-group">
                    <label>First Name</label>
                    <input name="firstName" type="text" placeholder="John" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className="mci-form-group">
                    <label>Last Name</label>
                    <input name="lastName" type="text" placeholder="Smith" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>
                <div className="mci-form-row">
                  <div className="mci-form-group">
                    <label>Phone</label>
                    <input name="phone" type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={handleChange} required />
                  </div>
                  <div className="mci-form-group">
                    <label>Email</label>
                    <input name="email" type="email" placeholder="john@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="mci-form-row">
                  <div className="mci-form-group">
                    <label>Moving From</label>
                    <input name="from" type="text" placeholder="Houston, TX" value={form.from} onChange={handleChange} required />
                  </div>
                  <div className="mci-form-group">
                    <label>Moving To</label>
                    <input name="to" type="text" placeholder="Austin, TX" value={form.to} onChange={handleChange} required />
                  </div>
                </div>
                <div className="mci-form-row">
                  <div className="mci-form-group">
                    <label>Move Type</label>
                    <select name="moveType" value={form.moveType} onChange={handleChange}>
                      <option>Residential</option>
                      <option>Commercial / Office</option>
                      <option>Long-Distance</option>
                      <option>Specialty / Fragile</option>
                      <option>Storage</option>
                    </select>
                  </div>
                  <div className="mci-form-group">
                    <label>Estimated Move Date</label>
                    <input name="date" type="date" value={form.date} onChange={handleChange} required />
                  </div>
                </div>
                <div className="mci-form-group">
                  <label>Additional Notes</label>
                  <textarea name="notes" placeholder="Any special items, access restrictions, or details we should know..." value={form.notes} onChange={handleChange} />
                </div>
                <button type="submit" className="mci-form-submit">Get My Free Quote →</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mci-footer">
        <div className="mci-footer-top">
          <div className="mci-footer-brand">
            <a href="#home" className="mci-footer-logo">MCI <span>MOVERS</span></a>
            <div className="mci-footer-tagline">Moving Your World Forward</div>
            <p>Licensed, bonded, and insured. Serving residential and commercial clients nationwide for over 12 years.</p>
          </div>
          <div className="mci-footer-col">
            <h5>Services</h5>
            <ul>
              {['Residential Moving', 'Commercial Relocation', 'Long-Distance Moving', 'Packing & Unpacking', 'Storage Solutions', 'Specialty Items'].map((s) => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="mci-footer-col">
            <h5>Company</h5>
            <ul>
              {['About MCI', 'Our Team', 'Careers', 'Blog', 'Press'].map((s) => (
                <li key={s}><a href="#home">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="mci-footer-col">
            <h5>Contact</h5>
            <div className="mci-contact-item">📞 (800) MCI-MOVE</div>
            <div className="mci-contact-item">✉️ hello@mcimovers.com</div>
            <div className="mci-contact-item">📍 Houston, TX (HQ)</div>
            <div className="mci-contact-item">🕐 24/7 Support Available</div>
          </div>
        </div>
        <div className="mci-footer-bottom">
          <p>© 2025 MCI Movers. All rights reserved. USDOT #1234567 | MC #9876543</p>
          <div className="mci-footer-social">
            {['f', 'in', 'ig', 'x'].map((s) => <a key={s} href="#home" className="mci-social-btn">{s}</a>)}
          </div>
        </div>
      </footer>

      {/* FLOATING CALL BUTTON */}
      <a href="tel:8006264683" className="mci-float-phone" title="Call MCI Movers">📞</a>
    </>
  );
}
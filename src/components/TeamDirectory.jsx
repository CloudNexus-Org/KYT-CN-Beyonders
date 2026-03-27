import React from 'react'
import { Link } from 'react-router-dom'
import { employees } from '../data/employees'
import {
  Rocket, Heart, Lightbulb, ShieldCheck, Globe, BarChart3,
  Users, Eye, Target
} from 'lucide-react'

function getPhoto(emp) {
  return emp.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(emp.name)}&background=15151f&color=0cf&size=128&font-size=0.4&bold=true`
}

const sdeIds = ['sahil-gupta', 'naresh-kose']

const internIds = [
  'ayush-paradkara', 'bhumi-singh', 'ashutosh-dwivedi',
  'siddharth-lodhi', 'ankit-kuswaha', 'pravesh-tripati',
  'vasu-sethiya', 'prince-sulekhiya', 'suhani-deshmukh',
  'utkarsh-sharma', 'ashish-kumar', 'affan-ahmad',
  'bharti-sahu', 'shivam-suryawanshi'
]

const traineeIds = [
  'harshit-mishra', 'talib',
  'pushpraj-patel', 'kunal-sutrakar',
  'mayank-sahu', 'aaditya-raj',
  'anshika-sarathe', 'manohar-mishra'
]

function shortRole(title) {
  if (title.includes('Trainee')) return 'Trainee'
  if (title.includes('Intern')) return 'Intern'
  if (title.includes('(SDE-1)')) return 'SDE-1'
  if (title.includes('Lead')) return 'Team Lead'
  if (title.includes('RevOps') || title.includes('Revenue')) return 'Revenue Operations (...'
  if (title.includes('Software Development')) return 'Software Developme...'
  return title.length > 22 ? title.slice(0, 20) + '...' : title
}

const TeamDirectory = () => {
  const ceo = employees.find(e => e.id === 'kaustubh-singh')
  const cto = employees.find(e => e.id === 'yash-singh')
  const tl = employees.find(e => e.id === 'saurabh-patle')
  const revOps = employees.find(e => e.id === 'revenue-ops')

  const sdeGroup = sdeIds.map(id => employees.find(e => e.id === id)).filter(Boolean)
  const internGroup = internIds.map(id => employees.find(e => e.id === id)).filter(Boolean)
  const traineeGroup = traineeIds.map(id => employees.find(e => e.id === id)).filter(Boolean)

  return (
    <div className="main-page">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo">
          <div className="logo-icon">CN</div>
          <span>CloudNexus</span>
        </div>
        <div className="nav-links">
          <a href="#team" className="active">Team</a>
          <a href="#about">About</a>
          <a href="#vision">Vision</a>
        </div>
      </div>

      {/* Hero */}
      <div className="hero" id="team">
        <h1>Know Your Team – CN Beyonders</h1>
        <p>People, roles and how to connect.</p>
      </div>

      {/* ========== ORG TREE (exact hierarchy) ========== */}
      <div className="org-tree-container">
        <ul className="org-tree">
          {/* Level 1: CEO */}
          <li>
            <Link to={`/profile/${ceo.id}`} className="node ceo-node">
              <div className="node-photo"><img src={getPhoto(ceo)} alt={ceo.name} /></div>
              <div className="node-name">{ceo.name}</div>
              <div className="node-role">Founder & CEO</div>
            </Link>
            
            <ul>
              {/* Level 2: CTO */}
              <li>
                <Link to={`/profile/${cto.id}`} className="node cto-node">
                  <div className="node-photo"><img src={getPhoto(cto)} alt={cto.name} /></div>
                  <div className="node-name">{cto.name}</div>
                  <div className="node-role">CTO</div>
                </Link>
                
                <ul>
                  {/* Level 3: TL & RevOps */}
                  <li>
                    <div className="trunk-nodes">
                      {/* Sub-level trunk: Saurabh (Team Lead) */}
                      <Link to={`/profile/${tl.id}`} className="node tl-node">
                        <div className="node-photo"><img src={getPhoto(tl)} alt={tl.name} /></div>
                        <div className="node-name">{tl.name}</div>
                        <div className="node-role">Team Lead</div>
                      </Link>

                      {/* Asymmetric branch: Prachi (RevOps) */}
                      <div className="prachi-branch">
                        <div className="prachi-h-line" />
                        <div className="prachi-v-line" />
                        <Link to={`/profile/${revOps.id}`} className="node revops-node">
                          <div className="node-photo"><img src={getPhoto(revOps)} alt={revOps.name} /></div>
                          <div className="node-name">{revOps.name}</div>
                          <div className="node-role">Revenue Operations (...</div>
                        </Link>
                      </div>
                    </div>

                    {/* Level 4: The 3 team groups (SDE, Interns, Trainees) */}
                    <ul className="teams-row">
                      <li>
                        <div className="team-group group-sde">
                          {/* <div className="team-group-label">SDE</div> */}
                          <div className="team-group-grid">
                            {sdeGroup.map(m => (
                              <Link key={m.id} to={`/profile/${m.id}`} className="team-member">
                                <div className="tm-photo">
                                  <img src={getPhoto(m)} alt={m.name} />
                                </div>
                                <div className="tm-name">{m.name}</div>
                                <div className="tm-role">{shortRole(m.jobTitle)}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="team-group group-intern">
                          {/* <div className="team-group-label">INTERNS</div> */}
                          <div className="team-group-grid">
                            {internGroup.map(m => (
                              <Link key={m.id} to={`/profile/${m.id}`} className="team-member">
                                <div className="tm-photo">
                                  <img src={getPhoto(m)} alt={m.name} />
                                </div>
                                <div className="tm-name">{m.name}</div>
                                <div className="tm-role">{shortRole(m.jobTitle)}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="team-group group-trainee">
                          {/* <div className="team-group-label">TRAINEES</div> */}
                          <div className="team-group-grid">
                            {traineeGroup.map(m => (
                              <Link key={m.id} to={`/profile/${m.id}`} className="team-member">
                                <div className="tm-photo">
                                  <img src={getPhoto(m)} alt={m.name} />
                                </div>
                                <div className="tm-name">{m.name}</div>
                                <div className="tm-role">{shortRole(m.jobTitle)}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>



      {/* WHO WE ARE */}
      <div className="section" id="about">
        <div className="section-label">About CloudNexus</div>
        <h2 className="section-title">Who <span>we are</span></h2>
        <div className="section-underline" />
        <div className="who-we-are-card">
          <p>
            At CloudNexus, we are more than just an IT consulting company. We are innovators,
            problem-solvers, and architects of the digital future. We specialize in providing
            modern IT solutions that help businesses remain competitive, efficient, and secure
            in an era where technology is at the core of every business decision.
          </p>
          <p>
            Our team of technology experts, strategists, and problem solvers collaborate
            closely with clients to deliver tailored solutions that enhance efficiency, drive
            growth, and accelerate innovation — from cloud migration and software development
            to automation and cybersecurity.
          </p>
          <div className="who-pills">
            <span className="who-pill"><span className="who-pill-dot" />Cloud Migration</span>
            <span className="who-pill"><span className="who-pill-dot" />AI &amp; Automation</span>
            <span className="who-pill"><span className="who-pill-dot" />Cybersecurity</span>
            <span className="who-pill"><span className="who-pill-dot" />Software Development</span>
            <span className="who-pill"><span className="who-pill-dot" />Digital Strategy</span>
          </div>
        </div>
      </div>
      {/* WHY CLOUDNEXUS */}
      <div className="section">
        <h2 className="section-title">Why <span>CloudNexus?</span></h2>
        <p className="section-body" style={{ marginTop: 12 }}>
          Choosing the right technology partner is crucial for business success. At CloudNexus,
          we do not just offer IT solutions — we create transformative experiences that drive
          innovation, efficiency, and growth.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="fc-icon" style={{ background: 'rgba(0,204,255,0.06)' }}>
              <Rocket size={22} color="#00ccff" strokeWidth={1.5} />
            </div>
            <h4>Innovative &amp; scalable solutions</h4>
            <p>We leverage the latest advancements in cloud computing, AI, and automation to build future-ready IT solutions.</p>
          </div>
          <div className="feature-card">
            <div className="fc-icon" style={{ background: 'rgba(0,204,255,0.06)' }}>
              <Heart size={22} color="#00ccff" strokeWidth={1.5} />
            </div>
            <h4>Tailored approach</h4>
            <p>Every business is unique, and so are our solutions. We align digital solutions with specific business goals.</p>
          </div>
          <div className="feature-card">
            <div className="fc-icon" style={{ background: 'rgba(0,204,255,0.06)' }}>
              <Lightbulb size={22} color="#00ccff" strokeWidth={1.5} />
            </div>
            <h4>Product-driven innovation</h4>
            <p>By combining creative and analytical approaches, we build digital products that drive simplicity, innovation, efficiency, and scalability.</p>
          </div>
          <div className="feature-card">
            <div className="fc-icon" style={{ background: 'rgba(0,204,255,0.06)' }}>
              <ShieldCheck size={22} color="#00ccff" strokeWidth={1.5} />
            </div>
            <h4>Security &amp; reliability</h4>
            <p>Cybersecurity and data protection are at the core of everything we do. Our security-first approach protects your business.</p>
          </div>
          <div className="feature-card">
            <div className="fc-icon" style={{ background: 'rgba(0,204,255,0.06)' }}>
              <Globe size={22} color="#00ccff" strokeWidth={1.5} />
            </div>
            <h4>Expert team &amp; global experience</h4>
            <p>We bring deep industry knowledge and extensive experience, helping enterprises navigate the global technology landscape.</p>
          </div>
          <div className="feature-card">
            <div className="fc-icon" style={{ background: 'rgba(0,204,255,0.06)' }}>
              <BarChart3 size={22} color="#00ccff" strokeWidth={1.5} />
            </div>
            <h4>Business-centric results</h4>
            <p>Our focus is on delivering tangible business results, optimizing efficiency, improving productivity, and reducing costs.</p>
          </div>
        </div>
        <div className="feature-card-center-wrap">
          <div className="feature-card">
            <div className="fc-icon" style={{ background: 'rgba(0,204,255,0.06)', margin: '0 auto 22px' }}>
              <Users size={22} color="#00ccff" strokeWidth={1.5} />
            </div>
            <h4 style={{ textAlign: 'center' }}>End-to-end support</h4>
            <p style={{ textAlign: 'center' }}>From initial consultation to post-deployment support, we offer end-to-end services to ensure your IT ecosystem is running smoothly 24/7.</p>
          </div>
        </div>
      </div>
       {/* VISION & MISSION */}
      <div className="section" id="vision">
        <h2 className="section-title">Our <span>vision &amp; mission</span></h2>
        <div className="vm-grid">
          <div className="vm-card">
            <div className="vm-card-header">
              <div className="vm-icon" style={{ background: 'rgba(0,204,255,0.06)' }}>
                <Eye size={18} color="#00ccff" strokeWidth={1.5} />
              </div>
              <h4>Vision</h4>
            </div>
            <p>
              To be the global leader in IT solutions and digital product innovation, empowering
              businesses with cutting-edge technology that enhances efficiency, scalability, and
              growth. At CloudNexus, we envision a future where every business thrives by
              leveraging modern, sustainable, and future-ready solutions.
            </p>
          </div>
          <div className="vm-card">
            <div className="vm-card-header">
              <div className="vm-icon" style={{ background: 'rgba(0,204,255,0.06)' }}>
                <Target size={18} color="#00ccff" strokeWidth={1.5} />
              </div>
              <h4>Mission</h4>
            </div>
            <ul>
              <li>Developing innovative, meaningful products and solutions that enable businesses to operate efficiently, delivering real value in today's evolving digital world.</li>
              <li>Fostering continuous collaboration by building reliable, scalable systems — creating intelligent and adaptable solutions tailored to each client's needs.</li>
              <li>Driving digital innovation through AI, cloud computing, and advanced analytics, seamlessly integrating transformative technology into daily business operations.</li>
              <li>Empowering businesses of all sizes with accessibility, ease, and intelligent methodologies that foster productive and long-term success.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="site-footer">
        <div className="footer-logo">CLOUDNEXUS</div>
        <div className="footer-link">Know Your Team</div>
        <div className="footer-socials">
          <a href="#" title="LinkedIn">in</a>
          <a href="#" title="Twitter">𝕏</a>
          <a href="#" title="Instagram">ig</a>
        </div>
      </div>
    </div>
  )
}

export default TeamDirectory
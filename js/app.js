'use strict';

/* ============================================================
   CYBERAI — app.js (Cybersecurity Edition)
   Profil : Salim Elghazoui | Dev & Solutions Digitales
   ============================================================ */

// ─── PROFIL UTILISATEUR ──────────────────────────────────────
const ME = {
  name: 'Salim Elghazoui',
  role: 'SR. SECURITY RESEARCHER',
  username: '@salim.dev',
  bio: '💻 Cyber Intel | Penetration Testing | Casablanca 🇲🇦',
  avatar: 'https://i.pravatar.cc/150?img=12',
};

// ─── DONNÉES DE RENSEIGNEMENT ────────────────────────────────
const POSTS_RAW = [
  {
    id: 1, liked: false, comments: 42, shares: 14, severity: 'high',
    user: 'CERT-MA_Alerts', avatar: 'https://i.pravatar.cc/150?img=47',
    badge: 'CRITICAL', badgeStyle: 'badge-red', time: '10 min ago · GLOBAL_NOC',
    text: '🚨 ZERO-DAY DETECTED 🚨\nUne nouvelle vulnérabilité RCE critique a été découverte dans le composant X-Auth. Les institutions au Maroc sont invitées à appliquer le patch M-1049 en urgence.',
    code: `<span class="code-comment">// Exploit snippet (Sanitized)</span>\n<span class="code-keyword">import</span> <span class="code-string">requests</span>\n\n<span class="code-func">def</span> send_payload(target):\n    payload = <span class="code-string">"\\x00\\x11\\x22\\xffOVERFLOW"</span>\n    requests.post(f<span class="code-string">"http://{target}/api/auth"</span>, data=payload)\n    <span class="code-keyword">print</span>(<span class="code-string">"[*] Payload injected."</span>)`,
    reactions: ['🔥', '🛑'],
  },
  {
    id: 2, liked: true, comments: 88, shares: 32, severity: 'med',
    user: 'Salim Elghazoui', avatar: ME.avatar,
    badge: 'RESEARCH', badgeStyle: 'badge-blue', time: '1 hr ago · 127.0.0.1',
    text: '🤖 Lancement de l\'outil d\'analyse de malwares propulsé par CyberAI MA.\nNous avons entraîné le modèle spécifiquement sur les ransomwares ciblant l\'Afrique du Nord. Il désassemble les binaires et détecte les techniques d\'obfuscation en temps réel.\n\nGitHub repo mis à jour. Clonez-le et testez sur les flux locaux 🛡️',
    code: `<span class="code-comment"># Terminal Output</span>\n$ ./ai_malware_analyzer --target suspect_file.exe\n[+] AI Model Loaded: CyberAI MA Core v2.1\n[+] Unpacking binary...\n[!] OBFUSCATION DETECTED: Custom XOR shifting.\n[+] Generating yara rules for local SOCs... done.\n`,
    reactions: ['🚀', '🛡️', '🧠'],
  },
  {
    id: 3, liked: false, comments: 15, shares: 7, severity: 'low',
    user: 'SOC_Analyst_Casa', avatar: 'https://i.pravatar.cc/150?img=33',
    badge: 'INTEL', badgeStyle: 'badge-green', time: '3 hrs ago · OSINT',
    text: 'Campagne de phishing ciblant les banques marocaines (CIH, Attijari) en augmentation de 400% cette semaine. Les domaines usurpent les plateformes de paiement mobiles.\n\nIoCs (Indicators of Compromise) disponibles dans le thread ci-dessous et ajoutés à la DB nationale.',
    code: '',
    reactions: ['👀', '✅'],
  }
];

// ─── CONTACTS & ASSETS ───────────────────────────────────────
const THREAT_FEEDS = [
  { status: 'red', name: 'CVE-2026-1049 (RCE)' },
  { status: 'yellow', name: 'Ransomware.Locky.MA' },
  { status: 'green', name: 'APT29 Activity' },
  { status: 'red', name: 'Botnet Mirai Drone' },
  { status: 'yellow', name: 'Phishing Campaign Casa' }
];

const INTEL_DATABASES = [
  { title: 'Global Phishing IoCs', size: '12 GB', loc: 'US-EAST' },
  { title: 'MA Local Telecom Leaks', size: '2.5 GB', loc: 'SECURE-NODE-MA' },
  { title: 'Decompiled Malware Sigs', size: '4.5 GB', loc: 'EU-WEST' },
  { title: 'DarkWeb Leak Dumps', size: '89 GB', loc: 'ENCRYPTED' }
];

// ─── STATE ───────────────────────────────────────────────────
const S = {
  tab: 'feed',
  posts: JSON.parse(JSON.stringify(POSTS_RAW)),
  aiMsgs: [{ role: 'ai', text: 'SYSTEM ONLINE. Je suis CyberAI MA 🤖. L\'intelligence artificielle marocaine de cybersécurité.\n- Analyse dynamique de menaces locales\n- Extraction d\'IoC régionaux\n- Audit de code & CVEs\nEn attente de commandes...' }],
  aiTyping: false,
};

// ─── UTILS ───────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function toast(msg) {
  document.querySelectorAll('.toast').forEach(el => el.remove());
  const el = document.createElement('div');
  el.className = 'toast'; el.textContent = '> ' + msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

// ─── COMPONENTS ──────────────────────────────────────────────
function buildNavbar() {
  return `
    <nav class="navbar">
      <div class="nav-left">
        <!-- New Requested Logo Implementation -->
        <div class="cyber-logo" onclick="go('feed')">
          <div class="hex-container-small">
             <svg viewBox="0 0 100 115">
                <polygon points="50,5 95,27.5 95,87.5 50,110 5,87.5 5,27.5" fill="none" stroke="rgba(0, 255, 136, 0.5)" stroke-width="2"/>
                <polygon points="50,18 80,35 80,80 50,97 20,80 20,35" fill="none" stroke="rgba(0, 255, 136, 0.2)" stroke-width="1"/>
             </svg>
             <span class="inverted-s">S</span>
          </div>
          <div class="cyber-logo-text"><span class="arr">&lt;&nbsp;</span>S A L I M<span class="arr">&nbsp;/&gt;</span></div>
          <div class="cyber-logo-sub">DEV &amp; SOLUTIONS</div>
        </div>
        <label class="nav-search">
          <span>>_</span>
          <input placeholder="Search IPs, Hashes, CVEs..." />
        </label>
      </div>
      <div class="nav-tabs">
        <button class="nav-tab ${S.tab === 'feed' ? 'active' : ''}" onclick="go('feed')">Threat Intel</button>
        <button class="nav-tab ${S.tab === 'intel' ? 'active' : ''}" onclick="go('intel')">Databases</button>
        <button class="nav-tab premium-tab ${S.tab === 'premium' ? 'active' : ''}" onclick="go('premium')">UPGRADE PRO 🔓</button>
      </div>
      <div class="nav-right">
        <button class="nav-icon-btn" onclick="toast('Running vulnerability scan...')">⚡</button>
        <button class="nav-icon-btn" onclick="toast('Accessing terminal...')"> terminal </button>
        <img class="nav-avatar" src="${ME.avatar}" alt="${ME.name}" onclick="toast('Accessing profile...')" />
      </div>
    </nav>`;
}

function buildLeftSidebar() {
  const feeds = THREAT_FEEDS.map(f => `
    <div class="sb-item" onclick="toast('Tracking ${f.name}...')">
      <div class="status-indicator status-${f.status}"></div>
      <span>${f.name}</span>
    </div>`).join('');

  return `
    <aside class="left-sidebar">
      <div class="sb-me">
        <img src="${ME.avatar}" alt="${ME.name}">
        <div class="sb-me-info">
          <div class="sb-me-name">${ME.name}</div>
          <div class="sb-me-role">${ME.role}</div>
        </div>
      </div>

      <div class="sb-section">
        <div class="sb-title"><span>SOC (MAROC)</span></div>
        <div class="sb-item" onclick="toast('Connexion au DGSSI en cours...')"><span class="sb-icon">🇲🇦</span><span>Directives Nationales</span></div>
        <div class="sb-item" onclick="toast('Lancement de l\\'audit de code IA...')"><span class="sb-icon">🧠</span><span>Audit Code IA</span></div>
        <div class="sb-item" onclick="toast('Génération YARA en cours...')"><span class="sb-icon">📝</span><span>Générateur YARA</span></div>
        <div class="sb-item" onclick="toast('Scan des IPs locales...')"><span class="sb-icon">🎯</span><span>Scan Réseau Local</span></div>
      </div>

      <div class="sb-section">
        <div class="sb-title"><span>OUTILS RÉSEAU</span></div>
        <div class="sb-item"><span class="sb-icon">🔬</span><span>Malware Sandbox</span></div>
        <div class="sb-item"><span class="sb-icon">🛡️</span><span>WAF Logs Casablanca</span></div>
        <div class="sb-item"><span class="sb-icon">📡</span><span>Dark Web Monitor MA</span></div>
      </div>

      <div class="sb-section">
        <div class="sb-title"><span>MENACES SUR LE TERRITOIRE</span></div>
        ${feeds}
      </div>
    </aside>`;
}

function buildPostCreator() {
  return `
    <div class="post-creator">
      <textarea class="pc-input" id="postInput" placeholder="> Share intel, scripts or vulnerability details..."></textarea>
      <div class="pc-actions">
        <div>
          <button class="pc-btn" onclick="toast('Attachment module loaded.')">📎 Attach Log</button>
          <button class="pc-btn" onclick="toast('Code block inserted.')">💻 Code</button>
        </div>
        <button class="pc-publish" onclick="publishPost()">BROADCAST INTEL</button>
      </div>
    </div>`;
}

function buildPost(p) {
  const codeBlock = p.code ? `<div class="post-code">${p.code}</div>` : '';
  const severityClass = p.severity === 'high' ? 'vuln-high' : p.severity === 'med' ? 'vuln-med' : '';

  return `
    <article class="post-card ${severityClass}">
      <div class="post-header">
        <img class="ph-avatar" src="${p.avatar}" alt="${p.user}">
        <div class="ph-info">
          <div class="ph-name">${p.user} <span class="ph-badge ${p.badgeStyle}">${p.badge}</span></div>
          <div class="ph-meta">${p.time}</div>
        </div>
        <button class="pa-btn" onclick="toast('Decrypting payload...')">DEC</button>
      </div>
      <div class="post-body">${esc(p.text).replace(/\\n/g, '<br>')}</div>
      ${codeBlock}
      <div class="post-actions">
        <button class="pa-btn ${p.liked ? 'active' : ''}" onclick="likePost(${p.id})">
          [${p.liked ? 'VERIFIED' : 'VERIFY'}]
        </button>
        <button class="pa-btn" onclick="toast('Analyze with AI started...')">[ANALYZE AI]</button>
        <button class="pa-btn" onclick="toast('Forwarded to SOC.')">[FORWARD]</button>
      </div>
    </article>`;
}

function buildRightSidebar() {
  const aiMsgsStr = S.aiMsgs.map(m => `
    <div class="ai-msg ${m.role}">${esc(m.text).replace(/\\n/g, '<br>')}</div>
  `).join('') + (S.aiTyping ? '<div class="ai-msg ai">ANALYZING...</div>' : '');

  return `
    <aside class="right-sidebar">
      <div class="ai-widget">
        <div class="ai-header">
          <h3>🧠 CyberAI MA Core (v2.1)</h3>
          <span style="font-size: 10px; color: var(--green); margin-left: auto;">[SERVEURS CASA]</span>
        </div>
        <div class="ai-messages" id="aiMsgs">${aiMsgsStr}</div>
        <div class="ai-input-row">
          <input class="ai-input" id="aiInput" placeholder="> Query Assistant..." onkeydown="if(event.key==='Enter')sendAI()">
          <button class="ai-send" onclick="sendAI()">↵</button>
        </div>
      </div>
    </aside>`;
}

function pageFeed() {
  return buildPostCreator() + S.posts.map(buildPost).join('');
}

function pageIntel() {
  const cards = INTEL_DATABASES.map(i => `
    <div class="post-card" style="padding:16px;">
      <h3 style="color:var(--accent); font-family:var(--font-mono); margin-bottom:8px;">${i.title}</h3>
      <div style="font-family:var(--font-mono); color:var(--muted); font-size:12px;">Size: ${i.size} | Status: ${i.loc}</div>
      <button class="pc-btn" style="margin-top:12px;" onclick="toast('Initiating secure download protocol...')">📥 PULL DATA</button>
    </div>
  `).join('');
  return `<div><h2 style="font-family:var(--font-mono);color:var(--green);margin-bottom:20px;">> ACCESSING SECURE DATASETS...</h2>${cards}</div>`;
}

function pagePremium() {
  return `
    <div class="premium-container">
      <div class="premium-header">
        <h2 class="glitch-text">UPGRADE TO CYBERAI PRO</h2>
        <p>Débloquez le renseignement avancé, l'IA illimitée et les alertes zero-day prioritaires.</p>
      </div>

      <div class="pricing-grid">
        <div class="pricing-card">
          <div class="pricing-tier">SOC ANALYST</div>
          <div class="pricing-price">299 MAD<span>/mois</span></div>
          <ul class="pricing-features">
            <li>✔️ 100 Analyses IA / jour</li>
            <li>✔️ Flux IoC en temps réel</li>
            <li>✔️ Support Standard</li>
          </ul>
          <button class="pricing-btn" onclick="selectPlan('soc')">CHOISIR CE PLAN</button>
        </div>
        <div class="pricing-card pro-card">
          <div class="popular-badge">PLUS SÉCURISÉ</div>
          <div class="pricing-tier">CISO ENTERPRISE</div>
          <div class="pricing-price">999 MAD<span>/mois</span></div>
          <ul class="pricing-features">
            <li>🔥 Analyses IA Illimitées</li>
            <li>🔥 Alertes SMS Zero-Day</li>
            <li>🔥 Accès API & YARA Personnalisé</li>
            <li>🔥 Support 24/7 & Conformité DGSSI</li>
          </ul>
          <button class="pricing-btn pro-btn" onclick="selectPlan('enterprise')">CHOISIR CE PLAN</button>
        </div>
      </div>

      <div class="payment-section" id="paymentSection" style="display:none;">
        <div class="payment-box">
          <h3>PAIEMENT SÉCURISÉ</h3>
          <p class="crypto-notice">Protection AES-256 bits locale.</p>
          <div class="payment-form">
            <div class="form-group">
              <label>Nom sur la carte</label>
              <input type="text" class="form-input" placeholder="Salim Elghazoui">
            </div>
            <div class="form-group">
              <label>Numéro de la carte</label>
              <input type="text" class="form-input" placeholder="0000 0000 0000 0000">
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Expiration</label>
                <input type="text" class="form-input" placeholder="MM/AA">
              </div>
              <div class="form-group">
                <label>CVV</label>
                <input type="password" class="form-input" placeholder="***">
              </div>
            </div>
            <button class="pay-btn" onclick="processPayment()">
              VALIDER LE PAIEMENT 🔒
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ─── APP SHELL RE-RENDER ─────────────────────────────────────
function render() {
  let page = '';
  if (S.tab === 'feed') page = pageFeed();
  else if (S.tab === 'intel') page = pageIntel();
  else if (S.tab === 'premium') page = pagePremium();
  const appRoot = document.getElementById('app-root');
  if (appRoot) {
    appRoot.innerHTML = `
      ${buildNavbar()}
      <div class="layout">
        ${buildLeftSidebar()}
        <main class="main-feed">${page}</main>
        ${buildRightSidebar()}
      </div>
    `;
  }
  const aiBox = document.getElementById('aiMsgs');
  if (aiBox) aiBox.scrollTop = aiBox.scrollHeight;
}

// ─── LOGIC FUNCTIONS ─────────────────────────────────────────
function go(tab) { S.tab = tab; render(); window.scrollTo(0, 0); }

function selectPlan(plan) {
  const ps = document.getElementById('paymentSection');
  if (ps) {
    ps.style.display = 'flex';
    setTimeout(() => {
      ps.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}

function processPayment() {
  toast('Chiffrement de la transaction en cours...');
  setTimeout(() => {
    toast('✅ PAIEMENT ACCEPTÉ. Bienvenue sur CYBERAI PRO.');
    go('feed');
  }, 2000);
}

function likePost(id) {
  const p = S.posts.find(p => p.id === id);
  if (p) { p.liked = !p.liked; render(); }
}

function publishPost() {
  const inp = document.getElementById('postInput');
  if (!inp || !inp.value.trim()) return;
  const newPost = {
    id: Date.now(), liked: false, comments: 0, shares: 0, severity: 'low',
    user: ME.name, avatar: ME.avatar, badge: 'INTEL', badgeStyle: 'badge-blue',
    time: 'JUST NOW', text: inp.value.trim(), code: ''
  };
  S.posts.unshift(newPost);
  toast('Intelligence broadcasted locally and globally.');
  render();
}

async function sendAI() {
  const el = document.getElementById('aiInput');
  if (!el || !el.value.trim()) return;
  const msg = el.value.trim(); el.value = '';
  S.aiMsgs.push({ role: 'user', text: msg });
  S.aiTyping = true; render();

  try {
    const history = S.aiMsgs.slice(-10).map(m => ({
      role: m.role === 'ai' ? 'assistant' : 'user',
      content: m.text,
    }));

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20240620', // Utilisation du modèle Sonnet 3.5
        max_tokens: 300,
        system: "Tu es CyberAI MA, la toute première et plus puissante IA de cybersécurité au Maroc, intégrée à la plateforme de Salim Elghazoui. Tu aides les chercheurs et SOCs marocains à analyser des malwares en temps réel, extraire des IoC pour les banques locales et organismes publics, et tu assures la vulgarisation des menaces. Réponds toujours comme un terminal Unix hyper-sécurisé, rapide et pro, en mettant en avant ta mission nationale de protection.",
        messages: history,
      }),
    });

    if (!res.ok) throw new Error('API ERROR');
    const data = await res.json();
    const reply = data.content?.[0]?.text ?? 'ERR_NO_RESPONSE';
    S.aiMsgs.push({ role: 'ai', text: reply });
  } catch (e) {
    S.aiMsgs.push({ role: 'ai', text: '[SYSTEM FAILURE] Authentication required for API or Network Error.' });
  }
  S.aiTyping = false; render();
}

// ─── INITIALIZATION ──────────────────────────────────────────
render();

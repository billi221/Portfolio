/* Edit project, skills, and experience details here. Do not add unverified claims. */
const skills = [
  {icon:'⌘',heading:'Cybersecurity',items:['Network Security Fundamentals','Threat Analysis Concepts','Vulnerability Assessment Fundamentals','Security Research & Learning']},
  {icon:'▣',heading:'Android & IT Support',items:['ADB / LADB','Remote Troubleshooting / Rescue','Device Configuration & MDM','App Installation and Removal','Zoho Case Documentation']},
  {icon:'✓',heading:'QA & Testing',items:['Reproducing Technical Issues','Installation / Uninstall Validation','Version & Registry Checks','Test Documentation & Logs','Windows Command-Line Utilities']},
  {icon:'◈',heading:'E-Commerce & Content',items:['Shopify Product Listing','Amazon Product Images / Canva','Product Video Editing / CapCut','Google Sheets / MS Office','Cold Email Campaign Support']},
  {icon:'↗',heading:'Working Style',items:['Technical Documentation','Issue Investigation','Team Coordination & Escalation','Continuous Learning','Clear Communication']}
];
const experience = [
  {type:'Technical Support / QA',date:'',title:'Android Technical Support & Software Testing',sub:'Hands-On Experience',bullets:['Troubleshoot Android application installation, updates, removal, configuration, and compatibility using device settings and ADB/LADB.','Investigate remote support issues using Rescue and Android diagnostic tools, including developer options and accessibility settings.','Investigate MDM enrollment and device management issues, documenting troubleshooting steps and outcomes in Zoho.','Coordinate with teammates and escalate unresolved issues for developer review when needed.','Review software installation and removal behavior, reproduce failures, and document findings clearly.']},
  {type:'Self-Employed',date:'2024 · 6 Months',title:'Shopify Product Lister',sub:'E-Commerce Support',bullets:['Created and organized Shopify product listings, including descriptions, categories, and product information.','Reviewed product details and presentation to improve listing clarity and consistency.','Created Amazon product images in Canva and edited product-focused videos in CapCut for store listings.']},
  {type:'Self-Employed',date:'2024 · 3 Months',title:'Freelance Video Editor',sub:'Digital Content',bullets:['Edited short-form videos, including cash-cow style content, with attention to pacing, presentation, and final output.','Used CapCut to edit videos, including product-oriented video assets.']},
  {type:'Self-Employed',date:'2024 · 3 Months',title:'Digital Marketing Assistant',sub:'Outreach Support',bullets:['Assisted with cold email content and maintained recipient lists for outreach activities.']}
];
const projects = [
  {no:'01',category:'automation',label:'Automation / Windows',title:'Windows Application Testing Agent',status:'In Development / Testing',summary:'A Windows testing tool that checks installations, silent uninstalls, application versions, and deployment outcomes.',problem:'Manual deployment checks are time-consuming and can lead to inconsistent test records.',role:'Developing and testing installation, detection, silent uninstallation, logging, and reporting workflows.',features:['Winget Package / Manifest Workflows','Version and Package ID Checks','Install / Uninstall Verification','Per-Application Testing Reports'],stack:['Python','Windows Registry','Winget','YAML'],symbol:'[→]',tint:'blue'}
];
const safe = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const hasText = value => typeof value === 'string' && value.trim().length > 0;

document.getElementById('skillsGrid').innerHTML = skills.map(s=>`<article class="skill-card"><div class="skill-icon" aria-hidden="true">${safe(s.icon)}</div><h3>${safe(s.heading)}</h3><ul>${s.items.map(i=>`<li>${safe(i)}</li>`).join('')}</ul></article>`).join('');

document.getElementById('experienceList').innerHTML = experience.map((e,i)=>`<article class="exp-row"><div class="exp-aside"><span class="exp-count">0${i+1}</span>${hasText(e.date) ? `<span class="exp-date">${safe(e.date)}</span>` : ''}</div><div class="exp-main"><span class="overline">${safe(e.type)}</span><h3>${safe(e.title)}</h3>${hasText(e.sub) ? `<p class="exp-sub">${safe(e.sub)}</p>` : ''}<ul>${e.bullets.map(b=>`<li>${safe(b)}</li>`).join('')}</ul></div></article>`).join('');

const projectGrid = document.getElementById('projectsGrid');
function renderProjects(filter='all') {
  const filtered = projects.filter(p => filter === 'all' || p.category === filter);
  projectGrid.innerHTML = filtered.map(p=>`<article class="project-card"><div class="project-visual ${safe(p.tint)}"><div class="project-visual-top"><span>PROJECT_${safe(p.no)}</span><span>↗</span></div><div class="project-glyph" aria-hidden="true">${safe(p.symbol)}</div><div class="project-visual-bottom"><span>${safe(p.label)}</span><span>MB/26</span></div></div><div class="project-body"><div class="project-label-row"><span class="overline">${safe(p.label)}</span><span class="status-label">${safe(p.status)}</span></div><h3>${safe(p.title)}</h3><p>${safe(p.summary)}</p><details><summary>Project Details <span aria-hidden="true">+</span></summary><div class="project-extra"><h4>Problem</h4><p>${safe(p.problem)}</p><h4>My Contribution</h4><p>${safe(p.role)}</p><h4>Features / Scope</h4><ul>${p.features.map(f=>`<li>${safe(f)}</li>`).join('')}</ul></div></details><div class="tags">${p.stack.map(t=>`<span>${safe(t)}</span>`).join('')}</div></div></article>`).join('');
}
renderProjects();

document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});
  button.classList.add('active');
  button.setAttribute('aria-pressed','true');
  renderProjects(button.dataset.filter)
}));

const nav = document.getElementById('siteNav'), toggle = document.getElementById('menuToggle');
toggle.addEventListener('click',()=>{
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !open)
});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded','false');
  toggle.setAttribute('aria-label','Open navigation')
}));
document.getElementById('year').textContent = new Date().getFullYear();

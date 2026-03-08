const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Experience = require('./models/Experience');

const projects = [
  {
    title: 'EduMagnetX — E-Learning Platform',
    description: 'Full-stack e-learning platform with role-based admin dashboards, automated workflows, and optimized REST APIs. Achieved 40% manual effort reduction and 30% maintenance overhead reduction.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'REST API'],
    githubLink: 'https://github.com/chakribontha',
    liveDemo: '',
    tags: ['Full Stack', 'Backend', 'Education'],
    featured: true,
    order: 1
  },
  {
    title: 'Share Sketch — Real-Time Whiteboard',
    description: 'Real-time collaborative whiteboard with WebSockets achieving <50ms update speeds. Features secure JWT authentication, access control, and cloud-based API integrations.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'WebSockets', 'JWT', 'Tailwind CSS'],
    githubLink: 'https://github.com/chakribontha',
    liveDemo: '',
    tags: ['Real-Time', 'WebSockets', 'Full Stack'],
    featured: true,
    order: 2
  },
  {
    title: 'Vendor Management Portal',
    description: 'Multi-role vendor management admin panel with secure authentication layers, PostgreSQL/MongoDB indexing optimizations, reducing manual dependency by 40% and costs by 30%.',
    techStack: ['React.js', 'Angular', 'Node.js', 'PostgreSQL', 'MongoDB', 'Material-UI'],
    githubLink: 'https://github.com/chakribontha',
    liveDemo: '',
    tags: ['Admin Panel', 'Full Stack', 'Backend'],
    featured: true,
    order: 3
  }
];

const experiences = [
  {
    company: 'Accenture',
    role: 'Associate Software Engineer',
    period: 'Jan 2025 – Present',
    location: 'Hyderabad',
    current: true,
    color: '#6EE7B7',
    bullets: [
      'Built scalable web apps in Agile/Scrum — improved usability across internal teams',
      'Engineered high-performance REST APIs with Node.js/Express — reduced response time by 28% via query optimization & caching',
      'Built reusable React.js UI components — boosted dashboard rendering speed by 20%',
      'Collaborated cross-functionally across design, backend, and QA teams',
    ],
    tech: ['React.js','Node.js','Express.js','TypeScript','PostgreSQL','MongoDB','Docker','Git'],
    order: 1,
  },
  {
    company: 'Tech Mahindra',
    role: 'Associate Analyst',
    period: 'May 2024 – Dec 2024',
    location: 'Hyderabad',
    current: false,
    color: '#38BDF8',
    bullets: [
      'Designed and developed full-stack web modules — improved workflow automation across internal teams',
      'Engineered vendor-management admin panels with multi-role auth — reduced manual dependency by 40%',
      'Optimized data-heavy modules with PostgreSQL/MongoDB indexing — cut maintenance costs by 30%',
      'Integrated backend services, API layers, and scalable UI components',
    ],
    tech: ['React.js','Angular','Node.js','PostgreSQL','Material-UI','Authentication','APIs'],
    order: 2,
  },
];

const skills = [
  // Languages
  { name: 'JavaScript', category: 'Languages', proficiency: 95, order: 1 },
  { name: 'TypeScript', category: 'Languages', proficiency: 88, order: 2 },
  { name: 'Java', category: 'Languages', proficiency: 85, order: 3 },
  { name: 'Python', category: 'Languages', proficiency: 80, order: 4 },
  { name: 'C++', category: 'Languages', proficiency: 75, order: 5 },
  // Frontend
  { name: 'React.js', category: 'Frontend', proficiency: 95, order: 1 },
  { name: 'Angular', category: 'Frontend', proficiency: 80, order: 2 },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 90, order: 3 },
  { name: 'HTML/CSS', category: 'Frontend', proficiency: 95, order: 4 },
  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 92, order: 1 },
  { name: 'Express.js', category: 'Backend', proficiency: 92, order: 2 },
  { name: 'REST APIs', category: 'Backend', proficiency: 95, order: 3 },
  { name: 'Microservices', category: 'Backend', proficiency: 78, order: 4 },
  // Databases
  { name: 'MongoDB', category: 'Databases', proficiency: 88, order: 1 },
  { name: 'PostgreSQL', category: 'Databases', proficiency: 85, order: 2 },
  { name: 'MySQL', category: 'Databases', proficiency: 82, order: 3 },
  // DevOps
  { name: 'Docker', category: 'DevOps', proficiency: 80, order: 1 },
  { name: 'AWS (EC2, S3, Lambda)', category: 'DevOps', proficiency: 75, order: 2 },
  { name: 'CI/CD Pipelines', category: 'DevOps', proficiency: 75, order: 3 },
  { name: 'Git/GitHub', category: 'DevOps', proficiency: 92, order: 4 },
  // Tools
  { name: 'WebSockets', category: 'Tools', proficiency: 85, order: 1 },
  { name: 'JWT/OAuth', category: 'Tools', proficiency: 88, order: 2 },
  { name: 'Agile/Scrum', category: 'Tools', proficiency: 90, order: 3 }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('Connected to MongoDB');

    await Project.deleteMany();
    await Skill.deleteMany();
    await Experience.deleteMany();

    await Project.insertMany(projects);
    await Skill.insertMany(skills);
    await Experience.insertMany(experiences);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedDB();

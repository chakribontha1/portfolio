const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Experience = require('./models/Experience');

const projects = [
  {
    title: 'EduMagnetX — Event-Driven E-Learning Platform',
    description: 'Multi-tenant e-learning platform designed and shipped solo — secure role-based auth, course management, and REST APIs for 200+ concurrent users. Notifications run on Apache Kafka so every learner gets enrollment and course-update alerts during traffic spikes, with zero message loss.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'Apache Kafka', 'PostgreSQL', 'AWS', 'Docker'],
    githubLink: 'https://github.com/chakribontha',
    liveDemo: '',
    tags: ['Backend', 'Distributed Systems'],
    featured: true,
    order: 1
  },
  {
    title: 'Real-Time Collaboration Engine',
    description: 'Sync engine built on WebSockets holding sub-50ms broadcast latency across concurrent sessions, with JWT-secured access control and a stateless API layer designed to scale horizontally.',
    techStack: ['Node.js', 'Express.js', 'WebSockets', 'JWT'],
    githubLink: 'https://github.com/chakribontha',
    liveDemo: '',
    tags: ['Real-Time', 'Backend'],
    featured: true,
    order: 2
  },
  {
    title: 'Vendor Management Platform',
    description: 'Vendor-management platform owned end to end at Tech Mahindra — API design, schema modeling, and multi-role authentication for 150 employees and 70 vendors across 20+ workflows. Indexing and caching cut average query time 30% on MySQL tables of 300K+ rows.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'RabbitMQ', 'REST APIs'],
    githubLink: 'https://github.com/chakribontha',
    liveDemo: '',
    tags: ['Backend', 'Admin Panel'],
    featured: true,
    order: 3
  }
];

const experiences = [
  {
    company: 'Accenture',
    role: 'Software Development Engineer',
    period: 'Jan 2025 – Present',
    location: 'Hyderabad',
    current: true,
    color: '#6EE7B7',
    bullets: [
      'Cut p95 API latency from 420ms to 302ms (28%) on Spring Boot services handling 30K+ requests/day — profiled slow endpoints, tuned JPA queries, added composite indexes, and cached hot reads.',
      'Replaced synchronous cross-service calls with Kafka-based async event processing across 4 topics and 3 consumer services — decoupled dependencies and raised event throughput 35%.',
      'Containerized 5 services with Docker and deployed to Kubernetes with rolling updates — lifted releases to 6/week and cut deployment failures 20% via a standardized CI/CD pipeline.',
      'Standardized failure handling across services — centralized exception mapping, retry-with-backoff on downstream calls, structured logging — cutting time spent tracing production issues.',
      'Added 120+ automated tests (JUnit, Mockito) across order, payment, and data-sync workflows, gated on every merge.',
      'Mentored an intern to independent delivery through code reviews and hands-on guidance.',
    ],
    tech: ['Java', 'Spring Boot', 'Apache Kafka', 'Kubernetes', 'Docker', 'REST APIs', 'Microservices', 'AWS', 'SQL'],
    order: 1,
  },
  {
    company: 'Tech Mahindra',
    role: 'Associate Software Developer',
    period: 'May 2024 – Dec 2024',
    location: 'Hyderabad',
    current: false,
    color: '#38BDF8',
    bullets: [
      'Owned a vendor-management platform end to end — API design, schema modeling, multi-role authentication, deployment — serving 150 employees and 70 vendors across 20+ workflows.',
      'Offloaded 5K background jobs/day (report generation, email notifications) to RabbitMQ consumers, moving blocking work off the request path and cutting p95 latency 35%.',
      'Reduced average query execution time 30% on MySQL tables of 300K+ rows through indexing and caching of repeated reads.',
      'Automated releases with CI/CD pipelines, moving from 1 to 4 deploys/week and removing manual deployment steps.',
    ],
    tech: ['Java', 'Spring Boot', 'RabbitMQ', 'MySQL', 'REST APIs', 'Docker', 'Git', 'CI/CD'],
    order: 2,
  },
];

const skills = [
  // Languages
  { name: 'Java', category: 'Languages', proficiency: 92, order: 1 },
  { name: 'SQL', category: 'Languages', proficiency: 90, order: 2 },
  { name: 'JavaScript', category: 'Languages', proficiency: 85, order: 3 },
  { name: 'TypeScript', category: 'Languages', proficiency: 78, order: 4 },
  { name: 'C++', category: 'Languages', proficiency: 75, order: 5 },
  // Backend
  { name: 'Spring Boot', category: 'Backend', proficiency: 96, order: 1 },
  { name: 'REST APIs', category: 'Backend', proficiency: 95, order: 2 },
  { name: 'Microservices', category: 'Backend', proficiency: 90, order: 3 },
  { name: 'Spring Security', category: 'Backend', proficiency: 88, order: 4 },
  { name: 'Hibernate / JPA', category: 'Backend', proficiency: 85, order: 5 },
  // Databases
  { name: 'MySQL', category: 'Databases', proficiency: 90, order: 1 },
  { name: 'PostgreSQL', category: 'Databases', proficiency: 88, order: 2 },
  { name: 'MongoDB', category: 'Databases', proficiency: 82, order: 3 },
  // DevOps
  { name: 'Docker', category: 'DevOps', proficiency: 88, order: 1 },
  { name: 'AWS (EC2, S3, CloudFront)', category: 'DevOps', proficiency: 85, order: 2 },
  { name: 'CI/CD', category: 'DevOps', proficiency: 85, order: 3 },
  { name: 'Kubernetes', category: 'DevOps', proficiency: 82, order: 4 },
  { name: 'Git/GitHub', category: 'DevOps', proficiency: 92, order: 5 },
  // Tools
  { name: 'Apache Kafka', category: 'Tools', proficiency: 90, order: 1 },
  { name: 'RabbitMQ', category: 'Tools', proficiency: 85, order: 2 },
  { name: 'JWT/OAuth2', category: 'Tools', proficiency: 88, order: 3 },
  { name: 'JUnit/Mockito', category: 'Tools', proficiency: 85, order: 4 },
  { name: 'Agile/Scrum', category: 'Tools', proficiency: 90, order: 5 }
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

export const projects = [
  {
    id: 'edumagnetx',
    title: 'EduMagnetX — Event-Driven E-Learning Platform',
    description: 'Multi-tenant e-learning platform designed and shipped solo — secure role-based auth, course management, and REST APIs for 200+ concurrent users. Notifications run on Apache Kafka so every learner gets enrollment and course-update alerts during traffic spikes, with zero message loss.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'Apache Kafka', 'PostgreSQL', 'AWS', 'Docker'],
    githubLink: 'https://github.com/chakribontha',
    liveDemo: '',
    tags: ['Backend', 'Distributed Systems'],
  },
  {
    id: 'realtime-collab',
    title: 'Real-Time Collaboration Engine',
    description: 'Sync engine built on WebSockets holding sub-50ms broadcast latency across concurrent sessions, with JWT-secured access control and a stateless API layer designed to scale horizontally.',
    techStack: ['Node.js', 'Express.js', 'WebSockets', 'JWT'],
    githubLink: 'https://github.com/chakribontha',
    liveDemo: '',
    tags: ['Real-Time', 'Backend'],
  },
  {
    id: 'vendor-management',
    title: 'Vendor Management Platform',
    description: 'Vendor-management platform owned end to end at Tech Mahindra — API design, schema modeling, and multi-role authentication for 150 employees and 70 vendors across 20+ workflows. Indexing and caching cut average query time 30% on MySQL tables of 300K+ rows.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'RabbitMQ', 'REST APIs'],
    githubLink: 'https://github.com/chakribontha',
    liveDemo: '',
    tags: ['Backend', 'Admin Panel'],
  },
]

export const experiences = [
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
  },
]

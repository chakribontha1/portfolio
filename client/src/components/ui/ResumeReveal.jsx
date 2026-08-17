const lines = [
  'SUMMARY',
  'Java backend engineer with 2.5+ years building and owning production microservices for a global banking client: Spring Boot REST APIs, event-driven pipelines on Apache Kafka, and SQL performance work, deployed to Kubernetes on AWS. Rank 320 of 537,000+ in TCS CodeVita, 1000+ problems solved on LeetCode and Codeforces.',
  '',
  'EXPERIENCE',
  'Software Development Engineer — Accenture Solutions Pvt Ltd · Jan 2025 – Present',
  'Java · Spring Boot · REST APIs · Apache Kafka · Kubernetes · Docker · SQL · AWS',
  '> Cut p95 API latency 420ms -> 302ms (28%) on Spring Boot services handling 30K+ requests/day, by profiling slow endpoints, tuning JPA queries, adding composite indexes, and caching hot reads.',
  '> Replaced synchronous cross-service calls with Kafka-based async event processing across 4 topics and 3 consumer services, raising event throughput 35%.',
  '> Containerized 5 services with Docker, deployed to Kubernetes with rolling updates — 6 releases/week, deployment failures cut 20% via standardized CI/CD.',
  '> Standardized failure handling — centralized exception mapping, retry-with-backoff, structured logging — reduced time spent tracing production issues.',
  '> Added 120+ automated tests (JUnit, Mockito) across order, payment, and data-sync workflows, gated on every merge.',
  '> Mentored an intern to independent delivery through code reviews and hands-on guidance.',
  '',
  'Associate Software Developer — Tech Mahindra Limited · May 2024 – Dec 2024',
  'Java · Spring Boot · REST APIs · RabbitMQ · MySQL · Docker · Git · CI/CD',
  '> Owned a vendor-management platform end to end — API design, schema modeling, multi-role auth — serving 150 employees and 70 vendors across 20+ workflows.',
  '> Offloaded 5K background jobs/day to RabbitMQ consumers, moving blocking work off the request path and cutting p95 latency 35%.',
  '> Reduced average query execution time 30% on MySQL tables of 300K+ rows through indexing and caching of repeated reads.',
  '> Automated releases with CI/CD, moving from 1 to 4 deploys/week.',
  '',
  'ALGORITHMS & ACHIEVEMENTS',
  '> Ranked 320 globally among 537,000+ participants — TCS CodeVita Season 12, Round 2.',
  '> Top 9.2% (rank 3,298 / 35,600+) — LeetCode Weekly Contest 464; 1000+ problems solved across LeetCode and Codeforces.',
  '',
  'PROJECTS',
  'EduMagnetX — Event-Driven E-Learning Platform · Jan 2025',
  'Java · Spring Boot · Spring Security · Apache Kafka · PostgreSQL · AWS · Nginx · Docker',
  '> Designed and shipped a multi-tenant learning platform solo — role-based auth, course management, REST APIs — serving 200+ concurrent users.',
  '> Built the notification path on Apache Kafka for enrollments and course updates, holding reliable delivery under burst load with no message loss.',
  '> Automated releases to under 8 minutes with GitHub Actions and Docker on AWS EC2 behind Nginx, serving assets through S3 and CloudFront.',
  '',
  'TECHNICAL SKILLS',
  'Languages: Java, C++, SQL, JavaScript, TypeScript',
  'Spring: Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Spring AOP',
  'Backend & APIs: REST APIs, Microservices, JWT, OAuth2, OpenAPI/Swagger, Hibernate/JPA',
  'Distributed Systems: Apache Kafka, RabbitMQ, caching, async processing, event-driven architecture',
  'Databases: MySQL, PostgreSQL, MongoDB, query optimization, indexing, transactions',
  'Cloud & DevOps: AWS (EC2, S3, CloudFront), Docker, Kubernetes, Nginx, Git, GitHub Actions, CI/CD',
  'Testing & Build: JUnit, Mockito, Maven',
  'Practices: Agile/Scrum, code review, debugging, monitoring & logging, JIRA, Confluence',
  'Core CS: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks',
  '',
  'EDUCATION',
  'Lovely Professional University, Punjab, India — CGPA 8.2 — MCA — 2022 – 2024',
  'Chaitanya (Deemed to be University), Telangana, India — CGPA 8.4 — B.Sc. CS — 2019 – 2022',
]

export default function ResumeReveal() {
  return (
    <div className="resume-reveal" aria-hidden="true">
      <pre className="font-mono text-accent whitespace-pre-wrap p-3" style={{ fontSize: '7.2px', lineHeight: 1.3, opacity: 0.85 }}>
        {lines.join('\n')}
      </pre>
    </div>
  )
}

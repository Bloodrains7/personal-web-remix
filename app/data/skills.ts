import {Code, Database, Globe, Palette} from "lucide-react";

export const Skills = [
    {
        category: 'Frontend',
        icon: Code,
        skills: [
            'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SASS',
            'Tailwind CSS', 'PrimeNG', 'NgRx', 'RxJs', 'Chart.js',
            'Vite', 'Nx', 'Federation Module', 'Quill', 'Bootstrap'
        ]
    },
    {
        category: 'Backend',
        icon: Database,
        skills: [
            'Java', 'Spring Boot', 'Spring Security', 'Spring WebFlux', 'Spring GraphQL',
            'Spring Batch', 'Spring JPA', 'Python', 'Django', 'DRF',
            'PostgreSQL', 'Oracle SQL', 'R2DBC', 'GraphQL', 'gRPC', 'OAuth'
        ]
    },
    {
        category: 'Cloud & DevOps',
        icon: Globe,
        skills: [
            'Docker', 'Kubernetes', 'OpenShift', 'GCP', 'Firebase', 'Linux',
            'Git', 'GitLab', 'Maven', 'Nginx', 'Traefik', 'F5',
            'HashiCorp Vault', 'ownCloud'
        ]
    },
    {
        category: 'Integration & Messaging',
        icon: Database,
        skills: [
            'RabbitMQ', 'Apache Camel', 'IBM MQ', 'Liquibase', 'MJML',
            'Swagger', 'KeyCloak', 'Atomikos', 'GoSMS', 'TatraPay',
            'CardPay', 'GooglePay', 'GCP Direction API', 'Firebase Notification API'
        ]
    },
    {
        category: 'Architecture & Design',
        icon: Palette,
        skills: [
            'Solution Architecture', 'UML', 'Microservices', 'System Integration',
            'API Design', 'Prototype Development', 'Team Leadership',
            'Technology Selection', 'Business Requirements Analysis'
        ]
    },
    {
        category: 'Tools & IDE',
        icon: Code,
        skills: [
            'IntelliJ IDEA', 'Visual Studio Code', 'JetBrains PyCharm', 'RustRover',
            'Figma', 'SoapUI', 'Swagger API', 'Jira', 'YouTrack',
            'Selenium', 'JUnit', 'Mockito', 'Test Driven Development'
        ]
    }
];
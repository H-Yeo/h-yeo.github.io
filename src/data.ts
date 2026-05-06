export const RESUME_DATA = {
  name: "Heing Yeo",
  title: "Enterprise Software & Systems Integration",
  corporation: "1559029 B.C. LTD.",
  mission: "15+ years delivering mission-critical software for government, fintech, and enterprise clients. Specialising in .NET microservices, full-stack development, and complex systems integration.",
  email: "yeoheingo@outlook.com",
  location: "North Vancouver, BC, Canada",

  // ── Availability signal ──────────────────────────────────────────────────
  lastEngagement: {
    label: "Most recent contract",
    org: "Government of Canada",
    dept: "Dept. of National Defence",
    period: "10/2025 – 03/2026",
    availabilityLabel: "Now accepting new contracts",
  },
  currentEngagement: {
    org: "Government of Canada",
    dept: "Dept. of National Defence",
    period: "10/2025 – Present",
  },  
  // ────────────────────────────────────────────────────────────────────────

  skillCategories: [
    {
      title: "Languages",
      skills: ["C#", "ASP .NET", "VB .NET", "TypeScript", "JavaScript", "Java", "Oracle PL/SQL", "PowerShell", "Classic ASP", "VBA"]
    },
    {
      title: "Frontend",
      skills: ["React", "Vue / Vuetify", "HTML5", "CSS", "TypeScript"]
    },
    {
      title: "Infrastructure & Platforms",
      skills: ["AWS", "Azure", "Docker", "Kafka", "RabbitMQ", "Octopus CI/CD", "Git / TFS / SVN", "Salesforce", "SharePoint"]
    },
    {
      title: "Databases & Data",
      skills: ["Oracle", "MS SQL Server", "MySQL", "SQLite", "SSIS", "SSRS", "ETL"]
    },
    {
      title: "Concepts & Patterns",
      skills: ["Microservices", "RESTful API", "SOAP", "MVC", "OOP / OOD", "UML", "COM / ODBC", "XML / JSON"]
    },
    {
      title: "Methodologies",
      skills: ["Agile / Scrum", "Kanban", "Waterfall", "SDLC"]
    },
    {
      title: "Domain Expertise",
      skills: ["Sales Technology", "Energy Sales Operations", "Market Fundamentals", "Federal Contracts", "Secure Payments"]
    }
  ],

  experience: [
    {
      role: "Full-Stack Software Developer (Contract)",
      company: "Department of National Defence",
      // Update this period to the actual end date when known
      period: "10/2025 – 03/2026",
      location: "Canada",
      description: "Delivered software integration and development services under a federal contract with the Government of Canada's Department of National Defence.",
      isCurrent: false,
      isGov: true,
      bullets: [
        "Built and structured core UI workflows using Vue and Vuetify, translating early-stage requirements into functional layouts and reusable components across multiple forms and user interactions.",
        "Integrated frontend components with C# services and Oracle 12 backend to enable dynamic data-driven behavior, including dropdown population, form inputs, and file upload (drag-and-drop) functionality.",
        "Defined initial frontend architecture and implementation strategy for a greenfield system, balancing rapid delivery with maintainability within a 4-month contract timeline."
      ]
    },
    {
      role: "Intermediate Software Engineer II",
      company: "Plenty of Fish",
      period: "03/2024 – 10/2025",
      description: "Full-stack contributor in the Trust & Safety domain, building user-facing safety features with React/TypeScript and C# microservices in an agile environment.",
      bullets: [
        "Built React UI for a safety promotions feature integrating with C# backend — resulted in 388K+ user engagements",
        "Delivered the 'Safety Toolbox' centralising safety features into a single panel, driving a 2.5× increase in user-submitted safety reports within two months",
        "Contributed to Match Group's E2P platform consolidation by modifying C# microservices to transform real-time Kafka data streams"
      ]
    },
    {
      role: "Software Engineer",
      company: "insightsoftware",
      period: "11/2023 – 02/2024",
      description: "Maintenance and support of the .NET SQL Client open-source data driver — triaging bugs, contributing fixes, and reviewing community pull requests across .NET 8, .NET 6, and .NET Framework.",
      bullets: [
        "Contributor to .NET SQL Client release cycle; resolved bug fixes and ensured .NET 8 compatibility details were accurately surfaced to the open-source community"
      ]
    },
    {
      role: "Software Engineer",
      company: "Coupa Software",
      period: "12/2021 – 06/2023",
      description: "Treasury payments space — maintaining applications responsible for transforming payments into bank-compliant formats and managing secure sending/receiving of payment responses.",
      bullets: [
        "Identified and resolved a critical pre-release vulnerability in a bank file payload endpoint during code review, preventing adverse impact on thousands of customers",
        "Led EBICS e-banking provider transition in 3 months across multiple web applications and Windows services",
        "Improved Octopus CI/CD pipelines via PowerShell and AWS APIs, decreasing deployment times by 7%",
        "Created 8 of 56 bank-compliant XML payloads for direct bank integrations, working with subject-matter experts and banking specs"
      ]
    },
    {
      role: "Software Developer II",
      company: "Arc'teryx Equipment",
      period: "2017 – 12/2021",
      description: "Agile team responsible for ERP ecosystem maintenance — integrations with Centric Software (PLM), SPS Commerce (EDI), and ASP .NET staff/corporate purchase portal.",
      bullets: [
        "Contributed to company-wide ERP-to-SAP transition managing $500M+ gross revenue — developed C# microservices with RabbitMQ and MySQL",
        "Delivered Canadian and US taxation reporting within a 3-month deadline, working with customs and finance teams",
        "Optimised SSRS packages for PLM product line data loading — decreased loading times by 50%",
        "Transformed 20,000 SKUs into JSON for Magento REST API batch payloads"
      ]
    },
    {
      role: "BA, Market Fundamentals / Analyst, Sales Technology",
      company: "ATCO Power Canada Ltd · ATCO Energy Ltd",
      period: "2013 – 2017",
      description: "Performed short-term and long-term power and natural gas forecasting using AURORAxmp. Lead Salesforce.com business administration, collaborating on corporate initiatives and supporting marketing and sales teams on CRM technology.",
      bullets: [
        "Technology optimisations eliminated the need for 1 FTE and enabled pricing one contract per day versus several",
        "Documented existing business processes and captured MVP requirements that influenced Salesforce.com strategy for both subsidiary and parent company",
        "Created a .NET proof-of-concept pricing application for commercial power and natural gas contracts within 2 months"
      ]
    },
    {
      role: "Business Systems Professional",
      company: "Capital Power Corporation",
      period: "2009 – 2013",
      description: "Developed and maintained energy management operations software for real-time mission-critical compliance monitoring, electricity trading, and financial reporting.",
      bullets: [
        "Developed contract software calculating millions of dollars in capacity and energy payments for coal and natural gas power plants",
        "Technical lead for Energy Trading Risk Management (ETRM) system integration",
      ]
    }
  ],

  education: {
    degree: "Mathematics & Computing Science",
    institution: "University of Alberta",
    details: "Focus on numerical analysis and computational logic."
  },

  services: [
    {
      title: "Systems Integration",
      description: "End-to-end microservice architecture and integration across REST, SOAP, Kafka, and RabbitMQ. Bank-compliant XML payloads, ETL pipelines, and ERP migrations.",
      icon: "Settings",
      tags: ["C# / .NET", "Kafka", "RabbitMQ", "SSIS / SSRS", "Oracle"]
    },
    {
      title: "Full-Stack Development",
      description: "From React/TypeScript frontends to ASP .NET backends. User-facing feature delivery, API design, legacy modernisation, and web portal development.",
      icon: "Layout",
      tags: ["React", "TypeScript", "ASP .NET", "Vue", "Classic ASP"]
    },
    {
      title: "Government & Enterprise",
      description: "Federal contract delivery, compliance-sensitive development, financial reporting, and secure payments infrastructure. Proven across DND and large-scale ERP environments.",
      icon: "Shield",
      tags: ["Federal contracts", "Payment systems", "Compliance", "CI/CD", "AWS"]
    }
  ]
};

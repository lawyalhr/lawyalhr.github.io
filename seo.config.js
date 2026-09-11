const SITE_URL = "https://lawyalhr.com";

const seo = {
  siteUrl: SITE_URL,
  siteName: "Lawyal HR & Legal Advisors",
  title: "HR & Labour Law Consultants in Gurugram | Lawyal",
  description:
    "HR, industrial relations and labour law consultants in Gurugram serving clients across India. Compliance, enquiries, POSH and union advisory.",
  keywords: [
    "HR advisory Gurugram",
    "HR advisory Gurgaon",
    "HR advisory Delhi",
    "HR advisory NCR",
    "labour law consultants Gurgaon",
    "labour law consultants Delhi",
    "labour law consultants NCR",
    "labour law consultants India",
    "industrial relations advisory",
    "New Labour Codes compliance",
    "statutory compliance audit",
    "domestic enquiry officer",
    "POSH compliance training",
    "union negotiations India",
    "HR consultants Delhi NCR",
    "HR consultants Delhi",
    "HR consultants Gurgaon",
    "labour law litigation India",
    "HR & Labour Law Consultants in Gurugram",
    "HR & Labour Law Consultants in Delhi",
    "HR & Labour Law Consultants in NCR",
    "HR & Labour Law Consultants in India",
    "HR & Labour Law Consultants in Delhi NCR",
    "HR & Labour Law Consultants in Gurugram",
    "HR & Labour Law Consultants in Delhi",
    "HR & Labour Law Consultants in NCR",
    "HR & Labour Law Consultants in India",
    
  ].join(", "),
  locale: "en_IN",
  themeColor: "#002147",
  ogImage: `${SITE_URL}/images/logo-lawyal-full.png`,
  ogImageAlt: "Lawyal HR & Legal Advisors logo",
  twitterHandle: "",
  phones: ["+91-9810675681", "+91-9899706331"],
  email: "info@lawyalhr.com",
  address: {
    locality: "Gurugram",
    region: "Haryana",
    country: "IN"
  },
  founders: [
    { name: "Prem Kohli", role: "Global HR Leader & Strategic Advisor" },
    { name: "Anand Deepak", role: "Senior HR & IR Advisor" }
  ],
  services: [
    "New Labour Codes Implementation",
    "Statutory Compliance & Risk Management",
    "Domestic Enquiry & Disciplinary Frameworks",
    "HR Policies & Governance",
    "Industrial Relations Strategy",
    "Government Liaisoning",
    "Labour Law Litigation & Tribunal Representation",
    "POSH Compliance & Training"
  ]
};

seo.structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#organization`,
      name: seo.siteName,
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-lawyal-full.png`,
      image: [
        `${SITE_URL}/images/logo-lawyal-full.png`,
        `${SITE_URL}/images/hero-corporate-meeting.webp`
      ],
      description: seo.description,
      email: seo.email,
      telephone: seo.phones,
      address: {
        "@type": "PostalAddress",
        addressLocality: seo.address.locality,
        addressRegion: seo.address.region,
        addressCountry: seo.address.country
      },
      areaServed: {
        "@type": "Country",
        name: "India"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: seo.phones[0],
        email: seo.email,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"]
      },
      knowsAbout: [
        "Human resources consulting",
        "Industrial relations",
        "Indian labour law",
        "Statutory compliance",
        "Workplace investigations",
        "POSH compliance"
      ],
      serviceType: seo.services,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HR, industrial relations and labour law services",
        itemListElement: seo.services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service, areaServed: "India" }
        }))
      },
      founder: seo.founders.map((founder) => ({
        "@type": "Person",
        name: founder.name,
        jobTitle: founder.role
      })),
      slogan: "HR Solutions. Legally Strong."
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: seo.siteName,
      description: seo.description,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` }
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: seo.title,
      description: seo.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN"
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What HR and labour law services does Lawyal provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lawyal advises employers on HR policies, industrial relations, statutory compliance, domestic enquiries, POSH, union negotiations, labour disputes, training and compliance audits."
          }
        },
        {
          "@type": "Question",
          name: "Where does Lawyal provide HR and labour law consulting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lawyal is based in Gurugram, serves Delhi NCR and supports organisations across India."
          }
        },
        {
          "@type": "Question",
          name: "Can Lawyal support a domestic enquiry or industrial relations crisis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The firm undertakes domestic enquiry assignments and provides industrial relations support for disciplinary matters, union disputes, collective bargaining and crisis intervention."
          }
        },
        {
          "@type": "Question",
          name: "Does Lawyal offer ongoing advisory as well as project work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Clients can engage Lawyal on a monthly retainer or for a defined project such as a compliance audit, policy review, training programme or enquiry."
          }
        }
      ]
    }
  ]
});

module.exports = seo;

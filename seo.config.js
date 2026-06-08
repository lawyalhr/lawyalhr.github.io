const SITE_URL = "https://lawyalhr.com";

const seo = {
  siteUrl: SITE_URL,
  siteName: "Lawyal HR & Legal Advisors",
  title:
    "Lawyal HR & Legal Advisors | HR, IR & Labour Law Consultants in Gurugram",
  description:
    "Premier HR, industrial relations and labour law advisory in Gurugram and pan-India. New Labour Codes implementation, statutory compliance audits, domestic enquiry, union negotiations, POSH compliance and tribunal representation by advisors with 30+ years of leadership experience.",
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
    "labour law litigation India"
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
      image: `${SITE_URL}/images/hero-corporate-meeting.webp`,
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
      serviceType: seo.services,
      founder: seo.founders.map((founder) => ({
        "@type": "Person",
        name: founder.name,
        jobTitle: founder.role
      })),
      sameAs: [SITE_URL]
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
    }
  ]
});

module.exports = seo;

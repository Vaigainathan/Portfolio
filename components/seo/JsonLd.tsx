import { contactDetails, site, siteUrl } from "@/content/site";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Web & Mobile App Developer",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
  sameAs: [contactDetails.github, contactDetails.linkedin],
};

export function JsonLd() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
  );
}

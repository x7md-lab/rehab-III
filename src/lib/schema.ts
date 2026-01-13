import { createUnhead } from 'unhead';
import { renderSSRHead } from '@unhead/ssr';
import { SITE } from '@/config/site';

export async function generateSchemaJSON(nodes: any[], locale: 'ar' | 'en' = 'ar') {
  const head = createUnhead();

  const organizationId = `${SITE.url}/#organization`;
  const websiteId = `${SITE.url}/#website`;
  
  // Fallback to 'ar' if locale is not found in SITE.i18n (though typing enforces it)
  const siteData = SITE.i18n[locale] || SITE.i18n.ar;

  const graph = [
    {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteData.name,
        alternateName: siteData.alternateName,
        url: SITE.url,
        logo: {
            '@type': 'ImageObject',
            url: `${SITE.url}/logowhte.svg`
        },
        description: siteData.description,
        foundingDate: SITE.foundingDate,
        address: {
            '@type': 'PostalAddress',
            streetAddress: siteData.contact.address.streetAddress,
            addressLocality: siteData.contact.address.addressLocality,
            addressCountry: siteData.contact.address.addressCountry
        },
        email: siteData.contact.email,
        telephone: siteData.contact.phone,
        areaServed: 'SA',
        sameAs: SITE.socialLinks.map(link => link.url),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: locale === 'ar' ? 'خدماتنا' : 'Our Services',
          itemListElement: siteData.services.map(serviceName => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: serviceName
            }
          }))
        }
    },
    {
        '@type': 'WebSite',
        '@id': websiteId,
        name: siteData.name,
        url: SITE.url,
        publisher: {
            '@id': organizationId
        },
        inLanguage: locale
    },
    ...nodes
  ];

  head.push({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': graph
        })
      }
    ]
  });

  const { headTags } = await renderSSRHead(head);
  
  return headTags;
}

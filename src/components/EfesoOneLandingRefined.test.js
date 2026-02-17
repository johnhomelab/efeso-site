const fs = require('fs');
const path = require('path');

describe('EfesoOneLandingRefined Navigation Links', () => {
  const componentPath = path.join(__dirname, 'EfesoOneLandingRefined.jsx');
  const content = fs.readFileSync(componentPath, 'utf8');

  const expectedLinks = [
    { href: '#solutions', text: 'Soluções' },
    { href: '#how', text: 'Como funciona' },
    { href: '#cases', text: 'Resultados' },
    { href: '#faq', text: 'FAQ' },
    { href: '#contact', text: 'Contato' },
  ];

  expectedLinks.forEach(link => {
    test(`contains a link to ${link.href} with text "${link.text}"`, () => {
      // Regex to find the link. It accounts for potential whitespace and classes.
      const linkRegex = new RegExp(`<a href="${link.href}"[^>]*>${link.text}</a>`);
      expect(content).toMatch(linkRegex);
    });
  });

  test('contains a link to top', () => {
    expect(content).toMatch(/<a href="#top"/);
  });

  test('uses the correct constant for JSON-LD', () => {
    expect(content).toMatch(/\$\{JSON\.stringify\(JSON_LD\)\}/);
    expect(content).not.toMatch(/\$\{JSON\.stringify\(jsonLd\)\}/);
  });

  test('uses WHATSAPP_URL for all WhatsApp links', () => {
    // Check that WHATSAPP_URL is used in href
    expect(content).toMatch(/href=\{WHATSAPP_URL\}/);
    expect(content).not.toMatch(/href=\{whatsapp\}/);
  });

  test('uses CURRENT_YEAR for the copyright notice', () => {
    expect(content).toMatch(/© \{CURRENT_YEAR\}/);
    expect(content).not.toMatch(/© \{year\}/);
  });

  test('all external links have rel="noopener noreferrer"', () => {
    const externalLinks = content.match(/<a[^>]*target="_blank"[^>]*>/g);
    externalLinks.forEach(link => {
      expect(link).toMatch(/rel="noopener noreferrer"/);
    });
  });
});

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
});

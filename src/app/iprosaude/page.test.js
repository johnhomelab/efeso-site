const fs = require('fs');
const path = require('path');

describe('IPROSaudePage Security', () => {
  const componentPath = path.join(__dirname, 'page.jsx');
  const content = fs.readFileSync(componentPath, 'utf8');

  test('all links with target="_blank" must have rel="noopener noreferrer"', () => {
    // This regex finds all <a> tags with target="_blank"
    const linksWithTargetBlank = content.match(/<a[^>]*target="_blank"[^>]*>/g) || [];

    linksWithTargetBlank.forEach(link => {
      expect(link).toMatch(/rel="noopener noreferrer"/);
    });
  });
});

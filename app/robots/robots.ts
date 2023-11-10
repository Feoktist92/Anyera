const robotsTxt = `User-agent: *
Disallow: /admin
Disallow: /private`;

export default (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).end(robotsTxt);
};
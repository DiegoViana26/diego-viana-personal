/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.diegosantospersonal.com.br",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/_next/"] },
    ],
    additionalSitemaps: [
      "https://www.diegosantospersonal.com.br/sitemap.xml",
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/sobre"),
    await config.transform(config, "/servicos"),
    await config.transform(config, "/servicos/emagrecimento"),
    await config.transform(config, "/servicos/fortalecimento-muscular"),
    await config.transform(config, "/servicos/dor-lombar"),
    await config.transform(config, "/servicos/hernia-de-disco"),
    await config.transform(config, "/servicos/saude-articular"),
    await config.transform(config, "/servicos/terceira-idade"),
    await config.transform(config, "/servicos/corrida-de-rua"),
    await config.transform(config, "/servicos/condicionamento-fisico"),
    await config.transform(config, "/blog"),
    await config.transform(config, "/faq"),
    await config.transform(config, "/contato"),
  ],
};

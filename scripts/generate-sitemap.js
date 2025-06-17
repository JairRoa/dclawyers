// scripts/generate-sitemap.js
const { writeFileSync } = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// 1) Define aquí todas tus rutas estáticas.
//   Si tuvieras rutas dinámicas (por ejemplo posts),
//   podrías leerlas de un JSON, de tu CMS o de tu API.
const rutas = [
  { url: '/',                 changefreq: 'daily',   priority: 1.0 },
  { url: '/servicios',        changefreq: 'weekly',  priority: 0.8 },
  { url: '/biografia',        changefreq: 'monthly', priority: 0.7 },
  { url: '/blog',             changefreq: 'weekly',  priority: 0.6 },
  { url: '/galeria',          changefreq: 'monthly', priority: 0.5 },
  { url: '/contacto',         changefreq: 'yearly',  priority: 0.4 },
];

// 2) Construye el sitemap a partir de esas rutas
async function build() {
  const hostname = 'https://dclawyers.vercel.app';
  const stream   = new SitemapStream({ hostname });
  const xml = await streamToPromise(
    Readable.from(rutas).pipe(stream)
  );
  // 3) Guarda el fichero en public/ para que Webpack lo copie
  writeFileSync('public/sitemap.xml', xml.toString());
  console.log('✅ public/sitemap.xml generado');
}

build().catch(err => {
  console.error('❌ Error generando sitemap:', err);
  process.exit(1);
});

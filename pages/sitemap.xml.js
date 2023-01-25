import React from 'react';
import * as fs from 'fs'

const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "_app.js",
        "_document.js",
        "404.js",
        "index.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${process.env.SITE_URL}/${staticPagePath}`;
    });
    const dynamicPaths = [
        `${process.env.SITE_URL}`,
        `${process.env.SITE_URL}/services/billboard-advertising`,
        `${process.env.SITE_URL}/services/lamp-post-advertising`,
        `${process.env.SITE_URL}/services/shopping-mall-superstores`,
        `${process.env.SITE_URL}/gallery/digital`,
        `${process.env.SITE_URL}/gallery/activation`,
        `${process.env.SITE_URL}/gallery/branding`
    ];

    const filteredStaticPaths = staticPaths.map((data) =>{
        return(
            data.replace('.js', '')
        )
    })

const allPaths =[ ...filteredStaticPaths , ...dynamicPaths ];

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPaths
            .map((url) => {
            return `
                <url>
                <loc>${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
                </url>
            `;
            })
            .join("")}
        </urlset>
    `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;
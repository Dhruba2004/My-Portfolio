const { experimentalOverrides } = require('next/dist/server/require-hook')

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true,
    }
    
};

module.exports = nextConfig

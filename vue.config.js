module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/animation/'
        : '/',
    outputDir: 'docs'
}
let urls = []

const newUrl = (req, res) => {

    let url = req.body.url
    
    if (!url.startsWith('http')) {
        return res.json({error: 'Invalid URL'})
    }

    urls.push(url)
    res.json({
        original_url: url,
        short_url: urls.indexOf(url) + 1 
    })
}

const getUrl = (req, res) => {
    let short = req.params.short - 1
    if (short >= urls.length) {
        return res.json({error: 'No short URL found for the given input'})
    }
    let url = urls[short]
    res.redirect(url)
}

const getHome = (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html')
}

module.exports = {
    newUrl,
    getUrl,
    getHome
}
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.local.config')

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
	headers: {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET",
	"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
	}
}).listen(3000, config.ip, function(err, result) {
    if (err) {
        console.log(err)
    }
    console.log('Listening at ' + config.ip + ':3000')
})
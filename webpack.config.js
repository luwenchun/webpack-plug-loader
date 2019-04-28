const  path=require('path')

module.exports={
    mode:'development',
    entry:'./index.js',
    module:{
        rules: [
            {
                test: /\.js$/,
                use:path.resolve(__dirname,"./loaders/replaceLoader.js")
            }
       ]
    },
    output:{
        path:path.resolve(__dirname,'dist')
    }
}
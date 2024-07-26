const path = require ('path');

module.exports = { 
    entry: './src/index.js', //punto de entrada de la aplicación//
    output: {
        filename:'bundle.js', //nombre del archivo 
        path: path.resolve(__dirname, 'dist'), //carpeta de salida 
},
    module: {
        rules:[
            {
                  test: /\.ccs$/, //Regex para identificar archivos css
                use:['style-loader','css-loader'], //Loaders para procesar archivos 
            },
            {
                test: /\.js$/, //Regex para identifivar archivos js 
                exclude:/node_modules/,//Excluir la carpeta node_modules
                use: {
                    loader:'babel-loader', //configurar loader para pasar JS modernp a JS antiguo para todos los navegadores                    
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },   
         ],
     },
     devtool: 'source-map', //Generar source para facilitar la depuración 
     devServer: {
        contentBase: path.resolve(__dirname,'dist'), //Caerpeta principal del servidor
        compress: true, // habilitar la comprension gzip 
        port: 9000, //Puerto del servidor del desarrollo
      }
};
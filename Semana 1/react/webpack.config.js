/**
 * Webpack: Para cada tipo de arquivo(.js,.css,.png) eu vou converter o codigo de uma maneira diferente
 * Ativa o loader
 *
 * Loader: Utilizados pelo webpack para que o JS entenda
 * Babel-loader : Converte o JS para algo que o
 * Image-loader : Converte o JS para algo que o
 * Css-loader : Converte o JS para algo que o
 */
const path = require(`path`); // é executado pelo node entao pode usar os modulos dele
module.exports = {
  entry: path.resolve(__dirname, `src`, `index.js`), //arquivo de entrada da aplicacao
  output: {
    path: path.resolve(__dirname, `public`),
    filename: "bundle.js",
  }, // arquivo gerado apos ser convertido
  devServer:{
      contentBase: path.resolve(__dirname,`public`) // essa propriedade devera conter o caminho da pasta onde ficarao os arquivos publicos da aplicacao
  },
  module: {
    rules: [
      {
        test: /\.js$/, //obrigatoria essa propriedade, nessa linha estou informando que essa regra devera se aplicar para todos os arquivos terminados em .js
        exclude: /node_modules/, // evita que o nodemodeules seja convertido
        use:{
            loader: `babel-loader`,
        }
      }, // essa regra define que o babel sera utilziado para conventer todos os arquivos js de maneira que o browser entenda, o arquivo deve finalizar com .js e nao sera convertido caso esteja dentro de node_modules
    ],
  },
};

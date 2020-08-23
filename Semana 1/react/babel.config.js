/**
 * Configuracoes do babel sobre a forma que o codigo sera convertido para que o browser entenda
 */

module.exports = {
  presets: [
    "@babel/preset-env", // converte de JS moderno para mais antigo, baseado no nosso ambiente
    "@babel/preset-react", // entende o html de dentro do JS para converter de forma que o browser entenda
  ], // Conjuntos de configuracao de terceiros
  plugins: ["@babel/plugin-transform-runtime"], //plugin do babel para utilizar async/await, pode ser adicionado como dependencia de dev
};

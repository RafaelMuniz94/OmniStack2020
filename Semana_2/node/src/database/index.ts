import { createConnection } from "typeorm";

createConnection(); // Aqui ele pega as configs daquele arquivo ormconfig ou podemos passar um objeto contendo essas configuracoes
// Quando a config é feita pelo arquivo config podemos utilizar a cli yarn typeorm

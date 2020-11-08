interface IMailConfig {
  driver: "ethereal" | "ses";
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}
export default {
  driver: process.env.MAIL_DRIVER || "ethereal",

  defaults: {
    from: {
      email: "equipe@docespaisefilhos.com.br",
      name: "Equipe Pais e Filhos",
    },
  },
} as IMailConfig;

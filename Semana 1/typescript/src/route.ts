import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloworld(request: Request, response: Response) {
  const user = createUser({
    name: "Rafael",
    email: "rafael@email.com",
    password: "Teste123",
    techs: [
      "node.js",
      "react",
      "react-native",
      {
        title: "Javascript",
        experience: 35,
      },
    ],
  });
  return response.json(user);
}

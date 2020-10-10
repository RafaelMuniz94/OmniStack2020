declare namespace Express {
  // Sobreescrever uma tipagem do express
  export interface Request {
    // Anexa ao objeto Request
    user: {
      id: string;
    };
  }
}

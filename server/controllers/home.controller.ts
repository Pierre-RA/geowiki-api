import { Request, Response } from "express";
let pkg = require('../../package.json');

export let index = (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to API sekeleton.',
    version: pkg.version,
  });
}

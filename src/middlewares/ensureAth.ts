import { NextFunction, Request, Response } from 'express';

const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
  const auth = req.headers.authorization

  if (!auth) return res.status(401).json({ message: 'unauthorized' });

  const [, token] = auth.split(' ')

  if (!token) return res.status(401).json({ message: 'unauthorized' });

  return next()
}

export default ensureAuth

import {Request, Response, NextFunction} from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  const period = 60 * 10
  if (req.method == 'GET' && !(req.path.includes("/media"))) {
    res.set('Cache-control', `public, max-age=${period}`)
  } else {
    res.set('Cache-control', `no-store`)
  }
  next()
}
import { ContainerInject, Injectable } from '../inject';
import { Request } from 'express';

export abstract class AbstractController {
  getService<T extends Injectable>(name: string): T {
    return ContainerInject.getInstance().get<T>(name);
  }

  getQueryParamAsString(req: Request, param: string): string {
    if (req.query[param]) {
      return req.query[param] as string;
    }
    return '';
  }

  getQueryParamAsArray(req: Request, param: string): string[] {
    const queryParam = this.getQueryParam(req, param);
    if (Array.isArray(queryParam)) {
      return queryParam;
    }
    return [queryParam];
  }

  getQueryParam(req: Request, param: string): string | string[] {
    if (req.query[param]) {
      const queryParam = req.query[param];
      if (Array.isArray(queryParam)) {
        return queryParam as string[];
      } else if (typeof queryParam === 'string') {
        return `${queryParam}`;
      }
    }
    return '';
  }
}

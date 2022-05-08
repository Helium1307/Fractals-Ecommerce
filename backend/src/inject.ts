import { UserService, FileUploadService } from './services';

export interface Injectable {
  inject(container: ContainerInject): void;
}

export class ContainerInject {
  private static _instance: ContainerInject;

  services: Map<string, Injectable>;

  private constructor() {
    this.services = new Map<string, Injectable>();
  }

  static getInstance(): ContainerInject {
    if (this._instance == null) {
      this._instance = new ContainerInject();
    }
    return this._instance;
  }

  register(name: string, service: Injectable) {
    this.services.set(name, service);
  }

  get<T extends Injectable>(name: string): T {
    if (this.services.has(name)) {
      return this.services.get(name) as T;
    }
    throw Error(`Serviço não encontrado: ${name}`);
  }
}

export const container = ContainerInject.getInstance();
container.register('FileUploadService', new FileUploadService());
container.register('UserService', new UserService());

container.services.forEach((service) =>
  callInjectIfPossible(service, container)
);

function callInjectIfPossible(target: Injectable, container: ContainerInject) {
  if (target) {
    target.inject(container);
  }
}

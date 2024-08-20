import { isString } from '@nestjs/common/utils/shared.utils';

export interface PluginOptions {
  dtoFileNameSuffix?: string[];
  controllerFileNameSuffix?: string[];
  modelFileNameSuffix?: string[];
  classValidatorShim?: boolean;
  classTransformerShim?: boolean | 'exclusive';
  dtoKeyOfComment?: string;
  controllerKeyOfComment?: string;
  introspectComments?: boolean;
  readonly?: boolean;
  pathToSource?: string;
  debug?: boolean;
  parameterProperties?: boolean;
}

const defaultOptions: PluginOptions = {
  dtoFileNameSuffix: ['.dto.ts', '.entity.ts'],
  controllerFileNameSuffix: ['.controller.ts'],
  modelFileNameSuffix: ['model.ts'],
  classValidatorShim: true,
  classTransformerShim: false,
  dtoKeyOfComment: 'description',
  controllerKeyOfComment: 'description',
  introspectComments: false,
  readonly: false,
  debug: false
};

export const mergePluginOptions = (
  options: Record<string, any> = {}
): PluginOptions => {
  if (isString(options.dtoFileNameSuffix)) {
    options.dtoFileNameSuffix = [options.dtoFileNameSuffix];
  }
  if (isString(options.controllerFileNameSuffix)) {
    options.controllerFileNameSuffix = [options.controllerFileNameSuffix];
  }
  if (isString(options.modelFileNameSuffix)) {
    options.modelFileNameSuffix = [options.modelFileNameSuffix];
  }
  return {
    ...defaultOptions,
    ...options
  };
};

import { pick, assignInWith, partialRight, isUndefined, Many } from 'lodash';

export function filterPropsByType<Type>(
  obj: any,
  values: Many<keyof Type>
): Partial<Type> {
  const value = pick<Type>(obj, values);
  return value;
}

export function copyWithNotUndefined<Target, Source>(
  targetValue: Target,
  sourceValue: Source
): Target | Source {
  return isUndefined(sourceValue) ? targetValue : sourceValue;
}

export function copyProps<Target, Source>(
  obj: Target,
  source: Source,
  props?: Many<keyof Source>
): Target {
  const filterProps = props ? filterPropsByType(source, props) : source;

  let apply: any = partialRight<any, any>(assignInWith, copyWithNotUndefined);
  return apply(obj, filterProps);
}

export function compare(obj1: any, obj2: any) {
  if (obj1 && !obj2) {
    return false;
  } else if (!obj1 && obj2) {
    return false;
  } else if (!obj1 && !obj2) {
    return true;
  } else {
    return obj1.toString() === obj2.toString();
  }
}

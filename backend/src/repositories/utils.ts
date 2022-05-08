export type FilterRegExp = { $regex: RegExp };
export type FilterNotEquals = { $ne: string };

export function like(str: string): FilterRegExp {
  return {
    $regex: new RegExp(str),
  };
}

export function likeIgnoreCase(str: string): FilterRegExp {
  return {
    $regex: new RegExp(str, 'i'),
  };
}

export function equasIgnoreCase(str: string): FilterRegExp {
  return {
    $regex: new RegExp(`^${str}$`, 'i'),
  };
}

export function notEquals(value: string): FilterNotEquals {
  return {
    $ne: value,
  };
}

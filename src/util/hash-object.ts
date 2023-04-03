import * as crypto from 'crypto';

export const hashObject = (object: any): string => {
  const stringified = JSON.stringify(object);
  const hash = crypto.createHash('sha256').update(stringified).digest('hex');

  return hash;
};

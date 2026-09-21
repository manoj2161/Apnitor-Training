export const createError = (message: string, statusCode: number) => {
  const error = new Error(message);
  (error as Error & { statusCode: number }).statusCode = statusCode;
  return error;
};

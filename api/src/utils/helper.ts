export const success = (data: any, message?: string) => {
  return {
    status: "success",
    data,
    message,
  };
};

export const failure = (error?: any, data: null | string = null) => {
  return {
    status: "error",
    data,
    error,
  };
};


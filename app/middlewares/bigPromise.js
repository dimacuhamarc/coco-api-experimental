const bigPromise = (fn) => {
  console.log("bigPromise called with:", fn);
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default bigPromise;
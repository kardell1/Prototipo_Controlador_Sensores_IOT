export const errorHandlerMiddleware = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeUniqueConstraintError":
      return res.status(400).json({ message: err.errors[0].message });
    case "SequelizeValidationError":
      return res.status(400).json({ message: err.errors[0].message });
    case "SequelizeForeignKeyConstraintError":
      return res.status(400).json({ message: err.errors[0].message });
    case "SequelizeDatabaseError":
      return res.status(400).json({ message: err.errors[0].message });
    case "SequelizeConnectionError":
      return res.status(400).json({ message: err.errors[0].message });
    case "SequelizeTimeoutError":
      return res.status(400).json({ message: err.errors[0].message });
    case "SequelizeExclusionConstraintError":
      return res.status(400).json({ message: err.errors[0].message });
    case "SequelizeHostNotReachableError":
      return res.status(400).json({ message: err.errors[0].message });
    case "SequelizeHostNotFoundError":
      return res.status(400).json({ message: err.errors[0].message });
    case "SequelizeConnectionRefusedError":
      return res.status(400).json({ message: err.errors[0].message });
    case "ValidationUserError":
      return res.status(400).json({ message: err.errors[0].message });
    case "ValidationPasswordError":
      return res.status(400).json({ message: err.errors[0].message });
    case "ValidationFindError":
      return res.status(400).json({ message: err.errors[0].message });
    case "ValidationFindAllError":
      return res.status(400).json({ message: err.errors[0].message });
  }
};

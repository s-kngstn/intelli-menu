import { validateRoute } from "../../lib/routeValidator";

export default validateRoute(async (req, res, user) => {
  res.json(user);
});

import { validateRoute } from "../../lib/routeValidator";

export default validateRoute((req, res, user) => {
  res.json(user);
});

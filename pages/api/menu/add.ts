import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { prisma } from "../../../lib/prisma";

const handler = nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  const menu = await prisma.menu.create({
    data: {
      name: req.body.name,
      restaurantId: req.body.id,
    },
  });

  res.json({ menu });
});

export default handler;

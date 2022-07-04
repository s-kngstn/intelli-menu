import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { prisma } from "../../../lib/prisma";

const handler = nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  const restaurant = await prisma.restaurant.create({
    data: {
      name: req.body.name,
      address: req.body.address,
      userId: req.body.id,
    },
  });

  res.json({ restaurant });
});

export default handler;

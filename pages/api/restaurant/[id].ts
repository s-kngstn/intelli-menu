import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { prisma } from "../../../lib/prisma";

const handler = nc().delete(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const deleteRestaurant = await prisma.restaurant.delete({
      where: {
        id: req.body.id,
      },
    });

    res.json({ deleteRestaurant });
  }
);

export default handler;

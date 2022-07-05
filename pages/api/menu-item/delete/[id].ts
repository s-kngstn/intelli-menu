import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { prisma } from "../../../../lib/prisma";

const handler = nc().delete(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const deleteItem = await prisma.menuItems.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({ deleteItem });
  }
);

export default handler;

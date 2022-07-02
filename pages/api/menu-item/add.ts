import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { prisma } from "../../../lib/prisma";

const handler = nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  // const {id} = req.query;

  const menuItem = await prisma.menuItems.create({
    data: {
      name: req.body.name,
      course: req.body.course,
      price: req.body.price,
      description: req.body.description,
      gluten: req.body.gluten,
      dairy: req.body.dairy,
      nuts: req.body.nuts,
      peanuts: req.body.peanuts,
      sesame: req.body.sesame,
      soya: req.body.soya,
      sulphites: req.body.sulphites,
      eggs: req.body.eggs,
      lupin: req.body.lupin,
      crustacean: req.body.crustacean,
      molluscs: req.body.molluscs,
      mustard: req.body.mustard,
      celery: req.body.celery,
      fish: req.body.fish,
      diet: req.body.diet,
      menuId: req.body.id,
    },
  });

  res.json({ menuItem });
});

export default handler;

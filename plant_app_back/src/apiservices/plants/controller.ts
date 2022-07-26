import { Request, Response } from "express";
import fs from "fs";
import path from "path";

export const postPlant = async (req: Request, resp: Response) => {
  console.log("params", req.params);
  console.log("body", req.body);

  resp.json({
    ök: "ok",
  });
};

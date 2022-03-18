import { Bigtable } from "@google-cloud/bigtable";
import { getScenario } from "./scenarioSelection.js";
import { v4 as uuidv4 } from "uuid";

export const handle = async (event, context) => {
  const scenario = getScenario();
  const result = await scenario();

  const bigtable = new Bigtable();

  const instance = bigtable.instance("internet-shop-scenario-results");
  const table = instance.table("results");

  const insertData = {
    key: uuidv4(),
    data: {
      result: {
        value: result,
      },
    },
  };
  await table.insert(insertData);
};

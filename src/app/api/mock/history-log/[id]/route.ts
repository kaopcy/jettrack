import { _mockHistoryLogs } from "@/mocks/historyLog.mock";
import { delay } from "@/utils/delay";

type Params = { params: { id: string } };

export async function GET(request: Request, { params }: Params) {
  const id = params.id;
  if (!id) throw new Error("no id given to this endpoint");

  await delay(500, () => {});

  return Response.json(_mockHistoryLogs.find((el) => el.id == id));
}

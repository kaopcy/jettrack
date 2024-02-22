import { _mockHistoryLogs } from "@/mocks/historyLog.mock";
import { delay } from "@/utils/delay";

export async function GET(request: Request) {
  await delay(1000, () => {});

  return Response.json(_mockHistoryLogs);
}

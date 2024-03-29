import { _mockHistoryLogs } from "@/mocks/historyLog.mock";
import { searchInputStateSchema } from "@/types/searchInput.type";
import { delay } from "@/utils/delay";

export async function GET(request: Request) {
  await delay(1000, () => {});

  return Response.json(_mockHistoryLogs);
}

export async function POST(request: Request) {
  const body = await request.json();
  const validatedBody = searchInputStateSchema.parse(body);

  await delay(1000, () => {});

  const filtered = _mockHistoryLogs.filter(
    (log) =>
      log.lpNumber.includes(validatedBody.lpNumber || "") &&
      isDateMatch(log.dateTime, validatedBody.startDateTime, validatedBody.endDateTime),
  );

  return Response.json(filtered);
}

const isDateMatch = (exactDateString: string, startDateString?: string, endDateString?: string) => {
  const exactDate = new Date(exactDateString);
  const startDate = new Date("1000");
  const endDate = new Date("9999");

  console.log(exactDate, startDate, endDate);

  const startDatePass = exactDate >= startDate;
  const endDatePass = exactDate <= endDate;
  return startDatePass && endDatePass;
};

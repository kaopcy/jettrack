const Handler = (req: Request, res: Response) => {
  const { searchParams } = new URL(req.url);

  console.log(searchParams);
  console.log(req.url);
  console.log(req.method);
  console.log(req.body);
  console.log(`this endpoint called now: ${JSON.stringify(req)}`);
  return Response.json({
    message: "hi",
  });
};

export { Handler as GET, Handler as POST };

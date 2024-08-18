import { NextResponse } from "next/server";

export const DELETE = (req, { params }) => {
  console.log(params);
  const userId = params.id
  return NextResponse.json({
    message: "testing deleted",
  });
};

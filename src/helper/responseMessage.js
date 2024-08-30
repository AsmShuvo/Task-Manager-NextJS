import { NextResponse } from "next/server";

export const sendResponse = (msg, statusCode, successText) => {
  return NextResponse.json(
    {
      message: msg,
      success: successText,
    },
    {
      status: statusCode,
    }
  );
};

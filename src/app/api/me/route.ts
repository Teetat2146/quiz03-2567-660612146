import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Teetat yodbun",
    studentId: "660612146",
  });
};

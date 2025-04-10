import { NextResponse } from "next/server";
import * as constants from "../../../../constants";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const variable = searchParams.get("variable");

  // Ensure the variable is a string
  if (!variable) {
    return NextResponse.json({ error: "Invalid variable name." }, { status: 400 });
  }

  // Check if the variable exists in the constants file
  if (variable in constants) {
    const data = constants[variable as keyof typeof constants]; // Type-safe access
    return NextResponse.json({ data }, { status: 200 });
  } else {
    return NextResponse.json(
      { error: `Variable "${variable}" not found in constants.` },
      { status: 404 }
    );
  }
}
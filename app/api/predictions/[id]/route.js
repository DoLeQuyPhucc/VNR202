import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function GET(request, { params }) {
  try {
    const id = await params.id;
    const prediction = await replicate.predictions.get(id);

    if (prediction?.error) {
      return NextResponse.json({ detail: prediction.error }, { status: 500 });
    }

    return NextResponse.json(prediction);
  } catch (error) {
    console.error("Error fetching prediction:", error);
    return NextResponse.json(
      { detail: "Failed to fetch prediction" },
      { status: 500 }
    );
  }
}
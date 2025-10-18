import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const payload = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: {
        name,
        email,
        message,
      },
    };

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await res.text(); // get raw text / JSON

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: text },
        { status: res.status }
      );
    }
  } catch (error: unknown) {
    // Narrow the type to an Error object
    const errorMessage =
      error instanceof Error
        ? error.message
        : typeof error === "string"
        ? error
        : "Unknown server error";

    return NextResponse.json(
      {
        success: false,
        error: "Server error: " + errorMessage,
      },
      { status: 500 }
    );
  }
}

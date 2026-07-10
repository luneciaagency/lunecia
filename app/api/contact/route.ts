import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Lunecia <hello@yukihirai.in>",
      to: ["lunecia.agency@gmail.com"],
      replyTo: email,
      subject: `🚀 New Lunecia Inquiry - ${service}`,
      html: `
        <h2>New Website Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service:</strong> ${service}</p>

        <hr/>

        <p>${message}</p>
      `,
    });

    await resend.emails.send({
  from: "Lunecia <hello@yukihirai.in>",
  to: [email],
  subject: "We've received your inquiry 🚀",
  html: `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:40px;">
      <h2>Hi ${name}, 👋</h2>

      <p>
        Thank you for contacting <strong>Lunecia</strong>.
      </p>

      <p>
        We've successfully received your inquiry regarding
        <strong>${service}</strong>.
      </p>

      <p>
        Our team will review your request and get back to you within
        <strong>24 hours</strong>.
      </p>

      <br/>

      <p>
        Regards,
        <br/>
        <strong>Lunecia</strong>
      </p>
    </div>
  `,
});

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
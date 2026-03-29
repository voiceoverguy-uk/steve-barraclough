import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, postcode, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const subject = service
      ? `New Enquiry from ${name} – ${service}`
      : `New Enquiry from ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #0d1b2a;">
        <div style="background: #003da5; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Enquiry</h1>
          <p style="color: rgba(255,255,255,0.75); margin: 4px 0 0; font-size: 14px;">Steve Barraclough Heating</p>
        </div>
        <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 140px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;"><a href="mailto:${email}" style="color: #003da5;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;"><a href="tel:${phone}" style="color: #003da5;">${phone}</a></td>
            </tr>` : ""}
            ${postcode ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Postcode</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;">${postcode}</td>
            </tr>` : ""}
            ${service ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;">${service}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #ffce00; border-radius: 6px;">
            <p style="margin: 0; font-size: 13px; color: #0d1b2a; font-weight: bold;">Quick reply tip: hit Reply to respond directly to ${name} at ${email}</p>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "noreply@stevebarracloughheating.co.uk",
      to: "stevebarraclough2910@gmail.com",
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}

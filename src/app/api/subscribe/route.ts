import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/New_York",
    });

    // Send both emails in parallel
    await Promise.all([
      // Owner notification
      resend.emails.send({
        from: "PinPal <info@pinpal.app>",
        to: "paulinoandresmiguel@gmail.com",
        subject: `New Early Access Signup: ${email}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px;">
            <div style="background: #8B1538; border-radius: 12px; padding: 32px; color: white; text-align: center;">
              <h1 style="margin: 0 0 4px; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">
                New Signup!
              </h1>
              <p style="margin: 0; font-size: 14px; opacity: 0.7;">PinPal Early Access</p>
            </div>
            <div style="padding: 24px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; text-align: right; color: #8B1538;">
                    ${email}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #888; font-size: 13px;">Signed up</td>
                  <td style="padding: 12px 0; font-weight: 600; text-align: right; font-size: 13px;">${timestamp}</td>
                </tr>
              </table>
            </div>
          </div>
        `,
      }),

      // Subscriber confirmation
      resend.emails.send({
        from: "PinPal <info@pinpal.app>",
        to: email,
        subject: "Welcome to PinPal Early Access!",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 520px; margin: 0 auto; background: #ffffff;">
            <!-- Header -->
            <div style="background: #8B1538; padding: 40px 32px; text-align: center; border-radius: 0 0 24px 24px;">
              <div style="display: inline-block; background: #ffffff; border-radius: 16px; padding: 8px; margin-bottom: 16px;">
                <img src="https://pinpal.app/images/pinpal_logo.png" alt="PinPal" width="56" height="56" style="display: block; border-radius: 10px;" />
              </div>
              <h1 style="margin: 0; font-size: 28px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                You're on the list!
              </h1>
              <p style="margin: 8px 0 0; font-size: 15px; color: rgba(255,255,255,0.7);">
                PinPal Early Access
              </p>
            </div>

            <!-- Body -->
            <div style="padding: 40px 32px;">
              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #333;">
                Thanks for signing up! We're building PinPal to make bowling league management effortless, and we're excited to have you along for the ride.
              </p>
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #333;">
                Here's what to expect:
              </p>

              <!-- Feature List -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 16px; background: #FDF8EE; border-radius: 8px; margin-bottom: 8px;">
                    <span style="font-size: 16px; margin-right: 8px;">&#127923;</span>
                    <span style="font-size: 14px; color: #333; font-weight: 500;">Early access when the MVP launches</span>
                  </td>
                </tr>
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background: #FDF8EE; border-radius: 8px;">
                    <span style="font-size: 16px; margin-right: 8px;">&#128232;</span>
                    <span style="font-size: 14px; color: #333; font-weight: 500;">Updates on new features as we build them</span>
                  </td>
                </tr>
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background: #FDF8EE; border-radius: 8px;">
                    <span style="font-size: 16px; margin-right: 8px;">&#129309;</span>
                    <span style="font-size: 14px; color: #333; font-weight: 500;">Invites to beta testing when we're ready</span>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #333;">
                We'll keep you in the loop — no spam, just the good stuff.
              </p>
            </div>

            <!-- Footer -->
            <div style="padding: 24px 32px; border-top: 1px solid #eee; text-align: center;">
              <p style="margin: 0 0 4px; font-size: 13px; color: #999;">
                PinPal &mdash; League management, simplified.
              </p>
              <a href="https://pinpal.app" style="font-size: 13px; color: #8B1538; text-decoration: none;">pinpal.app</a>
            </div>
          </div>
        `,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}

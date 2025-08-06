// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, email, message } = body;

  // Validate required fields
  if (!email || !message) {
    return Response.json(
      { error: "L'email et le message sont obligatoires" },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json(
      { error: "Format d'email invalide" },
      { status: 400 }
    );
  }

  // Create transporter with better configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Beautiful HTML email template
  const emailHtml = `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background-color: #B18C45; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Nouveau message de contact</h1>
      </div>
      
      <div style="padding: 20px; border: 1px solid #e1e1e1; border-top: none;">
        <h2 style="color: #B18C45; margin-top: 0;">Informations du client</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 30%; font-weight: bold;">Nom complet</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee;">
              <a href="mailto:${email}" style="color: #B18C45; text-decoration: none;">${email}</a>
            </td>
          </tr>
       
        </table>
        
        <h2 style="color: #B18C45; margin-top: 20px;">Message</h2>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; line-height: 1.6;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
      
      <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #777;">
        <p>Ce message a été envoyé depuis le formulaire de contact du site 5P.</p>
        <p>© ${new Date().getFullYear()} 5P - Tous droits réservés</p>
      </div>
    </div>
  `;

  // Plain text version for email clients that don't support HTML
  const emailText = `
Nouveau message de contact
-------------------------

Informations du client:
- Nom complet: ${name}
- Email: ${email}


Message:
${message}

-------------------------
Ce message a été envoyé depuis le formulaire de contact du site 5P.
`;

  try {
    // Send email with better configuration
    await transporter.sendMail({
      from: `"Site 5P" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: `📩 Nouveau message de ${name || ''}`.trim(),
      text: emailText,
      html: emailHtml,
      priority: 'high'
    });

    return Response.json(
      { success: "Votre message a été envoyé avec succès. Nous vous contacterons bientôt." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return Response.json(
      { error: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}
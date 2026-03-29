import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Alle Felder sind erforderlich.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Bloom Website <noreply@bloomkinderundjugendhilfe.de>',
      to: ['info@bloomkinderundjugendhilfe.de', 'lory.p@hotmail.de'],
      replyTo: email,
      subject: `${subject} — ${name}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fdf8fd; border-radius: 16px; overflow: hidden;">
          <div style="background: #6c5585; padding: 32px; text-align: center;">
            <h1 style="color: #fff; font-size: 22px; margin: 0;">Neue Kontaktanfrage</h1>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: #6c5585; font-weight: 600; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 12px 0; color: #343139;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6c5585; font-weight: 600; vertical-align: top;">E-Mail</td>
                <td style="padding: 12px 0; color: #343139;"><a href="mailto:${email}" style="color: #6c5585;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6c5585; font-weight: 600; vertical-align: top;">Betreff</td>
                <td style="padding: 12px 0; color: #343139;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6c5585; font-weight: 600; vertical-align: top;">Nachricht</td>
                <td style="padding: 12px 0; color: #343139; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px 32px; background: #f7f2f9; text-align: center; color: #615e67; font-size: 12px;">
            Gesendet über das Kontaktformular auf bloomkinderundjugendhilfe.de
          </div>
        </div>
      `,
    });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    return res.status(500).json({ error: 'Interner Serverfehler.' });
  }
}

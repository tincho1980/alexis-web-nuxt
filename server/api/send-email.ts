// server/api/send-email.ts
import { defineEventHandler, readBody } from "h3";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    // Función para formatear la fecha
    function formatDate(date: Date) {
        return date.toLocaleString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    // Configura el transportador de nodemailer
    const transporter = nodemailer.createTransport({
        service: "gmail", // o el servicio que uses
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Configura el email
    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "Mensaje de la web de Alexis Salerno",
        text: `
          Este mensaje fue dejado en la web de Alexis Salerno:
          Mensaje enviado por: ${body.name}
          Mensaje: ${body.message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2 style="color: #333;">Mensaje de la web de Alexis Salerno</h2>
            <p><strong>Mensaje enviado por:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${body.message}</p>
            <br>
            <p>Este mensaje fue dejado en la web de Alexis Salerno el ${formatDate(new Date())}.</p>
          </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { status: "ok" };
    } catch (error: any) {
        console.error("Error al enviar el email:", error);
        return { status: "error", error: error };
    }
});

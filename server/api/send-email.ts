// server/api/send-email.ts
import { defineEventHandler, readBody } from "h3";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log(process.env.EMAIL_PASS);
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
        from: body.email,
        to: process.env.EMAIL,
        subject: "Mensaje de la web de Alexis Salerno",
        text: `
          Este mensaje fue dejado en la web de Alexis Salerno:
          Mensaje enviado por: ${body.name}
          Mensaje: ${body.message}
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

import { NextResponse } from "next/server"
import mail_transporter from "@/config/mail_options"

export const POST = async (request) => {
    try {
        const { name, surname, email, phone, message } = await request.json()

        const mail = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Contacto de ${name} ${surname}`,
            html: `
                    <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f0f8ff; padding: 20px;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                        
                        <div style="background-color: #1e3a8a; color: #ffffff; padding: 16px 20px;">
                        <h2 style="margin: 0; font-size: 20px;">
                            Nuevo mensaje de contacto
                        </h2>
                        </div>

                        <div style="padding: 20px; color: #1f2937;">
                        <p style="margin-top: 0; font-size: 14px;">
                            Recibiste un nuevo mensaje desde el formulario de contacto:
                        </p>

                        <div style="background-color: #f8fbff; border: 1px solid #dbeafe; border-radius: 6px; padding: 15px; margin: 16px 0;">
                            <p style="margin: 0 0 8px 0;"><strong>Nombre:</strong> ${name} ${surname}</p>
                            <p style="margin: 0 0 8px 0;"><strong>Email:</strong> ${email}</p>
                            <p style="margin: 0;"><strong>Teléfono:</strong> ${phone}</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <p style="margin-bottom: 8px;"><strong>Mensaje:</strong></p>
                            <p style="margin: 0; background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 12px; border-radius: 4px;">
                            ${message}
                            </p>
                        </div>
                        </div>

                        <div style="background-color: #e0f2fe; text-align: center; padding: 12px; font-size: 12px; color: #0369a1;">
                        Formulario de contacto • ${new Date().getFullYear()}
                        </div>

                    </div>
                    </div>
                `
            }


        await mail_transporter.sendMail(mail)

        return NextResponse.json({ message: "Mensaje enviado con exito" }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
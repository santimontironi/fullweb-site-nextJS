import { NextResponse } from "next/server"
import mail_transporter from "@/config/mail_options"

export const POST = async (request) => {
    try{
        const {name, surname, email, phone, message} = await request.json()

        const mail = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Contacto de ${name} ${surname}`,
            html: `<p>Telefono: ${phone}</p><p>${message}</p>`
        }

        await mail_transporter.sendMail(mail)

        return NextResponse.json({message: "Mensaje enviado con exito"}, {status: 200})
    }
    catch(error){
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
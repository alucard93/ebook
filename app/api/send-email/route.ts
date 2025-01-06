import { Resend } from 'resend'
import { EmailTemplate } from '@/app/_components/EmailTemplate'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    // Desestruturando os novos campos
    const { name, phone, corporateEmail, supermarket } = await req.json()

    // Enviando o e-mail com os novos dados
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'marcus.vinicius@peopleinteractive.com.br',
      subject: `Nova mensagem de ${name}`,
      react: EmailTemplate({
        name,
        phone,
        corporateEmail,
        supermarket,
      }),
    })

    if (error) {
      return NextResponse.json(error, { status: 400 })
    }

    return NextResponse.json({ message: 'E-mail enviado com sucesso!', data })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao enviar o e-mail' },
      { status: 500 }
    )
  }
}

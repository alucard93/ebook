import * as React from 'react'

interface EmailTemplateProps {
  name: string
  phone: string
  corporateEmail: string
  supermarket: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  phone,
  corporateEmail,
  supermarket,
}) => (
  <div
    style={{
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
    }}
  >
    <h1 style={{ color: '#0070f3' }}>Olá, {name}!</h1>
    <p>Você recebeu uma nova mensagem através do formulário de contato:</p>

    <p>
      <strong>Nome:</strong> {name}
    </p>
    <p>
      <strong>Telefone:</strong> {phone}
    </p>
    <p>
      <strong>E-mail Corporativo:</strong> {corporateEmail}
    </p>
    <p>
      <strong>Supermercado:</strong> {supermarket}
    </p>

    <hr />

    <p style={{ fontSize: '12px', color: '#555' }}>
      Esta mensagem foi enviada através do formulário de contato.
    </p>
  </div>
)

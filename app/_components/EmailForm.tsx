'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import SuccessModal from './mobile/SuccessModal'
import { useState } from 'react'

const EmailForm = () => {
  const [isModalVisible, setModalVisible] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      corporateEmail: '',
      supermarket: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Nome é obrigatório'),
      phone: Yup.string()
        .matches(/^\d+$/, 'Telefone deve conter apenas números')
        .required('Telefone é obrigatório'),
      corporateEmail: Yup.string()
        .email('E-mail corporativo inválido')
        .required('E-mail corporativo é obrigatório'),
      supermarket: Yup.string().required('Nome do supermercado é obrigatório'),
    }),
    onSubmit: async (values, { resetForm }) => {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        setModalVisible(true)
        resetForm()
        window.open('/Ebook_Potencial_AI_Supermercados.pdf', '_blank')
      } else {
        alert('Erro ao enviar o e-mail.')
      }
    },
  })

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className=" space-y-1 lg:space-y-4 p-4 max-w-80 mx-auto"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-normal lg:text-[#F2F2F2] mb-2"
          >
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="block w-full p-2 bg-gray-rgba lg:border lg:border-gray-300 rounded-[10px] lg:bg-white"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-normal lg:text-[#F2F2F2] mb-2"
          >
            Telefone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            className="block w-full p-2 bg-gray-rgba lg:border lg:border-gray-300 rounded-[10px] lg:bg-white"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.phone}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="corporateEmail"
            className="block text-sm font-normal lg:text-[#F2F2F2] mb-2"
          >
            E-mail Corporativo
          </label>
          <input
            id="corporateEmail"
            name="corporateEmail"
            type="email"
            className="block w-full p-2 bg-gray-rgba lg:border lg:border-gray-300 rounded-[10px] lg:bg-white"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.corporateEmail}
          />
          {formik.touched.corporateEmail && formik.errors.corporateEmail ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.corporateEmail}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="supermarket"
            className="block text-sm font-normal lg:text-[#F2F2F2] mb-2"
          >
            Nome do Supermercado
          </label>
          <input
            id="supermarket"
            name="supermarket"
            type="text"
            className="block w-full p-2 bg-gray-rgba lg:border lg:border-gray-300 rounded-[10px] lg:bg-white"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.supermarket}
          />
          {formik.touched.supermarket && formik.errors.supermarket ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.supermarket}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full h-14 font-bold bg-[#F44]  text-white p-2 !mt-6 md:bg-customGray"
        >
          Baixar e-book
        </button>
      </form>
      {/* Modal de Sucesso */}
      <SuccessModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  )
}

export default EmailForm

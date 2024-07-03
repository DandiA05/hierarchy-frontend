'use client'

import AsyncSelectForm from '@components/atoms/Form/AsyncSelectForm'
import InputForm from '@components/atoms/Form/InputForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { IOptions } from '@interfaces/listInterfaces'
import { GetListBarangs, GetListNegaras, GetListPelabuhans } from '@services/api/api'
import formatCurrency from '@utils/helper/Currency'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  columns: Yup.array().of(Yup.object().shape({})),
})
export default function Home() {
  const [optionNegara, setOptionNegara] = useState<IOptions[]>([])
  const [optionPelabuhan, setOptionPelabuhan] = useState<IOptions[]>([])
  const [optionBarang, setOptionBarang] = useState<any[]>([])

  const { control, watch, setValue, resetField } = useForm<any>({
    mode: 'all',
  })

  const { pelabuhan, negara, barang } = watch()

  const getNegara = async () => {
    try {
      const response = await GetListNegaras()
      const result: IOptions[] = []
      response.data.forEach((item: any) => {
        const data = {
          label: `${item.kode_negara} - ${item.nama_negara}`,
          value: item.id_negara,
        }
        result.push(data)
      })
      setOptionNegara(result)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const getPelabuhan = async (id: number) => {
    try {
      const response = await GetListPelabuhans(id)
      const result: IOptions[] = []
      response.data.forEach((item: any) => {
        const data = {
          label: item.nama_pelabuhan,
          value: item.id_pelabuhan,
        }
        result.push(data)
      })
      setOptionPelabuhan(result)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const getBarang = async (id: number) => {
    try {
      const response = await GetListBarangs(id)
      const result: any[] = []
      response.data.forEach((item: any) => {
        const data = {
          label: `${item.id_barang} - ${item.nama_barang}`,
          value: item.id_barang,
          harga: item.harga,
          diskon: item.diskon,
          description: item.description,
        }
        result.push(data)
      })
      setOptionBarang(result)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    getNegara()
  }, [])

  useEffect(() => {
    if (negara?.value) {
      getPelabuhan(negara.value)
    }
  }, [negara])

  useEffect(() => {
    if (pelabuhan?.value) {
      getBarang(pelabuhan.value)
    }
  }, [pelabuhan])

  useEffect(() => {
    if (barang?.value) {
      setValue('diskon', barang?.diskon)
      setValue('harga', formatCurrency(barang?.harga))
      setValue('total', formatCurrency(calculateTotal(barang?.harga, barang?.diskon)))
    }
  }, [barang])

  const calculateTotal = (harga: number | undefined, diskon: number | undefined) => {
    if (harga === undefined || diskon === undefined) return 0
    const total = harga - (diskon / 100) * harga
    return total
  }

  return (
    <div className="flex flex-1 justify-center items-center ">
      <div className="container mx-auto px-16 ">
        <div className=" bg-white p-10">
          <form className="flex flex-col gap-8">
            <AsyncSelectForm
              label="Negara"
              defaultValue={[]}
              placeholder="- Pilih Negara -"
              control={control}
              data={optionNegara}
              htmlFor="negara"
              name="negara"
            />

            <AsyncSelectForm
              isDisabled={!negara}
              label="Pelabuhan"
              defaultValue={[]}
              placeholder="- Pilih Pelabuhan -"
              control={control}
              data={optionPelabuhan}
              htmlFor="pelabuhan"
              name="pelabuhan"
            />

            <AsyncSelectForm
              isDisabled={!pelabuhan}
              label="Barang"
              defaultValue={[]}
              placeholder="- Pilih Barang -"
              control={control}
              data={optionBarang}
              htmlFor="barang"
              name="barang"
            />

            {barang && (
              <div className="bg-secondary p-6">
                <p>{barang?.description}</p>
              </div>
            )}

            <InputForm
              leftComponent={<p>%</p>}
              readOnly
              control={control}
              htmlFor="diskon"
              name="diskon"
              placeholder=""
              label="Diskon"
              defaultValue={'-'}
            />
            <InputForm
              readOnly
              control={control}
              htmlFor="harga"
              name="harga"
              placeholder=""
              label="Harga"
              defaultValue={formatCurrency(0)}
            />
            <InputForm
              readOnly
              control={control}
              htmlFor="total"
              name="total"
              placeholder=""
              label="Total"
              defaultValue={formatCurrency(0)}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

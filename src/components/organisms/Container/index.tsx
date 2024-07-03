import Header from '@components/molecules/Header'
import ContainerProvider from '../Provider'

export default function Container({ children }: { readonly children: React.ReactNode }) {
  return (
    <ContainerProvider>
      <section className="bg-secondary h-screen w-screen fixed">
        <Header />
        <div className="flex flex-row h-[92vh]">
          <div className="px-5 py-5 flex-1 overflow-auto ">{children}</div>
        </div>
      </section>
    </ContainerProvider>
  )
}

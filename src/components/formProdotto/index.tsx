import { ConfiguraProdotto } from "./ConfiguraProdotto"
import { TabellaProdotto } from "./TabellaProdotto"

export const FormProdotto = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <ConfiguraProdotto />
      <TabellaProdotto />
    </div>
  )
}

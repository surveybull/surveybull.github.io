import React from 'react'
import IntegrationIntro from './IntegrationIntro'
import Steps from './Steps'
import Tabs from './Tabs'

const integrations = () => {
  return (
    <>
      <section className="bg-[url('./assets/gif/Pricing.gif')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 pt-[3rem] mx-auto">
          <IntegrationIntro />
        </div>
      </section>

      <section className="bg-[url('./assets/background/CalculatorBg.jpg')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 mx-auto" id="">
          <Tabs />
        </div>
      </section>
    </>
  )
}

export default integrations
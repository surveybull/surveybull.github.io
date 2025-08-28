import React from 'react'
import IntegrationIntro from './IntegrationIntro'
import Steps from './Steps'
import Tabs from './Tabs'
import SEO from "../SEO";

const integrations = () => {
  return (
    <>
      <SEO
        name={"SurveyBull"}
        title={"SurveyBull Integrations - Connect with Different Tools"}
        type={"Article"}
        description={"Connect SurveyBull with your favorite tools including Airtable, Google Sheets, Notion, and Slack. Automate workflows, share insights, and maximize survey impact with seamless integrations."}
      />

      <div id="Integrations">
        <section>
          <div className="xl:max-w-[1300px] p-7 pt-[3rem] mx-auto">
            <IntegrationIntro />
          </div>
        </section>

        <section className="bg-[url('./assets/background/CalculatorBg.jpg')] bg-cover bg-repeat-round">
          <div className="xl:max-w-[1300px] p-7 mx-auto" >
            <Tabs />
          </div>
        </section>
      </ div>
    </>
  )
}

export default integrations
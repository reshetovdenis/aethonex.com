import React, {useEffect} from 'react'
import Head from 'next/head'
// import Custom Components
import Header from './layouts/sections/aethonex/header'
import BannerSection from './layouts/sections/aethonex/banner'
import ServicesSection from './layouts/sections/aethonex/services'
import AboutSection from './layouts/sections/aethonex/about'

import FooterSection from './layouts/sections/slonigiraf/footer'

const Home = () => {
 
  useEffect(() => {
    document.body.style.setProperty('--primary', '#357fef')
    document.body.style.setProperty('--secondary', '#4e4e4e')
    document.body.style.setProperty('--light', '#13B8EA')
    document.body.style.setProperty('--dark', '#4E56F3')
  })

  return (
    <div>
      <Head>
        <title>Aethonex</title>
      </Head>

      <Header className="app1" />

      <BannerSection />

      {/* <ServicesSection />

      <AboutSection />

      <FooterSection /> */}

    </div>

  )
}

export default Home

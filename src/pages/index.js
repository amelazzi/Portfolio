import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import HomeSection from '../components/home/section'
import AboutSection from '../components/about/section'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <HomeSection/>
        <AboutSection/>
  </Layout>
)

export default IndexPage

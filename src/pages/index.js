import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import HomeSection from '../components/home/section'
import MyProjects from '../components/projects/section'
import ContactSection from '../components/contact/section'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <HomeSection/>
        <MyProjects/>
        <ContactSection/>
  </Layout>
)

export default IndexPage

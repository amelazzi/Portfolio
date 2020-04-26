import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import HomeSection from '../components/home/section'
import AboutSection from '../components/about/section'
import SkillsSection from '../components/skills/section'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <HomeSection/>
        <AboutSection/>
        <SkillsSection/>
  </Layout>
)

export default IndexPage

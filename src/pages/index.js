import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import HomeSection from '../components/home/section'
import SkillsSection from '../components/skills/section'
import ExperiencesSection from '../components/experiences/section'
import MyProjects from '../components/projects/section'
import EventsSection from '../components/events/section'
import ContactSection from '../components/contact/section'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <HomeSection/>
        <ExperiencesSection/>
        <SkillsSection/>
        <MyProjects/>
        <EventsSection/>
        <ContactSection/>
  </Layout>
)

export default IndexPage

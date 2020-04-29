import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import HomeSection from '../components/home/section'
import AboutSection from '../components/about/section'
import SkillsSection from '../components/skills/section'
import ExperiencesSection from '../components/experiences/section'
import EducationSection from '../components/education/section'
import EventsSection from '../components/events/section'
import ReviewsSection from '../components/reviews/section'
import ContactSection from '../components/contact/section'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <HomeSection/>
        <AboutSection/>
        <SkillsSection/>
        <ExperiencesSection/>
        <EducationSection/>
        <EventsSection/>
        <ReviewsSection/>
        <ContactSection/>
  </Layout>
)

export default IndexPage

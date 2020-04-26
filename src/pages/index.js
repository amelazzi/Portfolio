import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

import HomeSection from '../components/home/section'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <HomeSection/>
  </Layout>
)

export default IndexPage

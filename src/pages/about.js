import React from "react"
import Button from "../components/button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import styled from "styled-components"
import {Box} from "rebass"

const Container = styled(Box)({
	fontFamily: "Arvo, serif",
	display: "flex",
	flexDirection: "row",
	maxWidth: "1200px",
	margin: "0 auto",
	height: "auto",
	width: "1 1/2",
	flexWrap: "wrap",
	justifyContent: "space-around",
})

const About = () => (
  <Layout>
  <Container>
    <SEO title="About" />
    <h1>About</h1>
<Button>Hello</Button>	
	<Card primary>About</Card>
  </Container>
  </Layout>
)

export default About
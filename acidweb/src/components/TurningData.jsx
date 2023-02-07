import { Container } from "./styles/LandingTurningData/MainContainer.styled"
import { RightContent } from "./styles/LandingTurningData/RightContent.styled"
import { LeftContent } from "./styles/LandingTurningData/LeftContent.styled"

function TurningData() {
  return (
    <Container>
        <LeftContent>
            <h1>
            Turning data into opportunities
            </h1>
            <p>
            We develop innovative solutions for companies, using data to create unique insights and tools that bring value, growth and prosperity to their businesses.
            </p>
        </LeftContent>
        <RightContent>
        <img src="public/data.jpg">
        </img>
            
        </RightContent>
    </Container>
  )
}
export default TurningData
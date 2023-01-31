import { Container } from './styles/LandingUS/LandingUsContainer.styled'
import { LeftImage } from './styles/LandingUS/LeftImage.styled'
import { RightContent } from './styles/LandingUS/RightContent.styled'

import IdeaUS from '../assets/IdeaUS.jpg'
import { MeetYourButton } from './styles/LandingUS/MeetYourButton.container'

export default function Inovation() {
  return (
    <Container>
      <LeftImage >
        <img src={IdeaUS} alt="" />

        <img src={IdeaUS} /* type={zIndex = 1} */ />
      </LeftImage>
      <RightContent>
        <h1>Inovation</h1>
        <h2>drives us</h2>
        <p>Innovation is the heart of everything we do: we explore safely, and create the high-performance tools that help build a brighter future.</p>
        <MeetYourButton>
          Meet your partner
        </MeetYourButton>
      </RightContent>

    </Container>
  )
}
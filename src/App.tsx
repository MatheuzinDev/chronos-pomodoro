import "./styles/theme.css"
import "./styles/global.css"
import { Container } from "./components/Container/Container"
import { Heading } from "./components/Heading/Heading"
import { Logo } from "./components/Logo/Logo"


export function App() {
    return (
        <>

            <Container>
                <Logo />
            </Container>

            <Container>
                <Heading>Menu</Heading>
            </Container>
        </>
    )
}

import "./styles/theme.css"
import "./styles/global.css"
import { Container } from "./components/Container/Container"
import { Menu } from "./components/Menu/Menu"
import { Logo } from "./components/Logo/Logo"
import { CountDown } from "./components/CountDown/CountDown"


export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>
        </>
    )
}

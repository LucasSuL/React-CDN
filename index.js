function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" alt="React Logo" className="nav-logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}


function Footer() {
    return (
        <footer className="footer">
            <small>&copy; 2023 Lucas Su development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div className="main-content">
            <h1>I love React!!!</h1>
            <ol>
                <li>it's popular</li>
                <li>land me a job</li>
                <li>convenient to use</li>
            </ol>
        </div>
    )

}
function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const container = document.getElementById("root")
ReactDOM.render(<Page />, container)

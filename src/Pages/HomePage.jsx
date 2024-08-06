import Header from "../Components/Header";
import Dashboard from "./Dashboard";
import "../Pages/homePage.css"

const HomePage = () => {
    return(
        <div className="homePage">
            <Header />
            <Dashboard />
        </div>
    )
}

export default HomePage;
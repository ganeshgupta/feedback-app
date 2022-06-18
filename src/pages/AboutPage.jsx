import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'


function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>This is Feedback Portal </p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to="/">Go-to Home Page</Link>
            </p>
        </div>
    </Card>
  )
}
export default AboutPage
import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>This is Feedback Portal </p>
            <p>Version: 1.0.0</p>
            <p>
                <a href="/">Goto Home Page</a>
            </p>
        </div>
    </Card>
  )
}
export default AboutPage
import Card from '../components/shared/Card'

const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About This App</h1>
        <p>This is about live feedback application, to demonstrate routing</p>
        <p>Version: 1.0.0</p>

        <p>
          <a href="/">Back Home</a>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage

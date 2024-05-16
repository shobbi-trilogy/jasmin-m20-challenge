import streamer from "../../assets/streamer.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Portfolio() {
  const projects = [
    {
      "title": "Music Streamer",
      "description": "An online music streaming platform",
      "link": "https://github.com/J-0987/Project2-MusicStreamer.git",
      "GitHub": "https://github.com/J-0987/Project2-MusicStreamer.git",
      "image": "/assets/streamer.jpg"
    },
    {
      "title": "Refactor",
      "description": "Creating clean code is an essential skill that enhances collaboration. Refactor is a project focused on the implementation of smenatic HTML and CSS",
      "link": "https://j-0987.github.io/Challenge-01/",
      "GitHub": "https://github.com/J-0987/Challenge-01.git",
      "image": "/assets/clean.jpg"
    },
    {
      "title": "Blogger's Thoughts",
      "description": "Bloggers Thoughts is a blog powered by Javascript, CSS, and HTML.",
      "link": "https://j-0987.github.io/challenge-module4/",
      "GitHub": "https://github.com/J-0987/challenge-module4.git",
      "image": "/assets/thoughts.jpg"
    },
    {
      "title": "ReadComplete",
      "description": "ReadComplete is a CLI tool that enables the generation of a custom ReadMe based on user input.",
      "link": "https://github.com/J-0987/readmeGenerator.git",
      "GitHub": "https://github.com/J-0987/readmeGenerator.git",
      "image": "/assets/readme.jpg"
    },
    {
      "title": "SVGenerate",
      "description": "SVGenerate generates custom SVG logos based on user input. ",
      "link": "https://github.com/J-0987/SVGenerate.git",
      "GitHub": "https://github.com/J-0987/SVGenerate.git",
      "image": "/assets/svg.jpg"
    },
    {
      "title": "Early Beginnings",
      "description": "An online portfolio that represents one person's humble beginnings in learning to code",
      "link": "https://github.com/J-0987/Project2-MusicStreamer.git",
      "GitHub": "https://j-0987.github.io/challenge-02/",
      "image": "./assets/begin.jpg"
    }
  ];
  return (
    <div className="mb-5 pb-5">
      <header>
        <h1>PORTFOLIO</h1>
      </header>

      <main className="d-flex flex-wrap gap-3 mb-3 pb-3">
        {projects.map((project, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
              <Button  className="m-1 p-1" variant="primary"><a className="text-white" target="_blank" href = {project.link}>Project Demo</a></Button>
              <Button className="m-1 p-1" variant="primary"><a className="text-white" target="_blank" href = {project.GitHub}>GitHub</a></Button>
            </Card.Body>
          </Card>

        ))}


      </main>

    </div>


  )
}

{/* <div class="card" style="width: 18rem;">
  <img src={streamer} class="card-img-top" alt="leaf"/>
  <div class="card-body">
    <h5 class="card-title">Streamer</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://github.com/J-0987/Project2-MusicStreamer.git" class="btn btn-primary">Learn More</a>
  </div>
</div> */}
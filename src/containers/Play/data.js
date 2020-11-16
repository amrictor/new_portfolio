
import versed1 from '../../resources/images/versed1.gif';
import versed2 from '../../resources/images/versed2.png';
import versed3 from '../../resources/images/versed3.png';
import versed4 from '../../resources/images/versed4.png';
import versed5 from '../../resources/images/versed5.png';

import wordsmyth1 from '../../resources/images/wordsmyth1.gif';
import wordsmyth2 from '../../resources/images/wordsmyth2.png';

import carving from '../../resources/images/carving.gif';
import brushonoff from '../../resources/images/brushonoff.gif';
import brushsize from '../../resources/images/brushsize.gif';
import rotate from '../../resources/images/rotate.gif';
import hci_report from '../../resources/documents/CS464FinalReport.pdf';

import anim1024 from '../../resources/images/anim1024.gif';

import congo from '../../resources/images/congogameplay.gif';
import poem1 from '../../resources/images/poem1.png';
import poem2 from '../../resources/images/poem2.png';
import waves from '../../resources/images/waves.gif';
import swaying from '../../resources/images/swaying.gif';
import hexes from '../../resources/images/hexes.gif';
import trip_planner from '../../resources/images/trip_planner.gif';

const data = [
  {
    images: [{src: versed1, alt:"versed"},{src: versed2, alt:"versed"},{src: versed3, alt:"versed"},{src: versed4, alt:"versed"},{src: versed5, alt:"versed"}], 
    title: "Versed", 
    link: "https://versed.amrictor.com",
    github: "https://github.com/amrictor/versed",
    description: 
      <div>
        Versed is a remarkably niche pet project of mine that I’ve revisited many times over the years—the first time I wrote it used Java and a Swing interface. I was a freshman in college learning to code for the first time and knew nothing of...almost anything. This first draft was locally installed, completely offline, and required the user to upload proprietary lyrics files to cultivate their own libraries. Education is a marvelous thing.
        <br/><br/>
        The idea for the game is based on a subset of online quizzes that a couple of friends of mine played obsessively in high school (and still pull out from time to time). Basically, people on <a href='https://www.sporcle.com/'>Sporcle</a> would paste lyrics, word by word, into a quiz which they would then post without the name of the song (but sometimes with the name of the album or franchise). The goal here is for a player to begin the quiz without knowing the song they’re playing and to slowly figure it out by guessing decreasingly common words. <a href='https://www.sporcle.com/games/PenguinsMeercats/picture-the-song-ii'>Here</a> <a href='https://www.sporcle.com/games/cwfuturewrestler/guess-the-lyrics-xxviii'>are</a> <a href='https://www.sporcle.com/games/108292/guess-the-lyrics-to-this-hamilton-song'>a</a> <a href='https://www.sporcle.com/games/RingoHarrison/guess-the-lyrics-beatles-edition'>couple</a> <a href='https://www.sporcle.com/games/Damnnis/guess-the-lyrics-to-this-disney-song'>of</a> <a href='https://www.sporcle.com/games/cwfuturewrestler/guess-the-lyrics-xvii'>examples</a>.
        <br/><br/>
        After establishing myself through a couple of more intensive front-end and full stack projects, I returned to this idea with a serverless React app and incorporated the Genius API to eliminate the burden of adding lyrics in by hand. It’s a fun, if silly, little game, and what really matters is that those friends from high school have switched over from Sporcle and the page has a small but dedicated user base of like three people.
      </div>,
  }, 
  {
    images:[
      {src: carving, alt:"subtractive art"}, 
      {src: brushonoff, alt:"subtractive art"}, 
      {src: brushsize, alt:"subtractive art"}, 
      {src: rotate, alt:"subtractive art"}
    ], 
    title: "Subtractive Art in Virtual Reality", 
    github: "https://github.com/csu-hci-projects/Subtractive_Art-v1.0",
    report: hci_report,
    description: 
      <div>
        This was one of the most fun and unique projects I ever did for a class. With a team of two other students, I developed a new way to do art in virtual reality. As we contemplated existing applications, we realized that most virtual art mediums were additive rather than subtractive, e.g. you start with nothing and add to it, rather than starting with something and carving away the excess. The goal of this project was to study how people interface with virtual reality, and the comfort level of using it for making 3D art, so we conducted a study comparing our system to a physical form of subtractive art; all of our test subjects were asked to carve something out of soap, as well as in our application.
        <br/><br/>
        The application itself was developed in Unity using C#. The medium which users carved was made up of voxels and optimized using a chunk system. My contributions to this project were mostly in the area of the actual user's experience. I designed what I hoped were the most comfortable and intuitive interactions with which to control the voxel block and the “brush” the users were using to carve from it. I also designed and set up the studio environment where the entire virtual experience takes place.
      </div>
  }, 
  {
    images: [{src: anim1024, alt:"raytracer"}], 
    title: "Ray Tracing Engine", 
    github: "https://github.com/amrictor/ray-tracer",
    description: 
      <div>
        I am not Linear Algebra's biggest fan, but this project was still very, very cool and I probably had just as much fun as frustration while working on it. I was able to develop a recursive ray tracing engine in C++ with the capability to render images and animations of transform-able objects (.obj format) and spheres in 3D space. While I can’t and won’t brag over any cool optimizations or fancy shadows or soft lighting, I will say I probably learned more from this project, from beginning to end, than I have from any other.
      </div>
  }, 
  {
    images: [{src: wordsmyth1, alt:"wordsmyth"}, {src: wordsmyth2, alt:"wordsmyth"}], 
    title: "Wordsmyth", 
    link: "https://wordsmyth.amrictor.com",
    github: 'https://github.com/amrictor/wordsmyth-2.0',
    description: 
      <div>
        Wordsmyth is another project of mine which has had many iterations, some of which were written long before I had the tools or skills to make the game work. The current version of the game is probably best described as “kinda like a Jackbox game?”, but it’s actually based on a 1998 board game called “Wise and Otherwise” that I got for my twelfth birthday and has since faded from the public eye.
        <br/><br/>
        The game follows a pretty standard party game structure; each round, there is a player acting in the role of a judge. The judge chooses from a list of obscure but real proverbs from around the world and the quote is broken in half. The first half is displayed to the rest of the players, who must write their own versions of the quote’s end. After all the responses are in, players vote on which of their friends’ quotes might be the real one and points are awarded for guessing correctly, or for tricking other players.
        <br/><br/>
        The server for this one is written in Java and uses Websockets to communicate securely with the React client. Most of the server logic can be described with a fairly simple state machine. To collect quotes, I found a few sources and wrote a couple of Python programs to scrape thousands of proverbs off the web. I’m still hand picking and processing the scraped quotes and updating the game as I work through them.
      </div>
  }, 
  {
    images: [{src: poem1, alt:"linguistics"}, {src: poem2, alt:"linguistics"}], 
    title: "Linguistics and Text Prediction", 
    github: 'https://github.com/amrictor/MachineLearningFinal',
    report: 'https://nbviewer.jupyter.org/github/amrictor/MachineLearningFinal/blob/master/FinalProject/RictorProjectReport.ipynb',
    description: 
      <div>
        I’ve worked on so many projects involving text generation that it’s easier to just talk about them in one place. I’ve spent time on similar writing-focussed projects using a number of methods ranging from Markov Chains to recurrent neural networks, for a number of purposes ranging from writing poetry, to generating Spongebob episodes, to impersonating a professor on Twitter.
        <br/><br/>
        As a literature geek and a writer, one of the ideas I’ve loved the most during my journey as a software developer, is of creating new stories and poetry with code. I often use the output of such processes as the basis for new “original” work through redaction or simple inspiration.    
      </div>
  }, 
  {
    images: [{src: congo, alt:"congo"}], 
    title: "Congo Online", 
    github: 'https://github.com/cs414-byte-mechanics/cs414-f19-001-ByteMechanics',
    description: 
      <div>
        Congo is an offshoot of chess that uses jungle animals as pieces. Many of the rules are similar, though the board layout differs slightly from what chess players may be used to, with a river and other special areas on the board that have their own rules for the pieces residing inside them. 
        <br/><br/>
        Congo Online is a virtualization of this chess game that features a complete user registration system using a MySQL database to store users, invites, and game history. A Java server is responsible for validating moves and handling client communication via websockets. I developed this project as a part of a team of five using the Agile method for an Object Oriented Design course at Colorado State University. 
      </div>
  }, 
  {
    images: [{src: hexes, alt:"design"}, {src: swaying, alt:"design"}, {src: waves, alt:"design"}], 
    title: "Programatic background design", 
    description: 
      <div>
        As fun and useful as interactive content is, I really love experimenting with Javascript, HTML, and CSS as a purely visual medium and limiting myself to those tools to see what I can create without outside assets. Though I could often end up at roughly the same result with less pain or in a more efficient way, I take pleasure in the challenge and in the results I can produce.
      </div>
  },
  {
    images: [{src: trip_planner, alt:"trip planner"}], 
    title: "Trip Planner", 
    github: 'https://github.com/amrictor/trip-planner',
    description: 
      <div>
        While a little dated at this point, I still cherish this project as my first full stack project and my first exposure to web development. I worked with a team of other students to develop a trip planning service that allows users to design, visualize, and save trips between locations worldwide and available to search and choose from.
        <br/><br/>
        This project used a RESTful Java server, MySQL database, and a ReactJS client and was developed using the Agile method for a Software Engineering course at Colorado State University.
      </div>
  }
]

export default data;
import Music2MeImage from '../../../img/Screenshot 2024-06-05 203021.png';
import BudgeItImage from '../../../img/Screenshot 2024-06-05 203903.png';
// import MysteryBox from '../../../img/MysteryBox.jpg';

export default function Home() {
  return (
    <div>
      <h1>My Projects</h1>
      <p>These are some of the projects I have been a part of. By clicking on the images, you will be sent over to the github repository where the code is stored.</p>
      <h2>
        <a href="https://github.com/Al3xG23/Budge_It?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
          <img src={Music2MeImage} alt="picture of the website logo, BudgeIt, beginning with a stack of cash with wings and the website name in blue."></img>
          </a>
          </h2>
      <p>
        
        This was my first project created with three others programmers, Mariel, Yan, and Travez. It was a simple application where a user would be able to search up a song, gaining access to its lyrics, basic
        information about the song, some links, and the capability to add comments on the songs for their personal use. This web application uses HTML, CSS, Javascript, and API usage.
        
      </p>
      <h2>
        <a href="https://github.com/fairleyv/Music2Me" target="_blank" rel="noopener noreferrer">
        <img src={BudgeItImage} alt="picture of the website logo, Music2Me, with green background and blue letters."></img>
        </a>
        </h2>
      <p>
        This was my second project created by the same talented individuals and myself. The web application was called BudgeIt and it was a web application that would allow a user to create
        an account to store their bills and other information. By adding in their bills and storing it within the MYSQL server, they would be able to tell when and how much they would
        need to spendeach month. This application was created with HTML, CSS, Javascript, The javascript FullCalendar, and MYSQL. 
      </p>
      <h2>Third Project: To Be Continued...
      {/* <img src={MysteryBox} alt="picture of a mysterious unknown box."></img> */}
      </h2>
      <p>
        I am currently working on my third web application project and it will soon be ready in a few days. Stay tuned to see it. 
      </p>
    </div>
  );
}

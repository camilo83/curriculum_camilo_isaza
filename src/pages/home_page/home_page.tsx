import './home_page.scss';

export default function HomePage() {
  return (
    <main>
      <div className="personal-info">
        <img src="/Foto_camilo.jpg" alt="Imágen of Camilo Isaza" />
        <h2>Camilo Isaza Gómez</h2>
        <h3>Administrative Engineer</h3>
        <h3>Full Stack Developer</h3>
        <p>Telephone: 300 3361274</p>
        <p>Living in Medellín - Colombia, open to work Worldwide</p>
      </div>
      <div className="professional-profile">
        <p>
          My name is Camilo Isaza, a graduate in Administrative Engineering from
          the Universidad EIA. My professional journey began at Groupe Seb
          Andean, where, after more than two years, I discovered my passion for
          software development and programming. This passion led me to acquire
          technical skills through courses in Python, SQL, and HTML, culminating
          in my participation in a bootcamp in Spain recognized as the best in
          the world for full stack web development in 2021. This path not only
          solidified my passion for technology but also confirmed my dedication
          and ability to adapt and grow in new and challenging fields.
        </p>
        <p>
          In addition to my technical training in programming, my education in
          Administrative Engineering has endowed me with critical skills in
          management, finance, accounting, and advanced Excel proficiency. These
          administrative competencies make me a comprehensive professional,
          capable of understanding and contributing to both the technical and
          administrative aspects of projects, providing a holistic approach that
          efficiently combines resource management with technological
          development.
        </p>
        <p>
          My characteristics include logical-mathematical ability, resilience,
          commitment, discipline, and a skill for teamwork, always striving to
          exceed expectations. Outside of the professional realm, I enjoy
          exploring new cultures and places, am a sports enthusiast, especially
          football, and have a passion for music.
        </p>
        <p>
          This unique combination of technical and administrative skills enables
          me to tackle complex challenges with a comprehensive perspective,
          promoting a balance between technological innovation and strategic
          management. My professional path reflects a constant commitment to
          learning and adaptation, values that I consider fundamental in the
          technological field. I am particularly excited about the opportunity
          to delve further into technological projects, where my passion and
          priority can serve to drive the development and implementation of
          innovative solutions.
        </p>
      </div>
      <div className="experiencie">
        Professional Experience:
        <ul>
          <li>
            <div>
              <h4>Freelance Developer</h4>
              <p>Independent Application Developer (see projects)</p>
              <p>December 2023 - present</p>
              <ul>
                <li>Superkaskos Web Page now Online.</li>
                <li>Currently working for another marketing Web Page.</li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <h4>Groupe Seb Andean</h4>
              <p>Financial Controller</p>
              <p>December 2021 - September 2023</p>
              <ul>
                <li>Budgeting and adjustments.</li>
                <li>Analysis and control of expenses and costs.</li>
                <li>Training and support within the company to other areas.</li>
                <li>
                  Constant and good communication with all areas of the company.
                </li>
                <li>Expert use of Excel and PowerPoint.</li>
                <li>Professional use of Agile, SAP, QlikView, and Power BI.</li>
                <li>Working online with people from all over the world.</li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <h4>Internship in Groupe Seb Andean</h4>
              <p>Financial Controller</p>
              <p>July 2021 - December 2021</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="Education">
        Education:
        <ul>
          <li>
            <h4>ISDI CODERS</h4>
            <p>Full Stack Development</p>
            <p>
              `September 2023 - December 2023 (More than 1000 hours of
              programming (13 face-to-face weeks + 8 weeks online).)`
            </p>
          </li>
          <li>
            <h4>Universidad EIA (escuela de ingeniería de Antioquia)</h4>
            <p>Bachelor in Administrative Engineering</p>
            <p>July 2017 - December 2022.</p>
          </li>
          <li>
            <h4>Universidad EAFIT</h4>
            <p>8 week python course</p>
            <p>April 2022 - June 2022</p>
          </li>
          <li>
            <h4>Colegio Cumbres Medellín</h4>
            <p>Primary and Secondary education</p>
            <p>July 2004 - June 2017</p>
          </li>
        </ul>
      </div>
      <div className="tools">
        Tools and Knowledge:
        <ul>
          <li>
            React, Redux, JavaScript, TypeScript, SCSS, HTML, GIT actions,
            SonarCloud, Python.
          </li>
          <li>Full Stack: MERN & MEAN.</li>
          <li>CRUD system - NODE (Express).</li>
          <li>Database management: Sql (SQL Server) and NoSql (MongoDB).</li>
          <li>Jest, testing tool.</li>
          <li>Advanced level Excel.</li>
        </ul>
      </div>
      <div className="skills">
        Skills:
        <ul>
          <li>Logical Mathematical Ability</li>
          <li>Cognitive Agility and Execution Capacity</li>
          <li>Problem Solving</li>
          <li>Creativity and Resourcefulness</li>
          <li>Resilience and Perseverance</li>
          <li>Frustration Tolerance</li>
          <li>Effective Communication and Charisma</li>
        </ul>
      </div>
      <div className="languages">
        Languages:
        <ul>
          <li>Spanish: Native</li>
          <li>English: Advanced (B2-C1)</li>
          <li>French: Intermediate (B2)</li>
        </ul>
      </div>
    </main>
  );
}

function About() {
  return (
    <div className="about-container" id="about">
      <h1>About</h1>
      <h2>
        I&apos;m a Computer Science student at Algonquin College with a passion
        for coding. While I enjoy software development, I&apos;m eager to
        explore a variety of fields, including cybersecurity, web frameworks,
        and AI. I thrive on learning new skills and bring a thoughtful, reserved
        energy to every team I work with.
      </h2>
      <div className="about-content-row">
        <p>
          From birth until I was around 20 years old, I grew up in the small
          city of Coquitlam, British Columbia. Throughout high school, I was
          very much a math and science enthusiast. I loved playing video games
          and spent much of my free time on the computer. This passion
          ultimately led me to sign up for a computer programming class, setting
          me on the path to computer science.
        </p>
        <img
          className="image-baby"
          src="./assets/images/baby_me.png"
          alt="A picture of Noah as a baby."
        />
        <div className="image-baby-caption">Me as a baby boy.</div>
      </div>
      <div className="about-content-row reverse">
        <p>
          After applying to various universities and colleges, my aunt and
          uncle, who live in Ontario, introduced me to Algonquin College. After
          learning about the college&apos;s co-op program, I decided to take the
          leap and move out of my parents&apos; house for the first time,
          relocating to Ottawa.
        </p>
        <img
          className="image-teenage"
          src="./assets/images/teenage_me.png"
          alt="A picture of Noah as a teenager."
        />
        <div className="image-teenage-caption">Me as a graduating boy.</div>
      </div>
      <div className="about-content-row">
        <p>
          In 2023, I started my first semester in Algonquin&apos;s Computer
          Science program. The transition was challenging. I struggled to keep
          up, falling behind in some areas, and began to feel the weight of
          imposter syndrome. Combined with homesickness and a fear of failure,
          it wasn&apos;t an easy start.
          <br />
          <br />
          However, as the months went on, I began to understand my strengths. I
          felt a growing sense of accomplishment as I learned new programming
          languages and completed lab assignments. The experience was rewarding,
          and I was excited about the progress I was making. When I secured my
          first co-op job, I was elated. It felt like my hard work was paying
          off, and I was seeing real growth in both my skills and confidence.
        </p>
        <img
          className="image-cat"
          src="./assets/images/cassie_the_cat.jpg"
          alt="A picture of Cassie the cat."
        />
        <div className="image-cat-caption">
          Our family cat Cassie looking very angry.
        </div>
      </div>
      <h2>
        One of the things I love most about computer science is how dynamic it
        is. There&apos;s always something new to learn, a new trend to explore,
        and endless opportunities to dive deeper into.
      </h2>
      <div className="about-content-row reverse">
        <p>
          If I could give advice to my younger self, it would be this: Everyone
          learns at their own pace. Understand where you are, where you want to
          go, and set realistic expectations for how long it will take to get
          there. Don&apos;t worry about falling behind. As long as you keep
          moving forward, you&apos;ll eventually get there.
        </p>
        <img
          className="image-mario"
          src="./assets/images/mario_me.png"
          alt="A picture of Noah as Mario. Wahoo!"
        />
        <div className="image-mario-caption">Me as a Mario boy. Wahoo!</div>
      </div>
    </div>
  );
}

export default About;

const Section = (props) => {
  const { children } = props;

  return (
    <section
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
    >
      {children}
    </section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      {/* <Section>
        <h1>Projects</h1>
      </Section> */}
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-5xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Deng Yi Jin, Lucas</span>
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        I was a full-stack developer at ELVTD
        <br />
        and a student of 42 Kuala Lumpur.
      </p>
      <button
        className={`bg-indigo-600 text-white py-4 px-8
	  rounded-lg font-bold text-lg mt-16`}
      >
        Contact me
      </button>
    </Section>
  );
};

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React / React Native",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
    title: "Typescript",
    level: 60,
  },
  {
    title: "3D Modeling",
    level: 40,
  },
];
const languages = [
  {
    title: "🇫🇷 French",
    level: 100,
  },
  {
    title: "🇺🇸 English",
    level: 80,
  },
  {
    title: "🇯🇵 Japanese",
    level: 20,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <h2 className="text-4xl font-bold">Skills</h2>
      <div className="mt -8 space-y4">
        {skills.map((skill, index) => (
          <div className="w-64" key={index}>
            <h3 className="text-xl font-bold text-gray800">{skill.title}</h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-4xl font-bold mt-10">Languages</h2>
        <div className="mt-8 space-y-4">
          {languages.map((lng, index) => (
            <div className="w-64" key={index}>
              <h3 className="text-xl font-bold text-gray-800">{lng.title}</h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${lng.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const ContactSection = () => {
	return (
	  <Section>
		<h2 className="text-5xl font-bold">Contact me</h2>
		<div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
		  <form>
			<label for="name" className="font-medium text-gray-900 block mb-1">
			  Name
			</label>
			<input
			  type="text"
			  name="name"
			  id="name"
			  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
			/>
			<label
			  for="email"
			  className="font-medium text-gray-900 block mb-1 mt-8"
			>
			  Email
			</label>
			<input
			  type="email"
			  name="email"
			  id="email"
			  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
			/>
			<label
			  for="email"
			  className="font-medium text-gray-900 block mb-1 mt-8"
			>
			  Message
			</label>
			<textarea
			  name="message"
			  id="message"
			  className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
			/>
			<button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
			  Submit
			</button>
		  </form>
		</div>
	  </Section>
	);
  };

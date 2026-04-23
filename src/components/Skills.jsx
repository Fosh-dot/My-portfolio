const Skills = () => {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {["React", "JavaScript", "Tailwind", "HTML", "CSS"].map((skill, i) => (
          <span key={i} className="bg-blue-500 px-4 py-2 rounded-xl">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;

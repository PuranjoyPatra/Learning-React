const Resume = ({ data }) => {
  function beforePrint() {
    console.log("on before");
    document.body.style.background = "white";
    document.body.style.color = "black";
    window.print();
  };

  return (
    <>
      <div className='stuff'>
        <p className='email'>💌 katsuko@gmail.com</p>
        <p className='head'>Interests</p>
        <ul>
          <li>Drawing</li>
          <li>Photography</li>
          <li>Design</li>
          <li>Programming</li>
          <li>Computer Science</li>
        </ul>
        <p className='head'>Skills</p>
        <ul>
          {data.skills.map((skill) => (
            <li key={data.skills.indexOf(skill)}>{skill}</li>
          ))}
        </ul>
        <p className='head'>Education</p>
        <ol className='education'>
          {data.education.map((ed) => (
            <div key={ed.id}>
              <li>{ed.degree}</li>
              <p>
                {ed.place}
                <span> | </span>
                {ed.year}
                <span> | </span>
                {ed.marks}
              </p>
            </div>
          ))}
        </ol>
        <p className='head'>Experience</p>
        <ul className='experience'>
          {data.experience.map((ex) => (
            <div key={ex.id}>
              <li>{ex.role}</li>
              <p>
                {" "}
                {ex.company}
                <span> | </span>
                {ex.year}
              </p>
            </div>
          ))}
        </ul>
        <p className='head'>Extracurriculars</p>
        <ul>
          <li>Recycling Club</li>
          <li>Gardening Club</li>
          <li>Book Club</li>
        </ul>
        <button
          onClick={(e) => {
            e.stopPropagation();
            beforePrint()
          }}
        >
          Print
        </button>{" "}
      </div>
    </>
  );
};

export default Resume;

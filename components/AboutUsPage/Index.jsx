"use client";
import Image from "next/image";
import iarelogo from "../../images/logos/iaremainlogo.jpg";
import consortium from "../../images/logos/cosotium.jpg";
import globe from "../../images/shapes/globe.png";
import maqam from "../../images/shapes/MaqamWhite.png";
import atom from "../../images/shapes/atomWhite.png";
import computer from "../../images/shapes/computerWhite.png";
import SectionTitle from "../shared/SectionTitle";
import ParagSection from "../shared/ParagSection";

const AboutUsPage = () => {
  const facultyBoard = [
    { name: "Dr. L V Narasimha Prasad", role: "Principal" },
    { name: "Dr. T Srinivasa Rao", role: "Event Coordinator" },
    { name: "Dr. A Rama Mohan Reddy", role: "Dean Academics" },
    { name: "Dr. M Venkateswara Rao", role: "HOD CSE" },
    { name: "Dr. K Srujan Raju", role: "HOD ECE" },
    { name: "Dr. B Hari Krishna", role: "HOD EEE" }
  ];

  const studentBoard = [
    { name: "Rajesh Kumar", role: "Student Coordinator", department: "CSE" },
    { name: "Priya Sharma", role: "Technical Head", department: "ECE" },
    { name: "Aditya Singh", role: "Events Manager", department: "IT" },
    { name: "Sneha Reddy", role: "Marketing Lead", department: "CSE" },
    { name: "Karthik Varma", role: "Logistics Head", department: "MECH" },
    { name: "Divya Lakshmi", role: "Design Head", department: "IT" }
  ];

  const events = [
    { category: "Coding & Development", count: 5, icon: "💻" },
    { category: "Technical Papers", count: 3, icon: "📄" },
    { category: "Robotics & Hardware", count: 4, icon: "🤖" },
    { category: "Gaming & Entertainment", count: 3, icon: "🎮" },
    { category: "Workshops & Talks", count: 5, icon: "🎓" }
  ];

  return (
    <div className="min-h-screen bg-qiskit-white">
    

      {/* Main About Sections */}
      <div className="relative about-bg py-16">
        <div className="absolute top-1/4 right-4 lg:w-[55px] h-[32px] w-[32px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" alt="Decorative globe" />
        </div>
        <div className="absolute bottom-8 left-4 w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" alt="Decorative globe" />
        </div>
        <div className="absolute bottom-1/2 left-8 w-[75px] h-[53px] md:w-[40px] md:h-[40px] lg:w-[106px] lg:h-[76px] 2xl:w-[160px] 2xl:h-[112px]">
          <Image src={maqam} layout="fill" alt="Decorative shape" />
        </div>

        <div className="w-10/12 mx-auto flex flex-col gap-8">
          <SectionTitle isWhite={true} title={"About The Fest"} />
          
          <div className="flex flex-col gap-12 lg:gap-28">
            <ParagSection
              keyword1={"IARE Consortium 2025 "}
              paragraph1={`is the flagship annual national-level technical fest organized by the Institute of Aeronautical Engineering, Hyderabad. This grand event brings together thousands of students from across India to celebrate innovation, technology, and engineering excellence. Spanning multiple days, the fest features cutting-edge competitions, workshops, and exhibitions that challenge students to push their boundaries and showcase their technical prowess.`}
              keyword2={"Our Platform "}
              paragraph2={`provides an unparalleled opportunity for students to network with leading tech companies, industry experts, and academic institutions. With 20+ exciting events across multiple categories, Consortium 2025 promises to be the most exciting technical fest of the year!`}
              img={consortium}
              reverse={false}
              redirect={"https://www.iare.ac.in/?q=pages/consortium"}
            />

            <ParagSection
              keyword1={"Institute of Aeronautical Engineering (IARE) "}
              paragraph1={`was established in 2000 and is run by Maruthi Educational Society. The institute is recognized for its technical excellence, offering undergraduate and postgraduate programs across aeronautical, computer science, IT, ECE, EEE, mechanical, and civil engineering. IARE is an autonomous institution permanently affiliated to JNTUH, and accredited by NAAC and NBA.`}
              keyword2={"Leadership "}
              paragraph2={`Under the guidance of Principal Dr. L V Narasimha Prasad and Event Coordinator Dr. T Srinivasa Rao, supported by departmental heads and faculty, Consortium continues to be a highlight for innovation and learning at IARE.`}
              img={iarelogo}
              reverse={true}
              redirect={"https://www.iare.ac.in/?q=pages/about-us"}
            />
          </div>
        </div>
      </div>

    

      {/* Faculty Board */}
      <section className="relative about-bg py-16">
        <div className="absolute top-16 right-12 w-[50px] h-[50px] lg:w-[82px] lg:h-[82px]">
          <Image src={atom} layout="fill" alt="Decorative atom" />
        </div>
        <div className="absolute bottom-16 left-12 w-[50px] h-[50px] lg:w-[82px] lg:h-[82px]">
          <Image src={globe} layout="fill" alt="Decorative globe" />
        </div>

        <div className="w-10/12 mx-auto">
          <SectionTitle isWhite={true} title={"Faculty Advisory Board"} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyBoard.map((faculty, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-qiskit-yellow transition-all duration-300 hover:scale-105">
                <div className="w-full h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-7xl">👤</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{faculty.name}</h3>
                <p className="text-qiskit-yellow font-semibold text-lg">{faculty.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Board */}
      <section className="section-container py-16">
        <div className="relative">
          <div className="absolute top-0 left-8 w-[106px] h-[76px]">
            <Image src={maqam} layout="fill" alt="Decorative shape" />
          </div>
          <div className="absolute bottom-0 right-8 w-[55px] h-[55px]">
            <Image src={computer} layout="fill" alt="Decorative computer" />
          </div>
        </div>

        <SectionTitle title={"Student Organizing Committee"} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {studentBoard.map((student, idx) => (
            <div key={idx} className="bg-gradient-to-br from-qiskit-blue-light to-qiskit-blue-normal rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="w-full h-64 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-7xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{student.name}</h3>
              <p className="text-qiskit-yellow font-semibold text-lg">{student.role}</p>
              <p className="text-white/80">{student.department} Department</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative hero-bg py-16">
        <div className="absolute top-8 left-8 w-[50px] h-[50px]">
          <Image src={atom} layout="fill" alt="Decorative atom" />
        </div>
        <div className="absolute bottom-8 right-8 w-[50px] h-[50px]">
          <Image src={globe} layout="fill" alt="Decorative globe" />
        </div>

        <div className="w-10/12 mx-auto">
          <SectionTitle isWhite={true} title={"Vision & Mission"} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20">
              <h3 className="text-3xl font-bold text-qiskit-yellow mb-4">🎯 Our Vision</h3>
              <p className="text-lg text-white leading-relaxed">
                To establish IARE Consortium as India&apos;s premier technical fest, fostering innovation, collaboration, and excellence in engineering education. We envision creating a platform where young minds explore cutting-edge technologies and transform ideas into reality.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20">
              <h3 className="text-3xl font-bold text-qiskit-yellow mb-4">🚀 Our Mission</h3>
              <p className="text-lg text-white leading-relaxed">
                To provide students with hands-on experience through competitions, workshops, and exhibitions that bridge the gap between academic learning and industry requirements. We nurture technical talent and inspire the next generation of innovators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-16 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-qiskit-blue-normal mb-6">
          Join Us at Consortium 2025
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Be part of this incredible journey of innovation, learning, and fun!
        </p>
        <button className="bg-qiskit-yellow hover:bg-qiskit-yellow/90 text-qiskit-blue-normal font-bold text-xl px-12 py-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
          Register Now
        </button>
      </section>
    </div>
  );
};

export default AboutUsPage;
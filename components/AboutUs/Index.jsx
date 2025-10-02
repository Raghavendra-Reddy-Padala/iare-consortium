import Image from "next/image";
import iagelogo from "../../images/logos/iaremainlogo.jpg";
import SectionTitle from "../shared/SectionTitle";
import cosotium from "../../images/logos/cosotium.jpg";
import ParagSection from "../shared/ParagSection";
import globe from "../../images/shapes/globe.png";
import maqam from "../../images/shapes/MaqamWhite.png";
const AboutUs = () => {
  return (
    <section id="about-us">
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-t from-[#3177ab] to-qiskit-white"></div> */}

      <div className="relative about-bg py-16">
        <div className="absolute top-1/4 right-4 lg:w-[55px] h-[32px] w-[32px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>

        <div className="absolute bottom-8 left-4 w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>
        <div className="absolute bottom-1/2 left-8 w-[75px] h-[53px] md:w-[40px] md:h-[40px] lg:w-[106px] lg:h-[76px] 2xl:w-[160px] 2xl:h-[112px]">
          <Image src={maqam} layout="fill" />
        </div>
        <div className="w-10/12 mx-auto flex flex-col gap-8">
          <SectionTitle isWhite={true} title={"About us"} />
          <div className="flex flex-col gap-12 lg:gap-28">
            <ParagSection
              keyword1={"Institute of Aeronautical Engineering (IARE), Hyderabad "}
              paragraph1={`was established in the year 2000 and is run by Maruthi Educational Society. The institute is recognized for its technical excellence, offering a wide range of undergraduate and postgraduate programs across engineering disciplines including aeronautical, computer science, IT, ECE, EEE, mechanical, and civil engineering. IARE is an autonomous institution permanently affiliated to Jawaharlal Nehru Technological University Hyderabad (JNTUH), and accredited by NAAC and NBA, making it one of the most preferred engineering colleges in Telangana.`}
             
              img={iagelogo}
              reverse={false}
              redirect={"/about"}
            ></ParagSection>
            <ParagSection
              keyword1={"Consortium 2025 "}
              paragraph1={`is IARE's annual national-level technical fest which brings together thousands of students nationwide. The event features 20+ competitions and activities such as technical expos, hackathons, paper presentations, and skill-building workshops. The fest is organized under the guidance of the principal Dr. L V Narasimha Prasad and event coordinator Dr. T Srinivasa Rao, supported by departmental heads and faculty, marking it as a highlight for innovation and learning at IARE.`}
              keyword2={"Organizing Team "}
              paragraph2={`A dedicated committee comprising senior faculty and staff ensures the smooth conduct of the Consortium, enabling learning, collaboration, and technical advancement for future engineers.`}
              img={cosotium}
              reverse={true}
              redirect={"/about"}
            ></ParagSection>
          </div>
        </div>
      </div>
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div> */}
    </section>
  );
};

export default AboutUs;

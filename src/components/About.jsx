import React from "react";
import { MdOpenInFull } from "react-icons/md";

export function AboutBharat({ Demo, setDemo }) {
  return (
    <div className="bharat_parent">
      <h1> Bharat RobotiX</h1>
      <p>
        Bharat RobotiX, is at the forefront of innovation, redefining
        agriculture and exploration through agrobotics and underwater robotics.
        Our autonomous agrobots optimize farming tasks, promoting sustainability
        and efficiency, while our underwater robots contribute to scientific
        research and marine conservation. With a commitment to blending
        tradition with technology, we envision a future where Bharat RobotiX not
        only pioneers cutting-edge solutions but also fosters positive change
        and environmental stewardship. Join us on this transformative journey
        towards a more connected, intelligent, and sustainable world. 🌱🤖🌊
        #BharatRobotiX #InnovationLeaders #Agrobotics #UnderwaterRobotics
      </p>
      <div className="button"
        onClick={() => {
          setDemo(!Demo);
        }}>
       <p> Demo Beetle</p>
        <MdOpenInFull size={10} />
      </div>
    </div>
  );
}

function About({ Demo, setDemo }) {
  return (
    <div className="parent">
      {!Demo && <AboutBharat Demo={Demo} setDemo={setDemo} />}
    </div>
  );
}

export default About;

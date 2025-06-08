import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('naveenpl1081@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Intro */}
        <div className="col-span-1 xl:row-span-3">
        <div className="grid-container transition duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border border-white/20 rounded-2xl">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m Naveen PL</p>
              <p className="grid-subtext">
                I’m a passionate full stack developer with strong expertise in the MERN & MEAN stacks. I enjoy creating dynamic web applications and solving real-world problems with code.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
        <div className="grid-container transition duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border border-white/20 rounded-2xl">

            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I work with JavaScript, TypeScript, React, Node.js, Express, MongoDB, Angular, and more. I also use tools like Bootstrap, Socket.IO, and JWT to build powerful and secure apps.
              </p>
            </div>
          </div>
        </div>

        {/* Globe */}
        <div className="col-span-1 xl:row-span-4">
        <div className="grid-container transition duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border border-white/20 rounded-2xl">

            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 12.9716, lng: 77.5946, text: 'Bangalore, India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Open to Opportunities</p>
              <p className="grid-subtext">
                I’m based in Bangalore, India and available for remote work or exciting on-site opportunities anywhere in the world.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Passion */}
        <div className="xl:col-span-2 xl:row-span-3">
        <div className="grid-container transition duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border border-white/20 rounded-2xl">

            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion</p>
              <p className="grid-subtext">
                I love motivating others, playing cricket, and constantly pushing myself to improve. Coding isn’t just a career for me—it’s a lifestyle. I'm always building projects and learning new technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="xl:col-span-1 xl:row-span-2">
        <div className="grid-container transition duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border border-white/20 rounded-2xl">

            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">naveenpl1081@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

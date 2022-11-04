import React,{useCallback} from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";

const ParticlesJs = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
    
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "F8F8F8",
          },
        },
        fpsLimit: 120,
        interactivity: {
          detect_on: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
            //   duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#000000",
          },
          links: {
            color: "#000000",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: 'out',
            random: false,
            speed: {
              min: 3,
              max: 3
            },
            straight: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: {
                  min: 1,
                  max: 1
                },
                opacity_min: 0.1,
                sync: false
            }
          },
          shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: '#000000'
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100
            }
          },
          size: {
            value: { min: 1, max: 5 },
            random: true,
            anim: {
                enable: false,
                speed: {
                  min:30,
                  max: 30
                },
                size_min: 0.1,
                sync: false
            }
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesJs
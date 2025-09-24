import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";

const LogoParticles = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the triangles preset
      await loadTrianglesPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      preset: "triangles",
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 60,
      fullScreen: {
        zIndex: 0,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
      particles: {
        color: {
          value: [
            "#0a4b62", "#0b516b", "#0c5571", "#0d2a36", "#0d2c40",
            "#0d5d7d", "#0d6484", "#0e1012", "#0e5e7f", "#0f1f2a",
            "#0f212a", "#0f4b66", "#10617e", "#106a94", "#111920",
            "#11709d", "#137db3", "#156888", "#1585bf", "#186c8d",
            "#1b5066", "#024359", "#02445a", "#024e70", "#02586f",
            "#025c7a", "#03384a", "#035369", "#042835", "#042e3d",
            "#043a4c", "#044d67", "#054366", "#05515f", "#055369",
            "#061d26", "#06384a", "#07566d", "#084558", "#086181",
            "#094558", "#09495e", "#0a3d4e", "#0a4b62", "#0b3747"
          ],
        },
        move: {
          speed: 0.5,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 40,
        },
        size: {
          value: 1,
        },
        links: {
          color: [
            "#0a4b62", "#0b516b", "#0c5571", "#0d2a36", "#0d2c40",
            "#0d5d7d", "#0d6484", "#0e1012", "#0e5e7f", "#0f1f2a",
            "#0f212a", "#0f4b66", "#10617e", "#106a94", "#111920",
            "#11709d", "#137db3", "#156888", "#1585bf", "#186c8d",
            "#1b5066", "#024359", "#02445a", "#024e70", "#02586f",
            "#025c7a", "#03384a", "#035369", "#042835", "#042e3d",
            "#043a4c", "#044d67", "#054366", "#05515f", "#055369",
            "#061d26", "#06384a", "#07566d", "#084558", "#086181",
            "#094558", "#09495e", "#0a3d4e", "#0a4b62", "#0b3747"
          ],
          distance: 300,
          enable: true,
          links: 3,
          opacity: 1,
          width: 1,
        },
        fill: {
          color: [
            "#0d5979", "#0e5a7a", "#0f5b7b", "#105c7c", "#115d7d",
            "#125e7e", "#135f7f", "#146080", "#156181", "#166282",
            "#176383", "#186484", "#196585", "#1a6686", "#1b6787",
            "#1c6888", "#1d6989", "#1e6a8a", "#1f6b8b", "#206c8c",
            "#216d8d", "#226e8e", "#236f8f", "#247090", "#257191",
            "#267292", "#277393", "#287494", "#297595", "#2a7696",
            "#2b7797", "#2c7898", "#2d7999", "#2e7a9a", "#2f7b9b",
            "#307c9c", "#317d9d", "#327e9e", "#337f9f", "#3480a0",
            "#3581a1", "#3682a2", "#3783a3", "#3884a4", "#3985a5",
            "#3a86a6", "#3b87a7", "#3c88a8", "#3d89a9", "#3e8aaa",
            "#3f8bab", "#408cac", "#418dad", "#428eae", "#438faf",
            "#4490b0", "#4591b1", "#4692b2", "#4793b3", "#4894b4",
            "#4995b5", "#4a96b6", "#4b97b7", "#4c98b8", "#4d99b9",
            "#4e9aba", "#4f9bbb", "#509cbc", "#519dbd", "#529ebe",
            "#539fbf", "#54a0c0", "#55a1c1", "#56a2c2", "#57a3c3",
            "#58a4c4", "#59a5c5", "#5aa6c6", "#5ba7c7", "#5ca8c8",
            "#5da9c9", "#5eaaca", "#5fabcb", "#60accc", "#61adcd",
            "#62aece", "#63afcf", "#64b0d0", "#65b1d1", "#66b2d2",
            "#67b3d3", "#68b4d4", "#69b5d5", "#6ab6d6", "#6bb7d7",
            "#6cb8d8", "#6db9d9", "#6ebada", "#6fbbdb", "#70bcdc",
            "#71bddd", "#72bede", "#73bfdf", "#74c0e0", "#75c1e1",
            "#76c2e2", "#77c3e3", "#78c4e4", "#79c5e5", "#7ac6e6",
            "#7bc7e7", "#7cc8e8", "#7dc9e9", "#7ecaea", "#7fcbeb",
            "#80ccec", "#81cded", "#82ceee", "#83cfef", "#84d0f0",
            "#85d1f1", "#86d2f2", "#87d3f3", "#88d4f4", "#89d5f5",
            "#8ad6f6", "#8bd7f7", "#8cd8f8", "#8dd9f9", "#8edafa",
            "#8fdbfb", "#90dcfc", "#91ddfd", "#92defe", "#93dfff",
            "#94e0ff", "#95e1ff", "#96e2ff", "#97e3ff", "#98e4ff",
            "#99e5ff", "#9ae6ff", "#9be7ff", "#9ce8ff", "#9de9ff",
            "#9eeaff", "#9febff", "#a0ecff", "#a1edff", "#a2eeff",
            "#a3efff", "#a4f0ff", "#a5f1ff", "#a6f2ff", "#a7f3ff",
            "#a8f4ff", "#a9f5ff", "#aaf6ff", "#abf7ff", "#acf8ff",
            "#adf9ff", "#aefaff", "#affbff", "#b0fcff", "#b1fdff",
            "#b2feff", "#b3ffff", "#b4ffff", "#b5ffff", "#b6ffff",
            "#b7ffff", "#b8ffff", "#b9ffff", "#baffff", "#bbffff",
            "#bcffff", "#bdffff", "#beffff", "#bfffff", "#c0ffff",
            "#c1ffff", "#c2ffff", "#c3ffff", "#c4ffff", "#c5ffff",
            "#c6ffff", "#c7ffff", "#c8ffff", "#c9ffff", "#caffff",
            "#cbffff", "#ccffff", "#cdffff", "#ceffff", "#cfffff",
            "#d0ffff", "#d1ffff", "#d2ffff", "#d3ffff", "#d4ffff",
            "#d5ffff", "#d6ffff", "#d7ffff", "#d8ffff", "#d9ffff",
            "#daffff", "#dbffff", "#dcffff", "#ddffff", "#deffff",
            "#dfffff", "#e0ffff", "#e1ffff", "#e2ffff", "#e3ffff",
            "#e4ffff", "#e5ffff", "#e6ffff", "#e7ffff", "#e8ffff",
            "#e9ffff", "#eaffff", "#ebffff", "#ecffff", "#edffff",
            "#eeffff", "#efffff", "#f0ffff", "#f1ffff", "#f2ffff",
            "#f3ffff", "#f4ffff", "#f5ffff", "#f6ffff", "#f7ffff",
            "#f8ffff", "#f9ffff", "#faffff", "#fbffff", "#fcffff",
            "#fdffff", "#feffff", "#ffffff", "#fefefe", "#fdfdfd",
            "#fcfcfc", "#fbfbfb", "#fafafa", "#f9f9f9", "#f8f8f8",
            "#f7f7f7", "#f6f6f6", "#f5f5f5", "#f4f4f4", "#f3f3f3",
            "#f2f2f2", "#f1f1f1", "#f0f0f0", "#efefef", "#eeeeee",
            "#ededed", "#ececec", "#ebebeb", "#eaeaea", "#e9e9e9",
            "#e8e8e8", "#e7e7e7", "#e6e6e6", "#e5e5e5", "#e4e4e4",
            "#e3e3e3", "#e2e2e2", "#e1e1e1", "#e0e0e0", "#dfdfdf",
            "#dedede", "#dddddd", "#dcdcdc", "#dbdbdb", "#dadada",
            "#d9d9d9", "#d8d8d8", "#d7d7d7", "#d6d6d6", "#d5d5d5",
            "#d4d4d4", "#d3d3d3", "#d2d2d2", "#d1d1d1", "#d0d0d0",
            "#cfcfcf", "#cecece", "#cdcdcd", "#cccccc", "#cbcbcb",
            "#cacaca", "#c9c9c9", "#c8c8c8", "#c7c7c7", "#c6c6c6",
            "#c5c5c5", "#c4c4c4", "#c3c3c3", "#c2c2c2", "#c1c1c1",
            "#c0c0c0", "#bfbfbf", "#bebebe", "#bdbdbd", "#bcbcbc",
            "#bbbbbb", "#bababa", "#b9b9b9", "#b8b8b8", "#b7b7b7",
            "#b6b6b6", "#b5b5b5", "#b4b4b4", "#b3b3b3", "#b2b2b2",
            "#b1b1b1", "#b0b0b0", "#afafaf", "#aeaeae", "#adadad",
            "#acacac", "#ababab", "#aaaaaa", "#a9a9a9", "#a8a8a8",
            "#a7a7a7", "#a6a6a6", "#a5a5a5", "#a4a4a4", "#a3a3a3",
            "#a2a2a2", "#a1a1a1", "#a0a0a0", "#9f9f9f", "#9e9e9e",
            "#9d9d9d", "#9c9c9c", "#9b9b9b", "#9a9a9a", "#999999",
            "#989898", "#979797", "#969696", "#959595", "#949494",
            "#939393", "#929292", "#919191", "#909090", "#8f8f8f",
            "#8e8e8e", "#8d8d8d", "#8c8c8c", "#8b8b8b", "#8a8a8a",
            "#898989", "#888888", "#878787", "#868686", "#858585",
            "#848484", "#838383", "#828282", "#818181", "#808080",
            "#7f7f7f", "#7e7e7e", "#7d7d7d", "#7c7c7c", "#7b7b7b",
            "#7a7a7a", "#797979", "#787878", "#777777", "#767676",
            "#757575", "#747474", "#737373", "#727272", "#717171",
            "#707070", "#6f6f6f", "#6e6e6e", "#6d6d6d", "#6c6c6c",
            "#6b6b6b", "#6a6a6a", "#696969", "#686868", "#676767",
            "#666666", "#656565", "#646464", "#636363", "#626262",
            "#616161", "#606060", "#5f5f5f", "#5e5e5e", "#5d5d5d",
            "#5c5c5c", "#5b5b5b", "#5a5a5a", "#595959", "#585858",
            "#575757", "#565656", "#555555", "#545454", "#535353",
            "#525252", "#515151", "#505050", "#4f4f4f", "#4e4e4e",
            "#4d4d4d", "#4c4c4c", "#4b4b4b", "#4a4a4a", "#494949",
            "#484848", "#474747", "#464646", "#454545", "#444444",
            "#434343", "#424242", "#414141", "#404040", "#3f3f3f",
            "#3e3e3e", "#3d3d3d", "#3c3c3c", "#3b3b3b", "#3a3a3a",
            "#393939", "#383838", "#373737", "#363636", "#353535",
            "#343434", "#333333", "#323232", "#313131", "#303030",
            "#2f2f2f", "#2e2e2e", "#2d2d2d", "#2c2c2c", "#2b2b2b",
            "#2a2a2a", "#292929", "#282828", "#272727", "#262626",
            "#252525", "#242424", "#232323", "#222222", "#212121",
            "#202020", "#1f1f1f", "#1e1e1e", "#1d1d1d", "#1c1c1c",
            "#1b1b1b", "#1a1a1a", "#191919", "#181818", "#171717",
            "#161616", "#151515", "#141414", "#131313", "#121212",
            "#111111", "#101010", "#0f0f0f", "#0e0e0e", "#0d0d0d",
            "#0c0c0c", "#0b0b0b", "#0a0a0a", "#090909", "#080808",
            "#070707", "#060606", "#050505", "#040404", "#030303",
            "#020202", "#010101", "#000000", "#2e282a"
          ],
        },
        opacity: {
          value: 0.9,
        },
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default LogoParticles;
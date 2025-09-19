import { useEffect, useRef } from 'react';
import ClipboardJS from 'clipboard';
import tippy from 'tippy.js';
import MapData from './MapData';

const Map = () => {
  const mapRef = useRef(null);
  const toolTipRef = useRef(null);
  const stateDropdownRef = useRef(null);

  useEffect(() => {
    loadMap();
    stateDropdown();
    emailTooltip();
  }, []);

  const emailTooltip = () => {
    const emailElement = document.getElementById("email");
    if (emailElement) {
      const clipboard = new ClipboardJS("#email");
      const copiedTippy = tippy("#email", {
        content: "Copied!",
        trigger: "",
      })[0];

      clipboard.on("success", function (e) {
        copiedTippy.show();
        setTimeout(copiedTippy.hide, 2000);
      });
    }
  };

  const loadMap = () => {
    const map = mapRef.current;
    const toolTip = toolTipRef.current;

    if (!map || !toolTip) return;

    // Add event listeners to map element
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      map.addEventListener("mousemove", mouseEntered, false);
      map.addEventListener("mouseout", mouseGone, false);
    }

    // Show tooltip on mousemove
    function mouseEntered(e) {
      const target = e.target;

      if (target.parentNode.className.baseVal === "state") {
        target.style.filter = `brightness(50%)`;
        const details = e.target.attributes;

        // Follow cursor
        toolTip.style.transform = `translate(${e.offsetX}px, ${e.offsetY}px)`;

        // Position tooltip in viewport
        if (window.innerWidth > e.offsetX + toolTip.offsetWidth + 50) {
          toolTip.style.left = `revert`;
        } else {
          toolTip.style.left = `${
            window.innerWidth - (e.offsetX + toolTip.offsetWidth + 50)
          }px`;
        }

        // Tooltip data
        toolTip.innerHTML = `
          <ul class="font-sans list-none p-4 m-0">
              <li class="mb-3"><b>Region: ${details.region.value}</b></li>
              <li class="mb-3">State: ${details.state.value}</li>
              <li class="mb-3">Projects: ${details.projects.value}+</li>
              <li class="mb-3">Partners: ${details.partners.value}+</li>
          </ul>`;
      }
    }

    // Clear tooltip on mouseout
    function mouseGone(e) {
      const target = e.target;
      if (target.parentNode.className.baseVal === "state") {
        target.style.filter = `brightness(1)`;
        toolTip.innerHTML = "";
      }
    }
  };

  // Dropdown for mobile
  const stateDropdown = () => {
    const stateDropdown = stateDropdownRef.current;
    const map = mapRef.current;
    const toolTip = toolTipRef.current;

    if (!stateDropdown || !map || !toolTip) return;

    let previousState = stateDropdown.value;

    // Add event listeners to dropdown menu
    stateDropdown.addEventListener("change", () => {
      const selectedStateID = stateDropdown.value;
      const selectedState = map.querySelector("." + selectedStateID);

      if (!selectedState) return;

      // Reset style of previous selection
      const prevState = map.querySelector("." + previousState);
      if (prevState) {
        prevState.style.filter = `brightness(1)`;
      }

      //Reset tooltip position
      toolTip.style.left = "8px";
      toolTip.style.top = "-64px";

      // Choose the element with the dropdown selection's class and style it
      selectedState.style.filter = `brightness(50%)`;

      // Add data to toolTip
      const details = selectedState.attributes;

      toolTip.innerHTML = `
          <ul class="font-sans list-none p-4 m-0">
              <li class="mb-3"><b>Region: ${details.region.value}</b></li>
              <li class="mb-3">State: ${details.state.value}</li>
              <li class="mb-3">Projects: ${details.projects.value}+</li>
              <li class="mb-3">Partners: ${details.partners.value}+</li>
          </ul>`;

      // Move selected state's tooltip to the state's position in the viewport
      const selectedStateLocation = selectedState.getBoundingClientRect();

      if (window.innerWidth > toolTip.offsetWidth + selectedStateLocation.right) {
        toolTip.style.transform = `translate(${selectedStateLocation.right}px, ${selectedStateLocation.top}px)`;
      } else {
        toolTip.style.transform = `translate(${
          selectedStateLocation.left - toolTip.offsetWidth - 20
        }px, ${selectedStateLocation.y}px)`;
      }

      previousState = stateDropdown.value;
    });
  };

  return (
    <div className="flex flex-col md:flex-row relative h-screen z-10">
      <section className="content flex-[1_1_50%] order-1 md:flex-[1_1_80%] md:p-8 md:relative z-10">
        <section className="3xl:absolute 3xl:top-0 3xl:left-0 z-[999] rounded-md bg-base-300 p-2 m-2 sm:mx-auto 3xl:mr-0 3xl:ml-1 3xl:w-fit">
          <div className="inline-flex items-center p-4">
            <span className="size-6 inline-block bg-accent rounded-full me-2"></span>
            <span className="text-base-content text-xl">Headquarters</span>
          </div>
          <div className="inline-flex items-center p-4">
            <span className="size-6 inline-block bg-[#ffe989] rounded-full me-2"></span>
            <span className="text-base-content text-xl">Offices</span>
          </div>
          <form className="max-w-sm p-4">
            <label
              htmlFor="states"
              className="block mb-2 text-sm font-medium text-base-content"
            >
              Select a state
            </label>
            <select
              id="states"
              ref={stateDropdownRef}
              className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </form>
        </section>
        <div className="map-wrapper w-full h-fit m-auto z-10">
          <div
            id="toolTip"
            ref={toolTipRef}
            className="absolute transition ease-out duration-200 bg-base-300 rounded-md z-[999] pointer-events-none"
          ></div>
          <svg
            ref={mapRef}
            xmlns="http://www.w3.org/2000/svg"
            style={{ strokeLinejoin: "round", stroke: "#ecf0f1", fill: "none" }}
            version="1.1"
            viewBox="0 0 959 593"
            id="map"
            className="block z-10 mx-auto w-[90vw] h-[70vh] 3xl:h-[80vh]"
          >
            <defs>
              <style type="text/css">
                {`
                  path #map {
                    fill-rule: evenodd;
                  }
                  svg #map {
                    background-color: #2c3e50;
                  }
                  .state {
                    fill: #3498db;
                  }
                  .borders {
                    stroke: #ffffff;
                    stroke-width: 1;
                  }
                  .dccircle {
                    display: none;
                  }
                  .separator1 {
                    stroke: #b0b0b0;
                    stroke-width: 2;
                  }
                  .CA {
                    fill: #00d8c4;
                  }
                  .TX,
                  .ID,
                  .NV,
                  .AZ {
                    fill: #ffe989;
                  }
                `}
              </style>
            </defs>
            <MapData />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Map;

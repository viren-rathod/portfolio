const jobsData = [
  {
    title: "lorem 1",
    company: "loremldo1",
    range: "Jan 2020 - Dec 2021",
    html: `<ul>
    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa expedita quibusdam cum placeat quod delectus.
    </li>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates soluta officia quidem nisi
      itaque quisquam consectetur, laborum nesciunt accusamus!</li>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, odit. Aspernatur veniam deserunt commodi
      nostrum.</li>
    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </li>
  </ul>`,
  },
  {
    title: "LOREM 2",
    company: "loremngknkse2",
    range: "Feb 2019 - Nov 2019",
    html: ` <ul>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit earum ut cum amet incidunt eveniet culpa veniam quaerat voluptate? Molestiae illum sunt recusandae doloribus.
    </li>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
  </ul>`,
  },
  //   {
  //     title: "LOREM 2",
  //     company: "loremn gknkse 2",
  //     range: "Feb 2019 - Nov 2019",
  //     html: ` <ul>
  //     <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit earum ut cum amet incidunt eveniet culpa veniam quaerat voluptate? Molestiae illum sunt recusandae doloribus.
  //     </li>
  //     <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
  //   </ul>`,
  //   },
];

let totalButton = 0;
const tabList = document.getElementById("tab-list");
const tabPanels = document.getElementById("tab-panels");

function createTabButton(job, index) {
  const tabButton = document.createElement("button");
  tabButton.textContent = `${job.title} @ ${job.company}`;
  tabButton.classList.add("tab-button", "column");
  tabButton.dataset.tabId = index;
  tabList.appendChild(tabButton);
  totalButton += 1;
  return tabButton;
}

function createTabPanel(job, index) {
  const tabPanel = document.createElement("div");
  tabPanel.innerHTML = `<h3><span>${job.title}</span>
            <span class="company link-container">
                &nbsp;@&nbsp;<a class="link" href="#!/" rel="noopener noreferrer" target="_blank">
                    ${job.company}
                </a>
            </span>
        </h3>
        <p class="range">${job.range}</p>
        <div>
        ${job.html}
        </div>
  `;
  tabPanel.classList.add("tab-panel", "animate__animated", "animate__fadeIn");
  tabPanel.id = `panel-${index}`;
  tabPanels.appendChild(tabPanel);
  return tabPanel;
}

function createDivider() {
  const divElement = document.createElement("div");
  divElement.classList.add("fLsUxN");
  divElement.style.cssText =
    "position: absolute; top: 0px; left: 0px; z-index: 10; width: 2px; height: 42px; border-radius: 5px; background: #64ffda; transform: translateY(calc(0 * 42px)); transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;";
  tabList.appendChild(divElement);
}

function handleTabClick(button, index) {
  const temp = document.querySelector(".fLsUxN");
  temp.style.transform = `translateY(calc(${index} * 42px)`;
  tabButtons.forEach((btn) => btn.classList.remove("active"));
  tabPanelsAll.forEach((panel) => panel.classList.remove("active"));
  button.classList.add("active");
  tabPanelsAll[index].classList.add("active");
}

const tabButtons = jobsData.map((job, index) => {
  const tabButton = createTabButton(job, index);
  tabButton.addEventListener("click", () => handleTabClick(tabButton, index));
  return tabButton;
});

const tabPanelsAll = jobsData.map((job, index) => createTabPanel(job, index));

createDivider();
tabButtons[0].click();

/*const jobsData = [
  {
    title: "Job 1",
    company: "Company 1",
    range: "Jan 2020 - Dec 2021",
    html: "<p>Job 1 description goes here.</p>",
  },
  {
    title: "Job 2",
    company: "Company 2",
    range: "Feb 2019 - Nov 2019",
    html: "<p>Job 2 description goes here.</p>",
  },
  {
    title: "Job 3",
    company: "Company 3",
    range: "Feb 2021 - Nov 2021",
    html: "<p>Job 3 description goes here.</p>",
  },
  {
    title: "Job 4",
    company: "Company 4",
    range: "Feb 2022 - Nov 2022",
    html: "<p>Job 3 description goes here.</p>",
  },
  // Add more job data as needed
];

const tabList = document.getElementById("tab-list");
const tabPanels = document.getElementById("tab-panels");

jobsData.forEach((job, i) => {
  const { title, company, range, html } = job;

  const tabButton = document.createElement("button");
  tabButton.textContent = `${title} @ ${company}`;
  tabButton.classList.add("tab-button");
  tabButton.setAttribute("data-tab-id", i);
  tabList.appendChild(tabButton);

  const tabPanel = document.createElement("div");
  tabPanel.innerHTML = `
    <h3>${title} @ <a href="#" class="inline-link">${company}</a></h3>
    <p class="range">${range}</p>
    <div>${html}</div>
  `;
  tabPanel.classList.add("tab-panel");
  tabPanel.classList.add("animate__animated");
  tabPanel.classList.add("animate__fadeIn");
  tabPanel.setAttribute("id", `panel-${i}`);
  tabPanels.appendChild(tabPanel);
});
const divElement = document.createElement("div");
divElement.classList.add("fLsUxN");
divElement.style.position = "absolute";
divElement.style.top = "0px";
divElement.style.left = "0px";
divElement.style.zIndex = "10";
divElement.style.width = "2px";
divElement.style.height = "42px";
divElement.style.borderRadius = "5px";
divElement.style.background = "#64ffda";
divElement.style.transform = "translateY(calc(0 * 42px))";
divElement.style.transition =
  "transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s";
tabList.appendChild(divElement);

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanelsAll = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-tab-id");
    const temp = document.getElementsByClassName("fLsUxN")[0];
    temp.style.transform = `translateY(calc(${parseInt(
      tabId
    )} * 42px))`;
    
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    tabPanelsAll.forEach((panel) => {
      panel.classList.remove("active");
    });

    button.classList.add("active");
    tabPanelsAll[tabId].classList.add("active");
  });
});
tabButtons[0].click();
*/

const projects = [{
  title: "Cool Project",
  status: "Testing",
  progress: 90,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempiquip ex ea commodo consequat. Dutate velit esse cillum dolore eu fugiat nulla pariatur.",
  workers: ["Aayush Shrestha", "Zach Poole"],
  link: "aayushh.com",
  startedOn: "2019",
  completedOn: null
},
{
  title: "New Project",
  status: "Waiting for Apporval",
  progress: 100,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempiquip ex ea commodo consequat. Dutate velit esse cillum dolore eu fugiat nulla pariatur.",
  workers: ["Nick Salter"],
  link: "",
  startedOn: "2019",
  completedOn: null
},
{
  title: "Exciting Project",
  status: "Designing",
  progress: 30,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempiquip ex ea commodo consequat. Dutate velit esse cillum dolore eu fugiat nulla pariatur.",
  workers: ["Sonam Gurung"],
  link: "",
  startedOn: "2019",
  completedOn: null
},
{
  title: "Cool but boring project",
  status: "Finished",
  progress: 100,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempiquip ex ea commodo consequat. Dutate velit esse cillum dolore eu fugiat nulla pariatur.",
  workers: ["Sonam Gurung", "Zach Poole"],
  link: "",
  startedOn: "2019",
  completedOn: "07/10/19"
}
];

function getCurr(first: string, last: string)
{
  const name = first + " " + last;
  let count = 0;

  projects.forEach(proj => {

      if (proj.workers.includes(name) && proj.completedOn == null)
      {
        count ++;
      }

  });

  return count;
}


function getFin(first: string, last: string)
{
  const name = first + " " + last;
  let count = 0;

  projects.forEach(proj => {

      if (proj.workers.includes(name) && proj.completedOn != null)
      {
        count ++;
      }

  });

  return count;
}



const employees = [
  {
    uniqueID: "sadfS12F1t",
    firstName: "Zach",
    lastName: "Poole",
    username: "Zachizpro",
    email: "zachpoolework@gmail.com",
    currentProjects: getCurr("Zach", "Poole"),
    finishedProjects: getFin("Zach", "Poole")
  },
  {
    uniqueID: "!FFG@H#$hjj2",
    firstName: "Sonam",
    lastName: "Gurung",
    username: "SonamTheMom",
    email: "gurungamar25@gmail.com",
    currentProjects: getCurr("Sonam", "Gurung"),
    finishedProjects: getFin("Sonam", "Gurung")
  }, 
  {
    uniqueID: "asdfasdf22233",
    firstName: "Aayush",
    lastName: "Shrestha",
    username: "AayushYouWouldntDoThat",
    email: "ashreshta@gmail.com",
    currentProjects: getCurr("Aayush", "Shrestha"),
    finishedProjects: getCurr("Aayush", "Shrestha")
  }, 
  {
    uniqueID: "2349hSDFGkjh",
    firstName: "Nick",
    lastName: "Salter",
    username: "NicksAltar",
    email: "altar@gmail.com",
    currentProjects: getCurr("Nick", "Salter"),
    finishedProjects: getFin("Nick", "Salter")
  },
];


export {projects, employees};

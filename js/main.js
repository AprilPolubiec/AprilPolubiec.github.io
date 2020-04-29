$(document).ready(function () {
  //I dot easter egg
  var iDot = $('#i-dot')
  var ipaEl = $('#ipa-text')

  iDot.hover(
    function displayIpa() {
      ipaEl.css('visibility', 'visible')
    },
    function hideIpa() {
      ipaEl.css('visibility', 'hidden')
    }
  )

  //Create projects
  var projects = {
    asciiart: {
      title: 'ASCII Art',
      url: 'https://github.com/AprilPolubiec/asciiart',
    },
    gameoflife: {
      title: 'Game of Life',
      url: 'https://github.com/AprilPolubiec/GameOfLife',
    },
    marbl: {
      title: 'Marbl Furniture',
      url: 'https://marbl-furniture.firebaseapp.com/',
    },
  }
  var projectContainer = $('#project-container')
  function displayTitle() {
    this.children[1].style.visibility = 'visible'
    // this.style.filter = 'brightness(40%)'
  }

  function hideTitle() {
    this.children[1].style.visibility = 'hidden'
  }

  Object.entries(projects).forEach(function renderProject([project, details]) {
    var projectEl = $(`<a href=${details.url}></a>`).addClass('project')
    var imgEl = $('<img></img>')
    imgEl.attr('src', `../img/${project}.png`)
    var titleEl = $('<div></div>').text(details.title)
    var url = $(`<a href=${details.url}></a>`)
    projectEl.append(imgEl, titleEl)
    projectContainer.append(projectEl)
    projectEl.hover(displayTitle, hideTitle)
  })

  //Create skills/resume
  var resumeContainer = $('#resume-container')
  var skills = {
    languages: [
      { name: 'HTML', rating: 10 },
      { name: 'CSS', rating: 8 },
      { name: 'Javascript', rating: 10 },
      { name: 'Node.js', rating: 9 },
      { name: 'C++', rating: 8 },
      { name: 'Python', rating: 8 },
      { name: 'Ruby', rating: 5 },
      { name: 'CMake', rating: 5 },
      { name: 'Markdown', rating: 10 },
      { name: 'YAML', rating: 9 },
      { name: 'JSON', rating: 10 },
    ],
    frameworks: [
      { name: 'jQuery', rating: 8 },
      { name: 'React', rating: 10 },
      { name: 'React Native', rating: 5 },
      { name: 'Bootstrap', rating: 5 },
      { name: 'A-Frame', rating: 2 },
    ],
    toolsAndServices: [
      { name: 'AWS', rating: 8 },
      { name: 'Cloud Firestore', rating: 9 },
      { name: 'Cloud Storage', rating: 9 },
      { name: 'Firebase Hosting', rating: 9 },
      { name: 'Heroku', rating: 3 },
      { name: 'AWS', rating: 8 },
      { name: 'Travis CI', rating: 8 },
      { name: 'Stripe', rating: 9 },
      { name: 'CMake', rating: 6 },
      { name: 'XCode', rating: 8 },
      { name: 'SendGrid', rating: 5 },
    ],
    sdkApis: [
      { name: 'Firebase', rating: 10 },
      { name: 'boto3', rating: 8 },
      { name: 'Stripe API', rating: 9 },
      { name: 'Slack', rating: 2 },
    ],
  }

  var skillTitles = {
    languages: 'Languages',
    frameworks: 'Frameworks',
    toolsAndServices: 'Tools & Services',
    sdkApis: 'SDKs/APIs',
  }

  Object.entries(skills).forEach(function renderSkills([key, value]) {
    var skillSection = $('<div></div>').addClass('skill-section')
    var titleEl = $(`<h2>${skillTitles[key]}</h2>`)
    var listEl = $(`<div></div>`).addClass('list')
    var listItems = value.map(function (item) {
      return $(`<div>${item.name}</div>`)
    })
    listEl.append(listItems)
    skillSection.append(titleEl, listEl)
    resumeContainer.append(skillSection)
  })
})

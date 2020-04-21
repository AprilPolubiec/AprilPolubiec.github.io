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
      url: 'https://github.com/AprilPolubiec/asciiart'
    },
  }
  var projectContainer = $('#project-container')

  function displayTitle() {
    this.children[1].style.visibility = 'visible'
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
})

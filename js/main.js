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
  var projects = [1, 2, 3, 4, 5, 6]
  var projectContainer = $('#project-container')

  projects.forEach(function renderProject(project) {
    console.log(project)
    var projectEl = $('<div></div>').addClass('project')
    projectContainer.append(projectEl)
  })
})

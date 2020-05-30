$(document).ready(function () {
  //Nifty functions
  /**
   * Capitalizes first letters of words in string.
   * @param {string} str String to be modified
   * @param {boolean=false} lower Whether all other letters should be lowercased
   * @return {string}
   * @usage
   *   capitalize('fix this string');     // -> 'Fix This String'
   *   capitalize('javaSCrIPT');          // -> 'JavaSCrIPT'
   *   capitalize('javaSCrIPT', true);    // -> 'Javascript'
   */
  const capitalize = (str, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
      match.toUpperCase()
    )

  //Event listeners
  $(document).on('scroll', function () {
    if ($(document).scrollTop() > 0) {
      $('#hero').css('height', '35vh')
    } else {
      $('#hero').css('height', '100vh')
    }
  })

  //Create projects object
  var projects = {
    blog: {
      title: 'Travel Blog',
      url: 'https://nola-for-days.herokuapp.com',
      tags: ['javascript', 'html', 'heroku', 'jquery', 'css'],
    },
    asciiart: {
      title: 'ASCII Art',
      url: 'https://github.com/AprilPolubiec/asciiart',
      tags: ['ruby', 'minimagick'],
    },
    marbl: {
      title: 'Marbl Furniture',
      url: 'https://marbl-furniture.firebaseapp.com/',
      tags: [
        'firebase',
        'react',
        'firestore',
        'stripe',
        'cloud-functions',
        'npm',
        'sweetalert',
        'react-router',
        'cloud-storage',
        'css',
        'node.js',
      ],
    },
    gameoflife: {
      title: 'Game of Life',
      url: 'https://github.com/AprilPolubiec/GameOfLife',
      tags: ['ruby', 'tests'],
    },
    paddleball: {
      title: 'Paddle Ball Game',
      url: 'https://github.com/AprilPolubiec/PaddleBallGame',
      tags: ['python', 'tkinter'],
    },
    tictactoe: {
      title: 'Tic Tac Toe',
      url: 'https://github.com/AprilPolubiec/AITicTacToe',
      tags: ['cmake', 'c++'],
    },
    findabook: {
      title: 'Find Me a Book',
      url: 'https://github.com/AprilPolubiec/book-finder',
      tags: [
        'javascript',
        'html',
        'jquery',
        'css',
        'firebase',
        'firestore',
        'google-books',
        'cloud-functions',
        'node.js',
        'axios',
        'random-words',
        'authentication',
        'responsive-design',
        'css-animations'
      ],
    },
  }

  //Fill projects gallery
  var projectContainer = $('#project-gallery')
  let i = 0
  var column
  var row = $(`<div class='row'></div>`)
  Object.entries(projects).forEach(function renderProject([project, details]) {
    if (i % 4 === 0) {
      //start new column
      column = $(`<div class='column'></div>`)
    }
    var projectEl = $(`<a href=${details.url}></a>`).addClass('project')
    var imgEl = $('<img></img>')
    imgEl.attr('src', `../img/${project}.png`)
    projectEl.append(imgEl)
    column.append(projectEl)
    row.append(column)
    projectContainer.append(row)
    i += 1
  })

  // //Set autofill options in searchbar
  // var dropdownEl = $(`<div id="tags"></div>`)
  // var tags = []
  // Object.values(projects).forEach(function (value) {
  //   value.tags.forEach(function (tag) {
  //     if (!tags.includes(tag)) {
  //       tags.push(tag)
  //       var prettyTag = capitalize(tag.replace('-', ' '))
  //       dropdownEl.append($(`<div id=${tag}>${prettyTag}</div>`))
  //     }
  //   })
  // })

  // $('#searchbar').after(dropdownEl)

  // //Show the tags when searchbar is clicked
  // $('#searchbar').click(function () {
  //   $('#tags').css('visibility', 'visible')
  // })

  // $('#searchbar').blur(function () {
  //   $('#tags').css('visibility', 'hidden')
  // })

  // //Filter tags based on text
  // var matches
  // $('#searchbar').change(function (e) {
  //   if (e.target.value != '') {
  //     tags.forEach(function (tag) {
  //       if (tag.startsWith(e.target.value)) {
  //         matches.push(tag)
  //       }
  //     })
  //     matches.forEach(function (tag) {
  //       var prettyTag = capitalize(tag.replace('-', ' '))
  //       dropdownEl.append($(`<div id=${tag}>${prettyTag}</div>`))
  //     })
  //   }
  // })

  // //Create skills/resume object
  // var resumeContainer = $('#resume-container')
  // var skills = {
  //   languages: [
  //     { name: 'HTML', rating: 10 },
  //     { name: 'CSS', rating: 8 },
  //     { name: 'Javascript', rating: 10 },
  //     { name: 'Node.js', rating: 9 },
  //     { name: 'C++', rating: 8 },
  //     { name: 'Python', rating: 8 },
  //     { name: 'Ruby', rating: 5 },
  //     { name: 'CMake', rating: 5 },
  //     { name: 'Markdown', rating: 10 },
  //     { name: 'YAML', rating: 9 },
  //     { name: 'JSON', rating: 10 },
  //   ],
  //   frameworks: [
  //     { name: 'jQuery', rating: 8 },
  //     { name: 'React', rating: 10 },
  //     { name: 'React Native', rating: 5 },
  //     { name: 'Bootstrap', rating: 5 },
  //     { name: 'A-Frame', rating: 2 },
  //   ],
  //   toolsAndServices: [
  //     { name: 'AWS', rating: 8 },
  //     { name: 'Cloud Firestore', rating: 9 },
  //     { name: 'Cloud Storage', rating: 9 },
  //     { name: 'Firebase Hosting', rating: 9 },
  //     { name: 'Heroku', rating: 3 },
  //     { name: 'AWS', rating: 8 },
  //     { name: 'Travis CI', rating: 8 },
  //     { name: 'Stripe', rating: 9 },
  //     { name: 'CMake', rating: 6 },
  //     { name: 'XCode', rating: 8 },
  //     { name: 'SendGrid', rating: 5 },
  //   ],
  //   sdkApis: [
  //     { name: 'Firebase', rating: 10 },
  //     { name: 'boto3', rating: 8 },
  //     { name: 'Stripe API', rating: 9 },
  //     { name: 'Slack', rating: 2 },
  //   ],
  // }

  // var skillTitles = {
  //   languages: 'Languages',
  //   frameworks: 'Frameworks',
  //   toolsAndServices: 'Tools & Services',
  //   sdkApis: 'SDKs/APIs',
  // }

  // //Fill resume
  // Object.entries(skills).forEach(function renderSkills([key, value]) {
  //   var skillSection = $('<div></div>').addClass('skill-section')
  //   var titleEl = $(`<h2>${skillTitles[key]}</h2>`)
  //   var listEl = $(`<div></div>`).addClass('list')
  //   var listItems = value.map(function (item) {
  //     return $(`<div>${item.name}</div>`)
  //   })
  //   listEl.append(listItems)
  //   skillSection.append(titleEl, listEl)
  //   resumeContainer.append(skillSection)
  // })
})

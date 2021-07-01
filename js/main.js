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
    trivia: {
      title: 'Trivia',
      url: 'https://trivia-b67e1.web.app/',
      tags: [],
    },
    soundspeller: {
      title: 'Sound Speller',
      url: 'https://soundspeller-c5e53.web.app/',
      tags: [
        'react',
        'firebase',
        'javascript',
        'firestore',
        'realtime-database',
        'material-ui',
        'linguistics',
        'cloud-functions',
        'cloud-storage',
        'formik',
        'lodash',
        'speech',
        'sweetalert',
      ],
    },
    whoisrathbone: {
      title: 'Who is Rathbone',
      url: 'https://whoisrathbone.com/',
      tags: [
        'javascript',
        'html',
        'firebase',
        'react',
        'firestore',
        'material-ui',
      ],
    },
    blog: {
      title: 'Travel Blog',
      url: 'https://nola-for-days.herokuapp.com',
      tags: ['javascript', 'html', 'heroku', 'jquery', 'css'],
    },
    findabook: {
      title: 'Find Me a Book',
      url: 'https://find-me-a-book.web.app/',
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
        'css-animations',
      ],
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
    asciiart: {
      title: 'ASCII Art',
      url: 'https://github.com/AprilPolubiec/asciiart',
      tags: ['ruby', 'minimagick'],
    },
    tictactoe: {
      title: 'Tic Tac Toe',
      url: 'https://github.com/AprilPolubiec/AITicTacToe',
      tags: ['cmake', 'c++'],
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
  }

  //Fill projects gallery
  var projectContainer = $('#project-gallery')
  Object.entries(projects).forEach(function renderProject([project, details]) {
    var projectEl = $(`<a href=${details.url} target='_blank'></a>`).addClass(
      'project'
    )
    var imgEl = $('<img></img>')
    imgEl.attr('src', `../img/${project}.png`)
    projectEl.append(imgEl)
    projectContainer.append(projectEl)
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

  // Add holiday b corp PSA
  // var otherContainer = $('#other')

  // var slideshowEl = $('<div class="slideshow"></div>')

  // var slideIndex = 1
  // function plusDivs(n) {
  //   showDivs((slideIndex += n))
  // }

  // function showDivs(n) {
  //   var i
  //   var x = document.getElementsByClassName('slide')
  //   if (n > x.length) {
  //     slideIndex = 1
  //   }
  //   if (n < 1) {
  //     slideIndex = x.length
  //   }
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = 'none'
  //   }
  //   x[slideIndex - 1].style.display = 'block'
  // }

  // for (let i = 0; i < 8; ++i) {
  //   imgEl = $('<img class="slide"></img>')
  //   imgEl.attr('src', `../img/holiday-psa/${i + 1}.png`)
  //   slideshowEl.append(imgEl)
  // }

  // var rightSlideshowButton = $('<button class="right-ss-btn">&#10095;</button>')

  // rightSlideshowButton.on('click', function () {
  //   plusDivs(1)
  // })

  // var leftSlideshowButton = $('<button class="left-ss-btn">&#10094;</button>')
  // leftSlideshowButton.on('click', function () {
  //   plusDivs(-1)
  // })

  // slideshowEl.append(rightSlideshowButton)
  // slideshowEl.append(leftSlideshowButton)
  // otherContainer.append(slideshowEl)
  // showDivs(slideIndex)

  // // Add bcorp buttons
  // const BCORP_LINKS = [
  //   {
  //     title: 'US Apparel',
  //     url:
  //       'https://bcorporation.net/directory?search=&industry=Apparel%2C%20Footwear%20%26%20Accessories&country=United%20States&state=&city=',
  //   },
  //   {
  //     title: 'International Apparel',
  //     url:
  //       'https://bcorporation.net/directory?search=&industry=Apparel%2C%20Footwear%20%26%20Accessories&country=&state=&city=',
  //   },
  //   {
  //     title: 'US Bookstores',
  //     url:
  //       'https://bcorporation.net/directory?search=&industry=Books%20%26%20Media&country=United%20States&state=&city=',
  //   },
  //   {
  //     title: 'International Bookstores',
  //     url:
  //       'https://bcorporation.net/directory?search=&industry=Books%20%26%20Media&country=&state=&city=',
  //   },
  // ]

  // var bcorpLinksContainer = $('<div id="bcorp-links"></div>')
  // var bcorpLinksHeader = $('<h4>B Corp Directory Quick Links</h4>')
  // bcorpLinksContainer.append(bcorpLinksHeader)
  // BCORP_LINKS.forEach(link => {
  //   var bcorpBtnEl = $(`<a href="${link.url}" target="_blank">${link.title}</a>`)
  //   bcorpLinksContainer.append(bcorpBtnEl)
  // })
  // otherContainer.append(bcorpLinksContainer)
})

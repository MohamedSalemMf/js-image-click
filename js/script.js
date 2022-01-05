// window.alert("Hello")    //Test


$('.gallery .fullscreen-image').apImageFullscreen({
  autoReassign: true,
  autoOpen: false,
  lazyLoad: 'open',// Options: false, 'instant', 'open', 'visible'
  buttons: { // Options for position: left|right, top|center|bottom
    close: { visible: true, position: 'right, top', theme: 'white' },
    next: { visible: true, position: 'right, bottom', theme: 'white' },
    previous: { visible: true, position: 'right, bottom', theme: 'white' }
  },

  disableScreenfull: false
})













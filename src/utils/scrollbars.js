const box = document.getElementById('box');

// box.addEventListener("click", () => {
//   alert("click");
// });

const setScrollbarFade = (elementId) => {
  const elem = document.getElementById(elementId);

  //   alert('hello');

  elem.addEventListener('mouseenter', () => {
    // elem.style.scrollbarColor = '  rgba(30,128, 61, 0.9)   #eeddee';
    // elem.style.scrollbarColor = '  rgba(130,128, 61, 0.9)   #eeddee';
    // elem.style.scrollbarColor = ' #eeddee  rgba(40,163, 74) ';
    elem.style.scrollbarColor = ' #2563EB #1E3A8A ';

    elem.classList.add('visible-scroll');

    elem.classList.remove('faded-scroll');
  });

  elem.addEventListener('mouseleave', () => {
    elem.style.scrollbarColor = '#1E40AE rgba(30,64, 175, 0.0)';
    elem.classList.add('faded-scroll');
    elem.classList.remove('visible-scroll');
  });
};

export { setScrollbarFade };

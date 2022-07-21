/******************************************************************/
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const eventsList = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
  const eventListElem = document.querySelector('.events-list');

  eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

/**************************************************/
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'Span', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'Span', 'grey');

/**************************************************/

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreyDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreyP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreySpan);

/**************************************************/
clearBtn.addEventListener('click', () => {
  eventsList.innerHTML = '';
});

removeHandlersBtn.addEventListener('click', () => {
  divElem.removeEventListener('click', logGreyDiv);
  divElem.removeEventListener('click', logGreyP);
  divElem.removeEventListener('click', logGreySpan);

  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreyP, true);
  divElem.removeEventListener('click', logGreySpan, true);
});

attachHandlersBtn.addEventListener('click', () => {
  divElem.addEventListener('click', logGreyDiv);
  divElem.addEventListener('click', logGreyP);
  divElem.addEventListener('click', logGreySpan);

  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreyP, true);
  divElem.addEventListener('click', logGreySpan, true);
});

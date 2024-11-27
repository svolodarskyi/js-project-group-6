import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.faq-list', {
  duration: 300,
  ariaEnabled: true,
  collapse: true,
  showMultiple: false,
  onlyChildNodes: false,
  openOnInit: [0],
  elementClass: 'faq-list-item',
  triggerClass: 'faq-list-item-title-container',
  panelClass: 'faq-list-item-panel',
  // panelClass: 'faq-list-item-title',
  activeClass: 'is-Active-faq-list-item',
});

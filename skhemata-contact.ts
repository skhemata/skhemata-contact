import { SkhemataContact } from './src/SkhemataContact.js';

if (!customElements.get('skhemata-contact')) {
  window.customElements.define('skhemata-contact', SkhemataContact);
}
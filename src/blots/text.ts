import { TextBlot } from 'parchment';

class Text extends TextBlot {}

// https://lodash.com/docs#escape
const entityMap: { [key: string]: string } = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeText(text: string) {
  return text.replace(/[&<>"']/g, s => {
    return entityMap[s] || s;
  });
}

export { Text as default, escapeText };

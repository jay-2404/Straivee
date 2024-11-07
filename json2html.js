export default function json2html(data) {
  // Get all unique keys to create the table headers
  const headers = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));

  // Create the table with the data-user attribute
  let html = `<table data-user="jayendra.codes@gmail.com">\n`;

  // Create the table header
  html += '  <thead>\n    <tr>';
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += '</tr>\n  </thead>\n';

  // Create the table body
  html += '  <tbody>\n';
  data.forEach(row => {
    html += '    <tr>';
    headers.forEach(header => {
      html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
    });
    html += '</tr>\n';
  });
  html += '  </tbody>\n</table>';

  return html;
}

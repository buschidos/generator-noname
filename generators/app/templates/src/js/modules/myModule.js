<% if (bundler === 'include') { %>console.log('Log from myModule');
<% } %><% if (bundler === 'webpack') { %>export const log = (msg) => console.log(msg);<% } %>

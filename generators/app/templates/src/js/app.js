<% if (bundler === 'include') { %>//=require ./modules/myModule.js
<% } %><% if (bundler === 'webpack') { %>import { log } from './modules/myModule';
log('Hello, World!!!');<% } %>

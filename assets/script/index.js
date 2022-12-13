'use strict';

function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

const overlay = select('.overlay');
const loading = select('.loading');

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFib3NzMDIiLCJhIjoiY2xiZ3JuZGo1MGhmajNubXUzcmYyM3RvMSJ9.3XF64pMqvw0Mso4OQv3EDA';
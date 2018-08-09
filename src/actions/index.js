export const addService = function(key) { return {
  type: 'ADD_SERVICE',
  key: key
}}
export const removeService = function(key) { return {
  type: 'REMOVE_SERVICE',
  key: key
}}

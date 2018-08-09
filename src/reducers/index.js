import services from 'assets/services'

export default (state = {active: [], inactive: services}, action) => {
  switch (action.type) {
    case 'ADD_SERVICE':
      const addedService = services.filter((service) => service.key === action.key)[0];
      const filteredActive = state.active.filter((service) => service.key !== action.key)
      const filteredInactive = state.inactive.filter((service) => service.key !== action.key)
      return {
        active: [...filteredActive, addedService],
        inactive: filteredInactive
      }
    case 'REMOVE_SERVICE':
      const removedService = services.filter((service) => service.key === action.key)[0];
      const filteredActive = state.active.filter((service) => service.key !== action.key)
      const filteredInactive = state.inactive.filter((service) => service.key !== action.key)
      return {
        inactive: [...filteredInactive, removedService],
        active: filteredActive
      }
    default:
      return state
  }
}

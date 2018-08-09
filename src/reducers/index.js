import services from 'assets/services'

export default (state = {active: [], inactive: services}, action) => {
  switch (action.type) {
    case 'ADD_SERVICE':
      const addedService = services.filter((service) => service.key === action.key)[0];
      const filteredActive1 = state.active.filter((service) => service.key !== action.key)
      const filteredInactive1 = state.inactive.filter((service) => service.key !== action.key)
      return {
        active: [...filteredActive1, addedService],
        inactive: filteredInactive1
      }
    case 'REMOVE_SERVICE':
      const removedService = services.filter((service) => service.key === action.key)[0];
      const filteredActive2 = state.active.filter((service) => service.key !== action.key)
      const filteredInactive2 = state.inactive.filter((service) => service.key !== action.key)
      return {
        inactive: [...filteredInactive2, removedService],
        active: filteredActive2
      }
    default:
      return state
  }
}

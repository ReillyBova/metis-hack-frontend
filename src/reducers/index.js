import services from 'assets/services'

export default (state = {active: [], inactive: services}, action) => {
  switch (action.type) {
    case 'ADD_SERVICE':
      const newService = services.filter((service) => service.key === action.key)[0];
      const newInActive = state.inactive.filter((service) => service.key !== action.key)
      return {
        active: [...state.active, newService],
        inactive: newInActive
      }
    case 'REMOVE_SERVICE':
      const newInService = services.filter((service) => service.key === action.key)[0];
      const newActive = state.active.filter((service) => service.key !== action.key)
      return {
        inactive: [...state.inactive, newInService],
        active: newActive
      }
    default:
      return state
  }
}

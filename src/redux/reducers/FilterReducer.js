export default function (
  state = {
    showFilter: false,
  },
  action,
) {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      return {showFilter: !state.showFilter};

    default:
      return state;
  }
}

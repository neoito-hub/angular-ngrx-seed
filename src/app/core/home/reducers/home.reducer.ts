import * as fromHomeActions from '../actions/home.action';

export interface Home {
  loading: boolean;
  loaded: boolean;
  sampleData: any;
}

const initialState: Home = {
  loading: false,
  loaded: false,
  sampleData: []
};

export function HomeReducer(
  state = initialState,
  action: fromHomeActions.HomeAction
): Home {
  // State interface
  switch (action.type) {
    case fromHomeActions.LOAD: {
      return {
        ...state,
        loading: true,
        sampleData: []
      };
    }
    case fromHomeActions.LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: false,
        sampleData: [{ name: 'hello' }]
      };
    }
  }
  // return state;
}

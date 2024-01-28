import createDataContext from './createDataContext';


const locationReducer = (state, action) => { 
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload };
        case 'start_recording':
            return { ...state, recording: true };
        case 'stop_recording':
            return { ...state, recording: false };
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] };
        case 'change_name':
            return { ...state, name: action.payload };
        case 'reset':
            return { ...state, name: '', locations: [] };
        default:
            return state;
    }
}

const change_name = dispatch => (name) => {
    dispatch({ type: 'change_name', payload: name });
};

const start_recording = dispatch => () => {
    
    dispatch({ type: 'start_recording' });
};

const stop_recording = dispatch => () => {
    dispatch({ type: 'stop_recording' });
};

const add_location = dispatch => (location, recording) => {
    
    dispatch({ type: 'add_current_location', payload: location });
    // console.log("recording: ",recording)
    
    if(recording){
        dispatch({ type: 'add_location', payload: location });
    }
};

const reset = dispatch => () => { 
    dispatch({ type: 'reset' });

}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { start_recording, stop_recording, add_location, change_name, reset},
    {name:"", recording: false, locations: [], currentLocation: null }
);
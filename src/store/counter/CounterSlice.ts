import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    count: number,
    isReady: boolean
}

const initialState: CounterState = {
    count: 5,
    isReady: false
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initCounterState(state, action: PayloadAction<number>) {
            if (state.isReady) return;
            state.count = action.payload;
            state.isReady = true;
        },
        addOne(state) {
            state.count += 1;
        },
        substractOne(state) {
            if (state.count === 0) return;
            state.count -= 1;
        },
        resetCount(state, accion: PayloadAction<number>) {
            if (accion.payload < 0) accion.payload = 0;
            state.count = accion.payload;
        }
    }
});

export const { addOne, substractOne, resetCount, initCounterState } = CounterSlice.actions;

export default CounterSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const Slice = createSlice({
    name:'user',
    initialState: {
        stage:0,
        cep:'',
        street:'',
        numberHouse:0,
        complement:'',
        district:'',
        city:'',
        UfDistrict:'',
        methodPayment:''
    },
    reducers: {
        setStage: (state, action) => {
            state.stage = action.payload;
        },
        setCep: (state, action) => {
            state.cep = action.payload;
        },
        setStreet: (state, action) => {
            state.street = action.payload;
        },
        setnumberHouse: (state, action) => {
            state.numberHouse = action.payload;
        },
        setComplement: (state, action) => {
            state.complement = action.payload;
        },
        setDistrict: (state, action) => {
            state.district = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setUfDistrict: (state, action) => {
            state.UfDistrict = action.payload;
        },
        setMethodPayment: (state, action) => {
            state.methodPayment = action.payload;
        }
    }
})

export const { setStage, setCep, setStreet, setnumberHouse, setComplement, setDistrict, setCity, setUfDistrict, setMethodPayment } = Slice.actions
export default Slice.reducer;
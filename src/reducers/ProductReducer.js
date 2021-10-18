const initialState = [
    {
        id: 1,
        name: 'iPhone XS Max',
        price: 1000,
        status: true
    },
    {
        id: 2,
        name: 'iPhone 11 Pro Max',
        price: 2000,
        status: true
    },
    {
        id: 3,
        name: 'iPhone 12 Pro Max',
        price: 3000,
        status: false
    },
]

const productReducer = (state = initialState, action) => {
    switch(action.type){
        default: return [...state]
    }
}

export default productReducer
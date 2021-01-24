const initialState ={
    data:{    
        firstName: 'First Name',
        lastName: 'Last Name',
        mobileNumber: 'Mobile Number',
        email:'Email',
        farmName: 'Farm Name',
        country: 'Select Country',
        _empty: '-',
        farmSize:'Farm Size',
        cropGrown:'Crop Grown',
        password: 'Password'
    }
}

const farmerState = (state = initialState , action) =>{
    switch(action.type){
        default:
            return initialState;
            break
    };
}
export default farmerState;
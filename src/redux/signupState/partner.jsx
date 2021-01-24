const initialState ={
    data:{    
        firstName: 'First Name',
        lastName: 'Last Name',
        mobileNumber: 'Mobile Number',
        email:'Email',
        organizationName: 'Organization Name',
        country: 'Select Country',
        _empty: '-',
        password: 'Password'
    }
}

const partnerState = (state = initialState , action) =>{
    switch(action.type){
        default:
            return initialState;
            break
    };
}

export default partnerState;
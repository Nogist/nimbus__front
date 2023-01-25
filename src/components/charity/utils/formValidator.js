
export const validate = (data) =>{
    const errors ={
        status: false
    }
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!data.orgName){
        errors.orgName = "Organisation Name is required";
        errors.status = true;
    }
    if(!data.address){
        errors.address = "Address is required";
        errors.status = true;
    }
    if(!data.yearsOfOp){
        errors.yearsOfOp = "Years of Operation is required";
        errors.status = true;
    }

    // else if(!(Number.isInteger(parseInt(data.yearsOfOp))) && !(parseInt(data.yearsOfOp) > 0)){
    //     console.log("error", Number.isInteger(parseInt(data.yearsOfOp)))
    //     errors.yearsOfOp = "Enter a number";
    //     errors.status = true;
    // }
    if(!data.annualMarketing){
        errors.annualMarketing = "Annual Marketing Spend is required";
        errors.status = true;
    }
    if(!data.annualTurnover){
        errors.annualTurnover = "Annual Business Turnover is required";
        errors.status = true;
    }
    if(!data.aboutOrg){
        errors.aboutOrg = "This field is required";
        errors.status = true;
    }
    if(!data.whyMerit){
        errors.whyMerit = "This field is required";
        errors.status = true;
    }
    if(!data.howImpactBusiness){
        errors.howImpactBusiness = "This field is required";
        errors.status = true;
    }
    if(!data.source){
        errors.source = "This field is required";
        errors.status = true;
    }
    if(!data.noOfEmployee){
        errors.noOfEmployee = "This field is required";
        errors.status = true;
    }
    if(!data.category){
        errors.category = "Category is required";
        errors.status = true;
    }
    if(!data.website){
        errors.website = "";
        errors.status = false;
    }
    if(!data.facebook){
        errors.facebook = "";
        errors.status = false;
    }
    if(!data.linkedin){
        errors.linkedin = "";
        errors.status = false;
    }
    if(!data.instagram){
        errors.instagram = "";
        errors.status = false;
    }
    if(!data.isOrgRegistered){
        errors.isOrgRegistered = "Select an option";
        errors.status = true;
    }
    data.keyPeople?.map((data, index)=>{
        if(!data.name){
            errors[`name${index+1}`] = "Name is required";
            errors.status = true;
        }
        if(!data.phone){
            errors[`phone${index+1}`] = "Phone Number is required";
            errors.status = true;
        }
        if(!data.email){
            errors[`email${index+1}`] = "Email is required";
            errors.status = true;
        }
        else if(!data.email.match(validRegex)){
            errors[`email${index+1}`] = "Email is not valid";
            errors.status = true;
        }
    })
    
    return errors;
}
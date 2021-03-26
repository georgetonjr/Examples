const dominio = /www.\w+\.com.br|.com/;
const email  = /\w+@\w+\.\w+/;
const phoneNumber = /\(\d{2}\)\d{4,5}-\d{4}/;

let Validate = {
    Email: function(mail: string){
        if(email.test(mail)){
            return true;
        }else{
            return false;
        }
    },
    Phone: function(phone: string){
        if(phoneNumber.test(phone)){
            return true;
        }else{
            return false;
        }
    },
    Domain: function(domain: string){
        if(dominio.test(domain)){
            return true;
        }else{
            return false;
        }
    },   
}

export default Validate;
import expresiones from '../const/regex'

export default function validar(e,campo, cv){
    switch (campo) {
        case 'email':
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('reg-email').classList.remove('invalido')
                document.getElementById('reg-email').classList.add('valido')

                // cv['email'] = true;
            }else{
                document.getElementById('reg-email').classList.add('invalido')
                document.getElementById('reg-email').classList.remove('valido')
                // cv['email'] = true;
            }
            break;
    
        default:
            break;
    }
}
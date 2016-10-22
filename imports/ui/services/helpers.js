export function GetFormArray(formEl) {
    var formArray = $(formEl).serialize().split('&').map(function(keyValue){
        return {
            name: keyValue.split('=')[0],
            value: keyValue.split('=')[1] || ''
        }
    })
    return formArray;
}

export function GetFormObject(formEl) {
    var formArray = GetFormArray(formEl);
    var formObject = {};
    formArray.forEach(function(o){
        formObject[ o.name ] = o.value;
    });
    return formObject;
}
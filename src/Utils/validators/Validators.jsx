
//Если поле будет пустым, вернет запись об ошибке

export const required = value => {
    if (value) return undefined;

    return "Field is requred";
}

//При превышении количества символов в сообщении, вернет сообщение об ошибке

export const maxLengthCreator = (maxLength) => value => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}
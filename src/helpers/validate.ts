function ObjetoRequeridosValidos(request: any, inputs: any[]) {
    let message = [];

    for (let i = 0; i < inputs.length; i++) {
        if (request.body[inputs[i].atributo] == undefined || request.body[inputs[i].atributo] == "") {
            message.push(inputs[i].texto);
        }
    }

    return message.length == 0 ? true : message;
}

export {ObjetoRequeridosValidos};
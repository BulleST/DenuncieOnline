
export class Protocolo{
    Protocol: string = ''
}

export class Mensagem{
    DataHora: Date = new Date;
    Descricao: string = '';
    MensagemDenunciante: boolean = true;
    MensagemLida: boolean = true;


}

export class ProtocoloMensagem{
    Protocol: string = '';
    Description: string = '';  
    MensagemDenunciante: boolean = true;
}

export class RetornoProtocolo{
    Success: boolean = true;
    Description: string = '';
}

export class ProtocoloResponse{
    Success: boolean = true;
    Message: string = "";
    List: Mensagem[] = [];
}
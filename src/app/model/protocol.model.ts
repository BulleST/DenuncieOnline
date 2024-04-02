
export class Protocolo{
    Protocol: string = ''
}

export class Mensagem{
    DataHora: Date = new Date;
    Descricao: string = '';
    MensagemDenunciante: boolean = true;

}

export class ProtocoloMensagem{
    Protocol: string = '';
    Description: string = '';  
    
}

export class RetornoProtocolo{
   Success: boolean = true; 
Description: string = '';  
}
   
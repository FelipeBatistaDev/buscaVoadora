export class rowData{
    constructor(
        public valorTotal?: number,
        public tempoVoo?: string,
        public tempoEspera?: string,
        public escala?: string,
        public voos?: flightInfo[] ) { }
}

export class flightInfo{
    constructor(
        voo: string,
        origem: string,
        destino: string,
        data_saida: string,
        saida: string,
        chegada: string,
        valor: number) { }
}
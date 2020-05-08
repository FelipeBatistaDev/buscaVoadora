export class rowData{
    constructor(
        public valorTotal?: string,
        public tempoVoo?: string,
        public tempoEspera?: string,
        public escala?: string,
        public voos?: flightInfo[] 
        ) { }
}

export class flightInfo{
    constructor(
        public voo: string,
        public origem: string,
        public destino: string,
        public data_saida: string,
        public saida: string,
        public chegada: string,
        public valor: number
        ) { }
}
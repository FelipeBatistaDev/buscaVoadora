export class flight {
    constructor(
        public origem: string,
        public destino: string,
        public date: string,
        public voos: flightData[]) { }
}

class flightData {
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
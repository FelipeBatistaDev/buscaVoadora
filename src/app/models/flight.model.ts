export class Flight {
    constructor(
        public origem: string,
        public destino: string,
        public date: string,
        public voos: FlightData[]
        ) { }
}

export class FlightData {
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
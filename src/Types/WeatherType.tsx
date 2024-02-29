export type WeatherType = {
    temp_c : number;
    condition: {
        text: string;
        icon: string;
        code: number;
    };
    wind_mph : number;
};
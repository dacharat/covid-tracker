export interface Case {
  NewRecovered?: number
  cases?: number
  todayCases?: number
  deaths?: number
  todayDeaths?: number
  recovered?: number
  todayRecovered?: number
  active?: number
  todayActived?: number
}

export interface Rate {
  recoveredRate: number
  deathsRate: number
}

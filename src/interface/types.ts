export interface Case {
  cases?: number
  todayCases?: number
  deaths?: number
  todayDeaths?: number
  recovered?: number
  todayRecovered?: number
  active?: number
  todayActived?: number
}

export interface AdditionCase {
  cases?: number
  active?: number
  critical?: number
  tests?: number
  population?: number
}

export interface Rate {
  recoveredRate: number
  deathsRate: number
}

export interface AdditionRate {
  infectionRate: number
  criticalRate: number
  testedRate: number
  deathsRate: number
  recoveredRate: number
  activedRate: number
}

export interface Company{
  recent?: boolean,
  logo: string,
  name: string,
  period: string,
  role: string,
  description: string,
  previous?: boolean,
  previousName?: string,
  previousPeriod?: string,
  previousRole?: string,
  previousDescription?: string,
  languages: string[]
}

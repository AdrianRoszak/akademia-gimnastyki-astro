import type { TypedObject } from 'sanity'

export type RegulationData = {
  title: string
  body: TypedObject
}

//@ts-ignore
export function digestRegulationData(source): RegulationData | null {
  if (!source) {
    return null
  }

  return {
    title: source[0].regulation_heading,
    body: source[0].regulation_body,
  }
}

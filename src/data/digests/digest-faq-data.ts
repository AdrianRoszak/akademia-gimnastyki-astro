import type { TypedObject } from 'astro-portabletext/types'

export type Faq = {
  question: string
  answer: TypedObject
}

export type FaqData = {
  title: string
  lead: string
  questions: Faq[]
  meta: {
    title: string
    description: string
  }
}

//@ts-ignore
export function digestFaqData(source): FaqData | null {
  if (!source) return null

  return {
    title: source[0].faq_page_title,
    lead: source[0].faq_page_description,
    //@ts-ignore
    questions: source[0].faq_page_selector.faq_selector_list.map((item): Faq => {
      return {
        question: item.faq_item_question,
        answer: item.faq_item_answer,
      }
    }),
    meta: {
      title: source[0].faq_meta_data_block.meta_data_site_title,
      description: source[0].faq_meta_data_block.meta_data_site_description,
    },
  }
}

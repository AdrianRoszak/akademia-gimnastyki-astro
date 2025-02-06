export const queryFaqData = `*[_type == 'faq'] {
  faq_page_title,
  faq_page_description,
  faq_page_selector {
    faq_selector_list[]-> {
      faq_item_answer,
      faq_item_question
    }
  },
  faq_meta_data_block {
    meta_data_site_title,
    meta_data_site_description
  }
}`;

// @/utils/i18n-validators.js
import * as validators from '@vuelidate/validators'
import i18n from "@/i18n"

// or import { createI18nMessage } from '@vuelidate/validators'
const { createI18nMessage } = validators

// Create your i18n message instance. Used for vue-i18n@9
const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) })
// for vue-i18n@8
// const withI18nMessage = createI18nMessage({ t: i18n.t.bind(i18n) })

// wrap each validator.
export const required = withI18nMessage(validators.required)
// validator email
export const email = withI18nMessage(validators.email)
// validator email
export const numeric = withI18nMessage(validators.numeric)

// validator igual
export const sameAs = withI18nMessage(validators.sameAs, { withArguments: true })
// validators that expect a parameter should have `{ withArguments: true }` passed as a second parameter, to annotate they should be wrapped
export const minLength = withI18nMessage(validators.minLength, { withArguments: true })

export const maxLength = withI18nMessage(validators.maxLength, { withArguments: true })

export const minValue = withI18nMessage(validators.minValue, { withArguments: true })

export const maxValue = withI18nMessage(validators.maxValue, { withArguments: true })

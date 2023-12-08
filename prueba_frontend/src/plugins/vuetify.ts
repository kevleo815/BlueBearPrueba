import 'vuetify/styles'
import { createVuetify } from 'vuetify'
/* import * as components from 'vuetify/components' */
import { VList, VAvatar, VVirtualScroll, VDialog, VAutocomplete, VProgressLinear, VMenu, VAppBarTitle, VCheckbox, VChip, VSelect, VCombobox, VFileInput, VDivider, VSheet, VListItem, VNavigationDrawer, VListGroup, VApp, VAppBar, VAppBarNavIcon, VOverlay, VTable, VImg, VBtn, VLayout, VSnackbar, VProgressCircular, VIcon, VMain, VCard, VRow, VCol, VContainer, VForm, VTextField } from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.css'
import { fa } from 'vuetify/iconsets/fa'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

// Translations provided by Vuetify
import { es } from 'vuetify/locale'

const vuetify = createVuetify({
  /* components, */
  components: {
    VSelect, VFileInput, VDialog, VChip, VVirtualScroll, VCheckbox, VAppBarTitle, VMenu, VAvatar, VCombobox, VProgressLinear, VAutocomplete,
    VApp, VAppBar, VAppBarNavIcon, VOverlay, VTable, VList, VDivider, VSheet, VListItem, VListGroup, VNavigationDrawer,
    VImg, VBtn, VLayout, VSnackbar, VProgressCircular, VIcon, VMain, VCard, VRow, VCol, VContainer, VForm, VTextField
  },
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      fa
    }
  },
  locale: {
    locale: 'es',
    fallback: 'es',
    messages: { es },
  },
})

export default vuetify

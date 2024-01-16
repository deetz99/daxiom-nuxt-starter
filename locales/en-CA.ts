export default {
  // header component translations
  BcrosHeader: {
    title: 'BC Registry and Online Services', // header title
    navLabel: 'Main Navigation', // <nav> aria-label
    logoBtnLabel: 'Home', // <img> link aria-label
    logoAlt: 'Government of British Columbia Logo', // <img> alt
    btn: {
      create: 'Create Account' // button label
    },
    // dropdown menus
    menu: {
      login: {
        // logged out dropdown
        label: 'Log in', // button label
        // menu options
        select: 'Select login method',
        bcsc: 'BC Services Card',
        bceid: 'BCeID',
        idir: 'IDIR',
        or: 'OR', // mobile only
        create: 'Create Account' // mobile only
      },
      notifications: {
        // notification dropdown
        label: 'Notifications' // button label
      },
      account: {
        // account options dropdown - only when logged in
        label: 'Account Options', // button aria-label
        // menu options
        logout: 'Log Out',
        edit: 'Edit Profile',
        settings: 'Account Settings',
        info: 'Account Info',
        team: 'Team Members',
        transactions: 'Transactions',
        switch: 'Switch Account',
        create: 'Create Account'
      }
    }
  },
  // footer component translations
  BcrosFooter: {
    navLabel: 'Useful Links', // <nav> aria-label
    home: 'Home',
    disclaimer: 'Disclaimer',
    privacy: 'Privacy',
    ally: 'Accessibility',
    copyright: 'Copyright'
  }
}

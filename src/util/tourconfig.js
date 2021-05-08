import TourContent from './../components/App/Dashboard/TourContent';

export const tourConfig = [
    {
        selector: '[data-tut="reactour__iso"]',
        content: () => (
            <TourContent step={0} header={'Start Assessment'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna quisque aliquam lacus justo, in nam ullamcorper venenatis.'} />
        )
    },
    {
        selector: '[data-tut="account-id"]',
        content: () => (
            <TourContent step={1} header={'Accound ID'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna quisque aliquam lacus justo, in nam ullamcorper venenatis.'} />
        )
    },
    {
        selector: '[data-tut="severity-level"]',
        content: () => (
            <TourContent step={2} header={'Secure Score/Severity Level'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna quisque aliquam lacus justo, in nam ullamcorper venenatis.'} />
        )
    },
    {
        selector: '[data-tut="view-report"]',
        content: () => (
            <TourContent step={3} header={'View Report'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna quisque aliquam lacus justo, in nam ullamcorper venenatis.'} />
        )
    },
    {
        selector: '[data-tut="menu-access"]',
        content: () => (
            <TourContent step={4} header={'Menu Access'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna quisque aliquam lacus justo, in nam ullamcorper venenatis.'} />
        )
    },
]
let general = {
    firstName: 'David',
    lastName: 'Zsiguli',
    email: 'davidzsiguli@idk.com',
    tel: '06995342012',
}

let educations = [{
    id: crypto.randomUUID(),
    dateFrom: 'January 2018',
    dateTo: 'September 2023',
    school: 'Harvard University',
    faculty: 'Duckologist',
    description: 'At the Duckology Department of Harvard I was studying the behaviour of ducks.'
}]

let experiences = [{
    id: crypto.randomUUID(),
    dateFrom: 'January 2018',
    dateTo: 'September 2021',
    company: 'Watermelon Co.',
    position: 'Melon waterer',
    description: 'I watered melons.'
}]

export { general, educations, experiences }
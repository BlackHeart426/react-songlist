export const headCells = [
    { id: 'title', numeric: false, order: true, disablePadding: true, editMode: true, label: 'Наименование', type: 'txt' },
    { id: 'artist', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Описание', type: 'txt' },
    { id: 'times-played', numeric: true, order: true, disablePadding: false, editMode: true, label: 'Стоимость', type: 'txt' },
    { id: 'last-played', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Последний заказ', type: 'txt' },
    { id: 'tags', numeric: false, order: false, disablePadding: false, editMode: true, label: '', type: 'tag' },
    { id: 'action', numeric: false, order: false, disablePadding: false, editMode: true, label: '', type: 'btn' },
];

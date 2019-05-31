document.addEventListener('DOMContentLoaded', function (e) {
    let tf = new TableFilter('emp', {
        paging: {
            results_per_page: ['Records: ', [10, 25, 50, 100]]
        },
        state: {
            types: ['local_storage'],
            filters: true,
            page_number: true,
            page_length: true,
            sort: true
        },
        status_bar: true,
        rows_counter: true,
        btn_reset: true,
        filters_row_index: 1,
        col_2: 'select',
        col_3: 'select',
        auto_filter: {
            delay: 700
        },
        msg_filter: 'Searching...',
		extensions: [{ name: 'sort' }]
    });
    tf.init();
});

document.addEventListener('DOMContentLoaded', function (e) {
    let tf = new TableFilter('emp2', {
        paging: {
            results_per_page: ['Records: ', [10, 25, 50, 100]]
        },
        state: {
            types: ['local_storage'],
            filters: true,
            page_number: true,
            page_length: true,
            sort: true
        },
        status_bar: true,
        rows_counter: true,
        btn_reset: true,
        filters_row_index: 1,
        col_2: 'select',
        col_3: 'select',
        auto_filter: {
            delay: 700
        },
        msg_filter: 'Searching...',
		extensions: [{ name: 'sort' }]
    });
    tf.init();
});


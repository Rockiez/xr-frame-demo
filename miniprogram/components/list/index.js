const itemHeight = 56 * 2;
Component({
    data: {
        childBoxHeight: 0,
    },
    externalClasses: [],
    properties: {
        defaultOpen: {
            type: Boolean,
            value: false,
        },
        name: {
            type: String,
            value: '',
        },
        detail: {
            type: String,
            value: '',
        },
        root: {
            type: String,
            value: '',
        },
        path: {
            type: String,
            value: '',

        }
    },
    methods: {
        tap(e) {
            this.triggerEvent('click', {
                ...e.target.dataset,
                root: this.data.root,
                path: this.data.path,
            });
        },
    },
});

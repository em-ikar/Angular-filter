export interface IFilterBuilder {
    name: string;
    lang: {
        ru: boolean;
        en: boolean;
    };
    level: {
        hot: boolean;
        intermediate: boolean;
        advanced: boolean;
        hardcore: boolean;
        academic: boolean;
    };
}

export interface IFilter {
    title: string;
    lang: [];
    level: [];
}

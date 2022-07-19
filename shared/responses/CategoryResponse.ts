type CategoryModel = {
    title: string;
    description: string;
    subcategories: Subcategory[];
};

type Subcategory = {
    title: string;
};

export type { CategoryModel }
export const filterFireList = (text) => {
    return {
        type: "FILTER",
        text: text
    };
};

export const sortOrderFireList = (order) => {
    return {
        type: "SORT_ORDER",
        order: order
    };
};

export const sortByFireList = (property) => {
    return {
        type: "SORT_BY",
        property: property
    };
};


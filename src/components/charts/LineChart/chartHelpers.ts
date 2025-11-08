// src/utils/chartHelpers.js
export const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(value);
};

export const formatNumber = (value) => {
    return new Intl.NumberFormat('vi-VN').format(value);
};

export const prepareDatasets = (datasets, defaultConfig) => {
    return datasets.map(dataset => ({
        ...defaultConfig,
        ...dataset,
        pointBorderColor: dataset.borderColor,
    }));
};
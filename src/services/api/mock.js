// ============================================
// MOCK DATA - Giống API thật
// ============================================

/**
 * Mock database - Giả lập data từ backend
 */
const MOCK_DATABASE = {
  // Dữ liệu doanh thu theo ngày (30 ngày gần nhất)
  dailyRevenue: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    revenue: Math.floor(Math.random() * 5000000) + 3000000,
    profit: Math.floor(Math.random() * 3000000) + 1500000,
    orders: Math.floor(Math.random() * 100) + 50,
  })),

  // Dữ liệu theo tháng (12 tháng)
  monthlyRevenue: [
    { month: 'T1', revenue: 45000000, profit: 28000000, orders: 1200 },
    { month: 'T2', revenue: 38000000, profit: 24000000, orders: 1050 },
    { month: 'T3', revenue: 52000000, profit: 32000000, orders: 1400 },
    { month: 'T4', revenue: 48000000, profit: 30000000, orders: 1300 },
    { month: 'T5', revenue: 55000000, profit: 35000000, orders: 1500 },
    { month: 'T6', revenue: 60000000, profit: 38000000, orders: 1600 },
    { month: 'T7', revenue: 58000000, profit: 36000000, orders: 1550 },
    { month: 'T8', revenue: 62000000, profit: 40000000, orders: 1700 },
    { month: 'T9', revenue: 65000000, profit: 42000000, orders: 1800 },
    { month: 'T10', revenue: 70000000, profit: 45000000, orders: 1900 },
    { month: 'T11', revenue: 68000000, profit: 43000000, orders: 1850 },
    { month: 'T12', revenue: 75000000, profit: 48000000, orders: 2000 },
  ],

  // Dữ liệu theo tuần (7 ngày)
  weeklyOrders: [
    { day: 'Thứ 2', orders: 120, completed: 110, cancelled: 10 },
    { day: 'Thứ 3', orders: 150, completed: 142, cancelled: 8 },
    { day: 'Thứ 4', orders: 180, completed: 170, cancelled: 10 },
    { day: 'Thứ 5', orders: 200, completed: 188, cancelled: 12 },
    { day: 'Thứ 6', orders: 250, completed: 240, cancelled: 10 },
    { day: 'Thứ 7', orders: 280, completed: 265, cancelled: 15 },
    { day: 'CN', orders: 220, completed: 210, cancelled: 10 },
  ],

  // Dữ liệu sản phẩm bán chạy
  topProducts: [
    { name: 'Cà phê đen', sold: 450, revenue: 22500000 },
    { name: 'Cà phê sữa', sold: 380, revenue: 19000000 },
    { name: 'Trà sữa trân châu', sold: 320, revenue: 16000000 },
    { name: 'Bánh mì thịt', sold: 280, revenue: 8400000 },
    { name: 'Sinh tố bơ', sold: 250, revenue: 12500000 },
  ],

  // Dữ liệu theo giờ (24h)
  hourlyOrders: Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    orders: i >= 7 && i <= 22 ? Math.floor(Math.random() * 30) + 10 : Math.floor(Math.random() * 5),
  })),

  // Dữ liệu khách hàng mới
  newCustomers: Array.from({ length: 12 }, (_, i) => ({
    month: `T${i + 1}`,
    newCustomers: Math.floor(Math.random() * 100) + 50,
    returningCustomers: Math.floor(Math.random() * 150) + 100,
  })),
};

/**
 * Utility: Simulate network delay
 */
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Utility: Random error simulation (5% chance)
 */
const simulateError = () => {
  if (Math.random() < 0.05) {
    throw new Error('Network error: Failed to fetch data');
  }
};

/**
 * Utility: Filter data by date range
 */
const filterByDateRange = (data, startDate, endDate) => {
  if (!startDate && !endDate) return data;
  
  return data.filter(item => {
    const itemDate = new Date(item.date);
    const start = startDate ? new Date(startDate) : new Date('1970-01-01');
    const end = endDate ? new Date(endDate) : new Date();
    return itemDate >= start && itemDate <= end;
  });
};

// ============================================
// MOCK API ENDPOINTS
// ============================================

/**
 * Mock API: Get revenue data
 * GET /api/charts/revenue?startDate=2025-01-01&endDate=2025-11-08&period=daily
 */
export const fetchRevenueData = async (params = {}) => {
  await delay(800);
  simulateError();

  const { startDate, endDate, period = 'daily' } = params;

  let sourceData = period === 'monthly' 
    ? MOCK_DATABASE.monthlyRevenue 
    : MOCK_DATABASE.dailyRevenue;

  // Filter by date if provided
  if (period === 'daily') {
    sourceData = filterByDateRange(sourceData, startDate, endDate);
  }

  // Transform to chart format
  return {
    labels: sourceData.map(item => item.month || item.date),
    datasets: [
      {
        label: 'Doanh thu',
        data: sourceData.map(item => item.revenue),
        borderColor: '#FFC107',
        backgroundColor: '#FFC107',
      },
      {
        label: 'Lợi nhuận',
        data: sourceData.map(item => item.profit),
        borderColor: '#4DD0E1',
        backgroundColor: '#4DD0E1',
      },
    ],
    rawData: sourceData, // Include raw data for custom processing
  };
};

/**
 * Mock API: Get orders data
 * GET /api/charts/orders?period=week
 */
export const fetchOrdersData = async (params = {}) => {
  await delay(600);
  simulateError();

  const { period = 'week' } = params;
  const sourceData = MOCK_DATABASE.weeklyOrders;

  return {
    labels: sourceData.map(item => item.day),
    datasets: [
      {
        label: 'Tổng đơn',
        data: sourceData.map(item => item.orders),
        borderColor: '#10B981',
        backgroundColor: '#10B981',
      },
      {
        label: 'Hoàn thành',
        data: sourceData.map(item => item.completed),
        borderColor: '#3B82F6',
        backgroundColor: '#3B82F6',
      },
      {
        label: 'Hủy',
        data: sourceData.map(item => item.cancelled),
        borderColor: '#EF4444',
        backgroundColor: '#EF4444',
      },
    ],
    rawData: sourceData,
  };
};

/**
 * Mock API: Get top products
 * GET /api/charts/top-products?limit=5
 */
export const fetchTopProductsData = async (params = {}) => {
  await delay(500);
  simulateError();

  const { limit = 5 } = params;
  const sourceData = MOCK_DATABASE.topProducts.slice(0, limit);

  return {
    labels: sourceData.map(item => item.name),
    datasets: [
      {
        label: 'Số lượng bán',
        data: sourceData.map(item => item.sold),
        borderColor: '#F59E0B',
        backgroundColor: '#F59E0B',
      },
    ],
    rawData: sourceData,
  };
};

/**
 * Mock API: Get hourly orders
 * GET /api/charts/hourly-orders?date=2025-11-08
 */
export const fetchHourlyOrdersData = async (params = {}) => {
  await delay(400);
  simulateError();

  const sourceData = MOCK_DATABASE.hourlyOrders;

  return {
    labels: sourceData.map(item => item.hour),
    datasets: [
      {
        label: 'Đơn hàng theo giờ',
        data: sourceData.map(item => item.orders),
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        fill: true,
      },
    ],
    rawData: sourceData,
  };
};

/**
 * Mock API: Get customer statistics
 * GET /api/charts/customers?year=2025
 */
export const fetchCustomerData = async (params = {}) => {
  await delay(700);
  simulateError();

  const sourceData = MOCK_DATABASE.newCustomers;

  return {
    labels: sourceData.map(item => item.month),
    datasets: [
      {
        label: 'Khách hàng mới',
        data: sourceData.map(item => item.newCustomers),
        borderColor: '#06B6D4',
        backgroundColor: '#06B6D4',
      },
      {
        label: 'Khách quay lại',
        data: sourceData.map(item => item.returningCustomers),
        borderColor: '#8B5CF6',
        backgroundColor: '#8B5CF6',
      },
    ],
    rawData: sourceData,
  };
};

/**
 * Mock API: Get dashboard summary
 * GET /api/charts/dashboard-summary?period=month
 */
export const fetchDashboardSummary = async (params = {}) => {
  await delay(1000);
  simulateError();

  const { period = 'month' } = params;
  const revenueData = await fetchRevenueData({ period: 'monthly' });
  const ordersData = await fetchOrdersData({ period: 'week' });

  return {
    revenue: revenueData,
    orders: ordersData,
    summary: {
      totalRevenue: 680000000,
      totalOrders: 18850,
      avgOrderValue: 36070,
      growthRate: 12.5,
    },
  };
};

// ============================================
// MAIN CHART SERVICE (Generic)
// ============================================

/**
 * Generic fetch function - Giống axios call thật
 * @param {string} endpoint - API endpoint
 * @param {Object} params - Query parameters
 * @returns {Promise<Object>} Chart data
 */
export const fetchChartData = async (endpoint, params = {}) => {
  try {
    // Simulate API routing
    const routes = {
      '/api/charts/revenue': () => fetchRevenueData(params),
      '/api/charts/orders': () => fetchOrdersData(params),
      '/api/charts/top-products': () => fetchTopProductsData(params),
      '/api/charts/hourly-orders': () => fetchHourlyOrdersData(params),
      '/api/charts/customers': () => fetchCustomerData(params),
      '/api/charts/dashboard-summary': () => fetchDashboardSummary(params),
    };

    const handler = routes[endpoint];
    
    if (!handler) {
      throw new Error(`Endpoint not found: ${endpoint}`);
    }

    const data = await handler();
    
    // Giống response structure của API thật
    return {
      success: true,
      data,
      timestamp: new Date().toISOString(),
    };

  } catch (error) {
    // Giống error handling của API thật
    return {
      success: false,
      error: {
        message: error.message,
        code: 'FETCH_ERROR',
      },
      timestamp: new Date().toISOString(),
    };
  }
};

// ============================================
// EXPORT ALL FUNCTIONS
// ============================================

export default {
  fetchChartData,
  fetchRevenueData,
  fetchOrdersData,
  fetchTopProductsData,
  fetchHourlyOrdersData,
  fetchCustomerData,
  fetchDashboardSummary,
};
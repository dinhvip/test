import LineChart from '../../components/charts/LineChart/LineChart';
import { useChartData } from '../../hooks/chart/useChartData';
import FeatureCard from '../../components/FeatureCard';

export default function ColumnPage() {
  // Multiple charts với mock data
  const revenue = useChartData('/api/charts/revenue', { period: 'monthly' });
  const orders = useChartData('/api/charts/orders', { period: 'week' });
  const hourly = useChartData('/api/charts/hourly-orders', { date: '2025-11-08' });
  const customers = useChartData('/api/charts/customers', { year: 2025 });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Dashboard Thống Kê
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <LineChart
              labels={revenue.data.labels}
              datasets={revenue.data.datasets}
              height="350px"
              title="Doanh thu & Lợi nhuận"
              loading={revenue.loadingChart}
              error={revenue.errorChart}
            />
          </div>

          {/* Orders Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <LineChart
              labels={orders.data.labels}
              datasets={orders.data.datasets}
              height="350px"
              title="Đơn hàng theo tuần"
              loading={orders.loadingChart}
              error={orders.errorChart}
            />
          </div>

          {/* Hourly Orders Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <LineChart
              labels={hourly.data.labels}
              datasets={hourly.data.datasets}
              height="300px"
              title="Đơn hàng theo giờ"
              loading={hourly.loadingChart}
              error={hourly.errorChart}
            />
          </div>

          {/* Customers Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <LineChart
              labels={customers.data.labels}
              datasets={customers.data.datasets}
              height="300px"
              title="Khách hàng mới & Quay lại"
              loading={customers.loadingChart}
              error={customers.errorChart}
            />
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <FeatureCard
            title="Tổng doanh thu"
            description="680,000,000 đ"
            buttonText="+12.5%"
            gradient="purple"
            onButtonClick={() => console.log('Revenue details clicked')}
          />
          <FeatureCard
            title="Tổng đơn hàng"
            description="18,850 đơn"
            buttonText="+8.3%"
            gradient="blue"
            onButtonClick={() => console.log('Orders details clicked')}
          />
          <FeatureCard
            title="Giá trị TB/Đơn"
            description="36,070 đ"
            buttonText="-2.1%"
            gradient="green"
            onButtonClick={() => console.log('Average order details clicked')}
          />
          <FeatureCard
            title="Khách hàng mới"
            description="1,245 khách"
            buttonText="+15.7%"
            gradient="purple"
            onButtonClick={() => console.log('Customers details clicked')}
          />
        </div>
      </div>
    </div>
  );
}
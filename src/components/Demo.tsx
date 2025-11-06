import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Typography, Progress, List, Badge, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  EyeOutlined,
  LineChartOutlined,
  BulbOutlined,
  ArrowUpOutlined,
  DollarOutlined,
  BarChartOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

interface DemoProps {
  currentDemo: string;
  setCurrentDemo: (demo: string) => void;
}

const Demo: React.FC<DemoProps> = ({ currentDemo, setCurrentDemo }) => {
  const { t } = useTranslation();
  const [revenue, setRevenue] = useState(125000);
  const [accuracy, setAccuracy] = useState(98.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 100));
      setAccuracy(prev => Math.min(99.9, prev + (Math.random() - 0.5) * 0.1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const demoTabs = [
    { key: 'monitoring', icon: <EyeOutlined />, title: t('demo.monitoring.title'), subtitle: t('demo.monitoring.subtitle') },
    { key: 'analytics', icon: <LineChartOutlined />, title: t('demo.analytics.title'), subtitle: t('demo.analytics.subtitle') },
    { key: 'recommendations', icon: <BulbOutlined />, title: t('demo.recommendations.title'), subtitle: t('demo.recommendations.subtitle') },
    { key: 'forecasting', icon: <ArrowUpOutlined />, title: t('demo.forecasting.title'), subtitle: t('demo.forecasting.subtitle') }
  ];

  const competitorData = [
    { competitor: 'TechCorp', price: 299, change: '+5%', status: 'up' },
    { competitor: 'DataSystems', price: 275, change: '-2%', status: 'down' },
    { competitor: 'SmartTech', price: 312, change: '0%', status: 'stable' },
    { competitor: 'InnovateCorp', price: 289, change: '+3%', status: 'up' }
  ];

  const renderMonitoringDemo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{revenue.toLocaleString()}</div>
          <div className="text-sm text-slate-600">Monthly Revenue</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{accuracy.toFixed(1)}%</div>
          <div className="text-sm text-slate-600">AI Accuracy</div>
        </div>
      </div>
      
      <Card title="Live Competitor Tracking" className="border-0 shadow-sm">
        <List
          dataSource={competitorData}
          renderItem={(item) => (
            <List.Item>
              <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <Text className="font-medium">{item.competitor}</Text>
                  <div className="flex items-center gap-2">
                    <Text className="font-semibold">${item.price}</Text>
                    <Badge 
                      status={item.status === 'up' ? 'error' : item.status === 'down' ? 'success' : 'processing'} 
                      text={item.change}
                    />
                  </div>
                </div>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );

  const renderAnalyticsDemo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">+25%</div>
          <div className="text-sm text-slate-600">Revenue Growth</div>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">156</div>
          <div className="text-sm text-slate-600">Competitors</div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">2.3M</div>
          <div className="text-sm text-slate-600">Data Points</div>
        </div>
      </div>

      <Card title="Market Trend Analysis" className="border-0 shadow-sm">
        <div className="space-y-4">
          <div className="p-4 border border-slate-200 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <Text className="font-medium">E-commerce Pricing Trend</Text>
              <Text className="text-green-600">+12.5%</Text>
            </div>
            <Progress percent={75} size="small" showInfo={false} />
          </div>
          <div className="p-4 border border-slate-200 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <Text className="font-medium">SaaS Market Analysis</Text>
              <Text className="text-blue-600">+8.3%</Text>
            </div>
            <Progress percent={65} size="small" showInfo={false} />
          </div>
        </div>
      </Card>
    </div>
  );

  const renderRecommendationsDemo = () => (
    <div className="space-y-6">
      <div className="text-center p-4 bg-purple-50 rounded-lg">
        <div className="text-2xl font-bold text-purple-600">AI Recommendation</div>
        <div className="text-sm text-slate-600">Optimal price based on market analysis</div>
      </div>

      <Card title="Smart Pricing Recommendations" className="border-0 shadow-sm">
        <List
          dataSource={[
            { product: 'Enterprise Plan', current: 299, recommended: 312, impact: '+4.3%' },
            { product: 'Professional Plan', current: 199, recommended: 205, impact: '+3.0%' },
            { product: 'Starter Plan', current: 79, recommended: 85, impact: '+7.6%' }
          ]}
          renderItem={(item) => (
            <List.Item>
              <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <Text className="font-medium">{item.product}</Text>
                  <Text className="text-green-600 font-semibold">{item.impact}</Text>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Current: ${item.current}</span>
                  <span>Recommended: ${item.recommended}</span>
                </div>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );

  const renderForecastingDemo = () => (
    <div className="space-y-6">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">$1.2M</div>
            <div className="text-sm text-slate-600">Projected Q1 Revenue</div>
          </div>
        </Col>
        <Col span={12}>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">32%</div>
            <div className="text-sm text-slate-600">YoY Growth</div>
          </div>
        </Col>
      </Row>

      <Card title="Revenue Forecasting Model" className="border-0 shadow-sm">
        <div className="space-y-4">
          <div className="p-4 border border-slate-200 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <Text className="font-medium">Conservative Scenario</Text>
              <Text className="text-slate-600">$950K - $1.1M</Text>
            </div>
            <Progress percent={60} size="small" showInfo={false} />
          </div>
          <div className="p-4 border border-slate-200 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <Text className="font-medium">Base Case Scenario</Text>
              <Text className="text-purple-600">$1.1M - $1.3M</Text>
            </div>
            <Progress percent={80} size="small" showInfo={false} />
          </div>
          <div className="p-4 border border-slate-200 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <Text className="font-medium">Optimistic Scenario</Text>
              <Text className="text-green-600">$1.3M - $1.5M</Text>
            </div>
            <Progress percent={95} size="small" showInfo={false} />
          </div>
        </div>
      </Card>
    </div>
  );

  const renderCurrentDemo = () => {
    switch (currentDemo) {
      case 'monitoring': return renderMonitoringDemo();
      case 'analytics': return renderAnalyticsDemo();
      case 'recommendations': return renderRecommendationsDemo();
      case 'forecasting': return renderForecastingDemo();
      default: return renderMonitoringDemo();
    }
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title level={2} className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t('demo.title')}
          </Title>
          <Text className="text-lg text-slate-600 max-w-2xl mx-auto block">
            {t('demo.subtitle')}
          </Text>
        </motion.div>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card title="Price Intelligence Modules" className="border-0 shadow-lg">
                <div className="space-y-2">
                  {demoTabs.map((tab) => (
                    <Button
                      key={tab.key}
                      type={currentDemo === tab.key ? 'primary' : 'default'}
                      className={`w-full justify-start text-left h-auto p-3 ${
                        currentDemo === tab.key ? 'bg-purple-600 border-0' : 'border-slate-200'
                      }`}
                      onClick={() => setCurrentDemo(tab.key)}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {tab.icon}
                          <Text className="font-medium text-white">
                            {tab.title}
                          </Text>
                        </div>
                        <Text className="text-xs text-slate-300">
                          {tab.subtitle}
                        </Text>
                      </div>
                    </Button>
                  ))}
                </div>

                <div className="mt-6 p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <BarChartOutlined className="text-purple-500" />
                    <Text className="text-sm text-purple-700 font-medium">Live Analytics</Text>
                  </div>
                  <Text className="text-xs text-purple-600">Real-time AI processing</Text>
                </div>
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} lg={18}>
            <motion.div
              key={currentDemo}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-lg min-h-[500px]">
                {renderCurrentDemo()}
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Demo;
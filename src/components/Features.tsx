import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  DollarOutlined, 
  EyeOutlined, 
  LineChartOutlined, 
  BulbOutlined,
  ArrowUpOutlined,
  ApiOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <DollarOutlined className="text-2xl text-purple-600" />,
      title: t('feature.pricing.title'),
      description: t('feature.pricing.desc'),
    },
    {
      icon: <EyeOutlined className="text-2xl text-blue-600" />,
      title: t('feature.monitoring.title'),
      description: t('feature.monitoring.desc'),
    },
    {
      icon: <LineChartOutlined className="text-2xl text-green-600" />,
      title: t('feature.analytics.title'),
      description: t('feature.analytics.desc'),
    },
    {
      icon: <BulbOutlined className="text-2xl text-orange-600" />,
      title: t('feature.recommendations.title'),
      description: t('feature.recommendations.desc'),
    },
    {
      icon: <ArrowUpOutlined className="text-2xl text-indigo-600" />,
      title: t('feature.forecasting.title'),
      description: t('feature.forecasting.desc'),
    },
    {
      icon: <ApiOutlined className="text-2xl text-cyan-600" />,
      title: t('feature.integration.title'),
      description: t('feature.integration.desc'),
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title level={2} className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t('features.title')}
          </Title>
          <Text className="text-lg text-slate-600 max-w-2xl mx-auto block">
            {t('features.subtitle')}
          </Text>
        </motion.div>

        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-full border-2 border-slate-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
                  bodyStyle={{ padding: '32px 24px' }}
                >
                  <div className="text-center">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <Title level={4} className="text-xl font-semibold text-slate-900 mb-3">
                      {feature.title}
                    </Title>
                    <Text className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </Text>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Analytics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 lg:p-12"
        >
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} lg={12}>
              <Title level={3} className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Advanced AI & Machine Learning
              </Title>
              <Text className="text-lg text-slate-600 block mb-6">
                Our platform leverages cutting-edge machine learning algorithms and AI to provide 
                intelligent pricing recommendations and market insights that drive real business results.
              </Text>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <Text className="text-slate-700">Neural network price optimization</Text>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <Text className="text-slate-700">Real-time market analysis</Text>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <Text className="text-slate-700">Predictive revenue forecasting</Text>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <Text className="text-slate-700">Automated competitor tracking</Text>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Title level={4} className="text-slate-900 mb-4">Platform Performance</Title>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Text className="text-slate-600">AI Accuracy</Text>
                    <Text className="font-semibold text-purple-600">98.2%</Text>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '98.2%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Text className="text-slate-600">Revenue Impact</Text>
                    <Text className="font-semibold text-green-600">+25%</Text>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Text className="text-slate-600">Market Coverage</Text>
                    <Text className="font-semibold text-blue-600">95%</Text>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
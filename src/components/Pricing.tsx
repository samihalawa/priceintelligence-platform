import React, { useState } from 'react';
import { Card, Button, Typography, Row, Col, List } from 'antd';
import { CheckOutlined, RocketOutlined, CrownOutlined } from '@ant-design/icons';
import ContactModal from './ContactModal';
import PurchaseModal from './PurchaseModal';

const { Title, Text } = Typography;

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  icon: React.ReactNode;
  color: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small businesses ready to optimize their pricing',
    features: [
      'Up to 10,000 SKUs',
      'Basic competitor monitoring',
      'Monthly pricing reports',
      'Email alerts',
      'Dashboard analytics',
      'Basic API access'
    ],
    buttonText: 'Start Free Trial',
    icon: <RocketOutlined />,
    color: '#1890ff'
  },
  {
    name: 'Professional',
    price: '$799',
    period: '/month',
    description: 'Ideal for growing businesses with complex pricing needs',
    features: [
      'Up to 50,000 SKUs',
      'Real-time competitor tracking',
      'Dynamic pricing recommendations',
      'Advanced analytics & reports',
      'Custom alerts & notifications',
      'Full API access',
      'Priority support',
      'A/B testing tools'
    ],
    buttonText: 'Start Free Trial',
    popular: true,
    icon: <CrownOutlined />,
    color: '#52c41a'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large enterprises with advanced pricing strategies',
    features: [
      'Unlimited SKUs',
      'Advanced AI pricing models',
      'Custom integrations',
      'Dedicated account manager',
      'White-label solution',
      'On-premise deployment',
      'Custom training & support',
      'SLA guarantee'
    ],
    buttonText: 'Contact Sales',
    icon: <CrownOutlined />,
    color: '#722ed1'
  }
];

const Pricing: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const handleContactClick = () => {
    setContactModalOpen(true);
  };

  const handlePurchaseClick = (plan: any) => {
    setSelectedPlan(plan);
    setPurchaseModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  const closePurchaseModal = () => {
    setPurchaseModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Pricing Intelligence Plan
          </Title>
          <Text className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unlock the power of AI-driven pricing optimization with plans designed for businesses of all sizes.
            Start with a free trial and see immediate results.
          </Text>
        </div>
        
        <Row gutter={[24, 24]} justify="center">
          {pricingPlans.map((plan, index) => (
            <Col xs={24} sm={24} md={8} key={index}>
              <Card
                className={`h-full relative ${plan.popular ? 'border-2 border-green-500 shadow-lg scale-105' : 'border border-gray-200'}`}
                style={{ borderRadius: '12px' }}
                bodyStyle={{ padding: '32px' }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div 
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                    style={{ backgroundColor: `${plan.color}20`, color: plan.color }}
                  >
                    {plan.icon}
                  </div>
                  
                  <Title level={3} className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </Title>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-lg text-gray-600">{plan.period}</span>
                  </div>
                  
                  <Text className="text-gray-600 block">
                    {plan.description}
                  </Text>
                </div>
                
                <List
                  className="mb-8"
                  dataSource={plan.features}
                  renderItem={(feature) => (
                    <List.Item className="border-0 p-0">
                      <div className="flex items-center">
                        <CheckOutlined className="text-green-500 mr-3 flex-shrink-0" />
                        <Text className="text-gray-700">{feature}</Text>
                      </div>
                    </List.Item>
                  )}
                />
                
                <Button
                  type={plan.popular ? 'primary' : 'default'}
                  size="large"
                  block
                  onClick={() => plan.name === 'Enterprise' ? handleContactClick() : handlePurchaseClick(plan)}
                  style={{
                    backgroundColor: plan.popular ? plan.color : undefined,
                    borderColor: plan.color,
                    height: '48px',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                >
                  {plan.buttonText}
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-12">
          <Text className="text-sm text-gray-500">
            All plans include a 14-day free trial. No credit card required. Cancel anytime.
          </Text>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={closeContactModal}
        title="Contact Sales Team"
        reason="enterprise"
      />

      {/* Purchase Modal */}
      <PurchaseModal
        isOpen={purchaseModalOpen}
        onClose={closePurchaseModal}
        plan={selectedPlan}
      />
    </section>
  );
};

export default Pricing;
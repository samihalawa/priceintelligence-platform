import React from 'react';
import { Card, Typography, Row, Col, Avatar, Rate } from 'antd';
import { UserOutlined, MedicineBoxOutlined, ShoppingOutlined, BarChartOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

interface Testimonial {
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  industry: string;
  avatar: string;
  icon: React.ReactNode;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    title: 'VP of E-commerce',
    company: 'TechMart Solutions',
    content: 'PriceIntelligence Platform transformed our pricing strategy. We increased profit margins by 23% in just 3 months while staying competitive. The AI recommendations are incredibly accurate.',
    rating: 5,
    industry: 'E-commerce',
    avatar: 'SC',
    icon: <ShoppingOutlined />
  },
  {
    name: 'Michael Rodriguez',
    title: 'Chief Revenue Officer',
    company: 'GlobalRetail Inc.',
    content: 'The real-time competitor monitoring is a game-changer. We can now respond to market changes instantly. Our pricing decisions are data-driven, and our customers love the fair pricing.',
    rating: 5,
    industry: 'Retail',
    avatar: 'MR',
    icon: <BarChartOutlined />
  },
  {
    name: 'Jennifer Walsh',
    title: 'Director of Pricing',
    company: 'PharmaCorp',
    content: 'Managing pricing for 50,000+ SKUs was overwhelming. Now with PriceIntelligence, we have complete visibility and automated optimization. ROI was achieved within the first month.',
    rating: 5,
    industry: 'Pharmaceuticals',
    avatar: 'JW',
    icon: <MedicineBoxOutlined />
  },
  {
    name: 'David Kim',
    title: 'CEO',
    company: 'StartupFlow',
    content: 'As a growing startup, every pricing decision matters. This platform gives us enterprise-level pricing intelligence at an affordable price. The support team is exceptional.',
    rating: 5,
    industry: 'SaaS',
    avatar: 'DK',
    icon: <UserOutlined />
  },
  {
    name: 'Lisa Thompson',
    title: 'Product Manager',
    company: 'Consumer Goods Co.',
    content: 'The A/B testing tools helped us optimize our pricing strategy systematically. We identified the sweet spot that maximizes both sales and profit margins. Highly recommended!',
    rating: 5,
    industry: 'Consumer Goods',
    avatar: 'LT',
    icon: <UserOutlined />
  },
  {
    name: 'Robert Johnson',
    title: 'Head of Analytics',
    company: 'FashionForward',
    content: 'The predictive analytics feature is remarkable. We can now forecast pricing trends and adjust our strategy proactively. This has given us a significant competitive advantage.',
    rating: 5,
    industry: 'Fashion & Retail',
    avatar: 'RJ',
    icon: <ShoppingOutlined />
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </Title>
          <Text className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies that have revolutionized their pricing strategies 
            with our AI-powered platform. See real results from businesses like yours.
          </Text>
        </div>
        
        <Row gutter={[24, 24]}>
          {testimonials.map((testimonial, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                className="h-full border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                style={{ borderRadius: '12px' }}
                bodyStyle={{ padding: '24px' }}
              >
                <div className="flex items-center mb-4">
                  <Avatar
                    size={48}
                    style={{ 
                      backgroundColor: '#1890ff',
                      marginRight: '12px'
                    }}
                  >
                    {testimonial.avatar}
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <Text strong className="text-gray-900 block">
                          {testimonial.name}
                        </Text>
                        <Text className="text-sm text-gray-600 block">
                          {testimonial.title}
                        </Text>
                        <Text className="text-sm text-blue-600 block">
                          {testimonial.company}
                        </Text>
                      </div>
                      <div 
                        className="p-2 rounded-full"
                        style={{ backgroundColor: '#f0f0f0' }}
                      >
                        {testimonial.icon}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <Rate disabled defaultValue={testimonial.rating} className="text-sm" />
                </div>
                
                <Paragraph className="text-gray-700 mb-0 leading-relaxed">
                  "{testimonial.content}"
                </Paragraph>
                
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <Text className="text-xs text-gray-500 uppercase tracking-wide">
                    {testimonial.industry}
                  </Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">$2.3B+</div>
              <div className="text-sm text-gray-600">Revenue Optimized</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">25%</div>
              <div className="text-sm text-gray-600">Avg. Margin Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;